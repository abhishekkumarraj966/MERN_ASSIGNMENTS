const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
    name: {
        required: true,
        type: String
    },
    gender: {
        required: true,
        type: String
    },
    nationality: {
        required: true,
        type: String
    },
    email: {
        required: true,
        type: String
    },
    phoneNumber: {
        required: true,
        type: String
    },
    address: {
        required: true,
        type: String
    },
    message: {
        required: true,
        type: String
    }
});

module.exports = mongoose.model('Data', dataSchema);
