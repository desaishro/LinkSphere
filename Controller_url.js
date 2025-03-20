const shortid = require("shortid");
const Url = require('../models/url');

// Controller for generating a new short URL
async function handleGenerateNewShortURL(req, res) {
    const body = req.body;

    // Check if the URL is provided
    if (!body.url) {
        return res.status(400).json({ error: 'URL is required' });
    }

    // Generate a unique short URL ID
    const shortID = shortid.generate();
    
    // Create the new URL entry in the database
    const newUrl = await Url.create({
        shortId: shortID,
        redirectURL: body.url,
        visitHistory: [],
        totalClicks: 0
    });

    // Fetch all URLs from the database to display in the table
    const allUrls = await Url.find({});

    // Render the home page and pass the URLs
    res.render("home", {
        urls: allUrls  // Make sure you're passing 'urls' to the view
    });
}



// Controller for fetching analytics for a short URL
async function handleGetAnalytics(req, res) {
    const shortId = req.params.shortId; // Ensure you are getting this parameter correctly
    try {
        const result = await Url.findOne({ shortId });

        if (result) {
            return res.json({
                totalClicks: result.visitHistory.length,
                Analytics: result.visitHistory
            });
        } else {
            return res.status(404).json({ error: "Short URL not found" });
        }
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: "Server Error" });
    }
}


module.exports = {
    handleGenerateNewShortURL,
    handleGetAnalytics,
    
};
