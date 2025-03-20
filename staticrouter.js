const express = require("express");
const Url = require("../models/url");

const router = express.Router();

// Route to display all URLs
router.get("/", async (req, res) => {
    try {
        const allUrls = await Url.find({}); // Await the promise
        return res.render("home", {
           urls: allUrls
        });
    } catch (error) {
        console.error(error);
        return res.status(500).send('Internal Server Error');
    }
});

module.exports = router;
