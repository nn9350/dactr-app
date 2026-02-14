const mongoose = require('mongoose');

const clinicSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Clinic name is required'],
        trim: true
    },
    
    // Contact Information
    phone: {
        type: String,
        required: [true, 'Clinic phone is required'],
        trim: true
    },
    email: {
        type: String,
        trim: true,
        lowercase: true
    },
    
    // Location
    address: {
        street: String,
        city: String,
        state: String,
        pincode: String
    },
    
    // Working Hours
    workingHours: {
        morning: { start: String, end: String },
        afternoon: { start: String, end: String },
        evening: { start: String, end: String }
    },
    
    // Settings
    settings: {
        language: {
            type: String,
            enum: ['en', 'hi'],
            default: 'en'
        },
        enableWhatsApp: {
            type: Boolean,
            default: false
        },
        enableSMS: {
            type: Boolean,
            default: false
        }
    },
    
    // Dentist Information
    dentist: {
        name: String,
        qualification: String,
        experience: Number
    }
}, {
    timestamps: true
});

const Clinic = mongoose.model('Clinic', clinicSchema);

module.exports = Clinic;
