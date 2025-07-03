**LinkSphere – Secure and Smart URL Shortener**

LinkSphere is a full-stack URL shortening platform focused on efficiency, security, and privacy. Unlike traditional shorteners, it prevents duplicate links, blocks malicious URLs, and keeps link analytics private to the creator. It also includes an auto-expiry system to clean up unused links and is designed with future support for user accounts and personalized dashboards.

---


## 📑 Table of Contents
- [Key Features](#key-features)
- [Technology Stack](#technology-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running the Application](#running-the-application)
  - [Available Scripts](#available-scripts)
- [Contributing](#contributing)

---
🚀 Key Features
Duplicate-Free Short URLs: The same long URL always generates the same short link.

Malicious URL Protection: Integrates Google Safe Browsing API to detect and block unsafe or phishing URLs.

Private Analytics: Click counts are stored and visible only to the link creator.

Auto-Expiry of Links: Unused links are automatically deleted after 7 days using MongoDB TTL indexing.

User Authentication : Secure login system to allow users to manage their own set of links.

---

🛠️ Technology Stack

Frontend
EJS: Templating engine for server-rendered views

Bootstrap: Responsive, mobile-first UI framework

Backend
Node.js: JavaScript runtime for the server

Express.js: Minimal and fast web application framework

Database
MongoDB: NoSQL database with support for TTL indexing

Mongoose: Object modeling tool for MongoDB

Security
Google Safe Browsing API: Used to validate URLs before shortening them

---

📌 How It Works
User submits a long URL on the homepage.

The server checks if a short version already exists for that URL.

If it doesn't exist, the URL is validated using the Safe Browsing API.

If safe, a unique short ID is generated and stored in the database.

Visiting the short URL redirects the user to the original link and updates click count.

If unused for 7 days, the URL is automatically removed from the database.

---

🏁 Getting Started
Follow these steps to set up and run LinkSphere locally.

Prerequisites
Make sure you have the following installed:

Node.js (v16 or higher)

MongoDB (local or MongoDB Atlas)

npm (or yarn)

Installation
Clone the Repository:


git clone https://github.com/desaishro/linksphere.git
cd linksphere
Install Dependencies:
npm install

Run the Application:
npm start

Open in Browser:
Visit http://localhost:5000 to use the application.

---

🌱 Future Enhancements
Custom Short URLs for branding and readability

User Authentication with dashboards to manage personal links

Advanced Analytics with device, location, and referrer data

QR Code Generation for every shortened link
