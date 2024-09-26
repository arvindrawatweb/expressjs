const mongoose = require('mongoose');
const mongoURI = 'mongodb://127.0.0.1:27017/lms';

const connDB = async () => {
    try {
        await mongoose.connect(mongoURI); 
        console.log('Connected to MongoDB');
    } catch (error) {
        console.error('Could not connect to MongoDB...', error);
    }
};

module.exports = connDB;
