const mongoose = require("mongoose");

async function connectMongoDB(url){
    try {
        await mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });
        console.log("MongoDB connected successfully");
    } catch (error) {
        console.error("MongoDB connection failed:", error);
        throw error;
    }
}

module.exports = {
    connectMongoDB,
}
