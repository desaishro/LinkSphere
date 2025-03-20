const express = require('express');
const { handleGenerateNewShortURL, handleGetAnalytics } = require("../controllers/Controller_url");

const router = express.Router();

// POST route for generating new short URL
router.post('/url', handleGenerateNewShortURL);

// GET route for fetching analytics of a short URL
router.get('/analytics/:shortId', handleGetAnalytics); // Ensure shortId is a parameter


module.exports = router;
