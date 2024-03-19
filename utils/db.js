const mongoose = require("mongoose")

//const URI = "mongodb+srv://cluster0.ppbyygj.mongodb.net/db"
//mongoose.connect(URI);

const URI= process.env.MONGODB_URI;

const connectDb = async () => {
    try {
        await mongoose.connect(URI);
        console.log('connection successful')
    } catch (error) {
        console.error("database connection failed");
        process.exit(0);
    }
};

module.exports = connectDb;