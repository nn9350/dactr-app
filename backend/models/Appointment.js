const mongoose = require('mongoose');

const appointmentSchema = new mongoose.Schema({
    // Patient Information
    name: {
        type: String,
        required: [true, 'Patient name is required'],
        trim: true
    },
    phone: {
        type: String,
        required: [true, 'Phone number is required'],
        trim: true,
        match: [/^[0-9]{10}$/, 'Please enter a valid 10-digit phone number']
    },
    
    // Appointment Details
    date: {
        type: Date,
        required: [true, 'Appointment date is required']
    },
    time: {
        type: String,
        required: [true, 'Appointment time is required'],
        enum: ['morning', 'afternoon', 'evening']
    },
    
    // Problem Description
    problem: {
        type: String,
        trim: true
    },
    
    // Status Tracking
    status: {
        type: String,
        enum: ['pending', 'confirmed', 'completed', 'cancelled'],
        default: 'pending'
    },
    
    // Clinic Reference (optional - for multi-clinic support)
    clinic: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Clinic'
    },
    
    // Treatment Details (filled after appointment)
    treatment: {
        type: String,
        trim: true
    },
    cost: {
        type: Number,
        min: 0
    },
    
    // Notes (for dentist)
    notes: {
        type: String,
        trim: true
    }
}, {
    timestamps: true // Automatically add createdAt and updatedAt
});

// Index for faster queries
appointmentSchema.index({ date: 1, status: 1 });
appointmentSchema.index({ phone: 1 });

// Virtual for formatted date
appointmentSchema.virtual('formattedDate').get(function() {
    return this.date.toLocaleDateString('en-IN');
});

// Method to check if appointment is upcoming
appointmentSchema.methods.isUpcoming = function() {
    return this.date > new Date() && this.status !== 'cancelled';
};

const Appointment = mongoose.model('Appointment', appointmentSchema);

module.exports = Appointment;
