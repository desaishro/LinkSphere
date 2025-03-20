const mongoose = require("mongoose");

const urlSchema = new mongoose.Schema({
    shortId: {
        type: String,
        required: true,
        unique: true,
    },
    redirectURL: {
        type: String,
        required: true,
    },
    totalClicks: {
        type: Number,
        default: 0,
    },
    visitHistory: [{
        timestamp: {
            type: Date,
            required: true,
        }
    }],
}, 
{
    timestamps: true // Automatically adds createdAt and updatedAt fields
});

const Url = mongoose.model("Url", urlSchema);

module.exports = Url;
