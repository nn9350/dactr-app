const express = require('express');
const router = express.Router();
const Appointment = require('../models/Appointment');

// GET all appointments
router.get('/', async (req, res) => {
    try {
        const { status, date, phone } = req.query;
        let query = {};
        
        // Filter by status
        if (status) query.status = status;
        
        // Filter by date
        if (date) {
            const searchDate = new Date(date);
            query.date = {
                $gte: new Date(searchDate.setHours(0, 0, 0)),
                $lt: new Date(searchDate.setHours(23, 59, 59))
            };
        }
        
        // Filter by phone
        if (phone) query.phone = phone;
        
        const appointments = await Appointment.find(query)
            .sort({ date: -1 })
            .limit(100);
        
        res.json({
            success: true,
            count: appointments.length,
            data: appointments
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            error: error.message
        });
    }
});

// GET single appointment by ID
router.get('/:id', async (req, res) => {
    try {
        const appointment = await Appointment.findById(req.params.id);
        
        if (!appointment) {
            return res.status(404).json({
                success: false,
                error: 'Appointment not found'
            });
        }
        
        res.json({
            success: true,
            data: appointment
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            error: error.message
        });
    }
});

// POST create new appointment
router.post('/', async (req, res) => {
    try {
        const { name, phone, date, time, problem } = req.body;
        
        // Validation
        if (!name || !phone || !date || !time) {
            return res.status(400).json({
                success: false,
                error: 'Please provide name, phone, date, and time'
            });
        }
        
        // Create appointment
        const appointment = await Appointment.create({
            name,
            phone,
            date,
            time,
            problem,
            status: 'pending'
        });
        
        res.status(201).json({
            success: true,
            message: 'Appointment booked successfully',
            data: appointment
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            error: error.message
        });
    }
});

// PUT update appointment
router.put('/:id', async (req, res) => {
    try {
        const appointment = await Appointment.findByIdAndUpdate(
            req.params.id,
            req.body,
            {
                new: true, // Return updated document
                runValidators: true // Run schema validators
            }
        );
        
        if (!appointment) {
            return res.status(404).json({
                success: false,
                error: 'Appointment not found'
            });
        }
        
        res.json({
            success: true,
            message: 'Appointment updated successfully',
            data: appointment
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            error: error.message
        });
    }
});

// DELETE appointment
router.delete('/:id', async (req, res) => {
    try {
        const appointment = await Appointment.findByIdAndDelete(req.params.id);
        
        if (!appointment) {
            return res.status(404).json({
                success: false,
                error: 'Appointment not found'
            });
        }
        
        res.json({
            success: true,
            message: 'Appointment deleted successfully'
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            error: error.message
        });
    }
});

// GET appointment statistics
router.get('/stats/summary', async (req, res) => {
    try {
        const total = await Appointment.countDocuments();
        const pending = await Appointment.countDocuments({ status: 'pending' });
        const confirmed = await Appointment.countDocuments({ status: 'confirmed' });
        const completed = await Appointment.countDocuments({ status: 'completed' });
        
        // Today's appointments
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        const tomorrow = new Date(today);
        tomorrow.setDate(tomorrow.getDate() + 1);
        
        const todayCount = await Appointment.countDocuments({
            date: { $gte: today, $lt: tomorrow }
        });
        
        res.json({
            success: true,
            data: {
                total,
                pending,
                confirmed,
                completed,
                today: todayCount
            }
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            error: error.message
        });
    }
});

module.exports = router;
