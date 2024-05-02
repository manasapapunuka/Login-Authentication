const mongoose = require('mongoose');
const mongoURL="mongodb+srv://login-authentication:login-authentication@cluster0.ipo5sco.mongodb.net/login-authentication?retryWrites=true&w=majority&appName=Cluster0"

const mongoDB = async () => {
    try {
        await mongoose.connect(mongoURL);
        console.log("Connected to mongodb");  
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
    }
};

mongoDB();
