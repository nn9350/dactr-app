const express = require('express');
const router = express.Router();
const Clinic = require('../models/Clinic');

// GET all clinics
router.get('/', async (req, res) => {
    try {
        const clinics = await Clinic.find();
        
        res.json({
            success: true,
            count: clinics.length,
            data: clinics
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            error: error.message
        });
    }
});

// GET single clinic
router.get('/:id', async (req, res) => {
    try {
        const clinic = await Clinic.findById(req.params.id);
        
        if (!clinic) {
            return res.status(404).json({
                success: false,
                error: 'Clinic not found'
            });
        }
        
        res.json({
            success: true,
            data: clinic
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            error: error.message
        });
    }
});

// POST create clinic
router.post('/', async (req, res) => {
    try {
        const clinic = await Clinic.create(req.body);
        
        res.status(201).json({
            success: true,
            message: 'Clinic created successfully',
            data: clinic
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            error: error.message
        });
    }
});

// PUT update clinic
router.put('/:id', async (req, res) => {
    try {
        const clinic = await Clinic.findByIdAndUpdate(
            req.params.id,
            req.body,
            {
                new: true,
                runValidators: true
            }
        );
        
        if (!clinic) {
            return res.status(404).json({
                success: false,
                error: 'Clinic not found'
            });
        }
        
        res.json({
            success: true,
            message: 'Clinic updated successfully',
            data: clinic
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            error: error.message
        });
    }
});

module.exports = router;
