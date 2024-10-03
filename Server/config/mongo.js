const mongoose = require('mongoose');

const connectDB = async () => {

    mongoose.connection.on('connected', () => {
        console.log('mongoDB connected');
    });

    await mongoose.connect(`${process.env.MONGO_URI}/e-commerce`);
}

module.exports = connectDB