const express = require("express");
const { connectMongoDB } = require('./connection');
const bodyParser = require('body-parser');
const urlRouter = require('./routers/url');
const path = require('path');
const Url = require('./models/url'); // Ensure this line is present

const passport = require("passport");
const localStrategy = require('passport-local').Strategy;
const staticRoute = require('./routers/staticrouter');
const port = 8002;

const app = express();

// Connect to MongoDB
connectMongoDB("mongodb://localhost:27017/short-url")
    .then(() => console.log('MongoDB connected'))
    .catch((err) => console.error('MongoDB connection error:', err));


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Middleware for logging requests
const logRequest = (req, res, next) => {
    console.log(`${new Date().toLocaleString()} Request Made to: ${req.originalUrl}`);
    next();
};

app.use(logRequest); // Use logging middleware
app.set("view engine", "ejs");
app.set('views', path.resolve("./views"));

app.use('/', urlRouter);
app.use("/", staticRoute);
app.get('/:shortId', async (req, res) => {
    const { shortId } = req.params;
    try {
        const url = await Url.findOne({ shortId });
        if (url) {
            url.totalClicks += 1; // Increment the click count
            url.visitHistory.push({ timestamp: new Date() }); // Optionally store visit history
            await url.save();
            res.redirect(url.originalURL);
        } else {
            res.status(404).send('URL not found');
        }
    } catch (err) {
        console.error('Error redirecting:', err);
        res.status(500).send('Server Error');
    }
});
// Route for handling redirection based on short ID


app.listen(port, () => {
    console.log(`Server started on port: ${port}`);
});
