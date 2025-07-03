LinkSphere – Secure and Smart URL Shortener

LinkSphere is a full-stack URL shortener built with a focus on security, privacy, and usability. It allows users to generate unique short URLs, blocks malicious links, and ensures that link analytics are visible only to the creator. The system also includes an auto-expiry feature to remove unused links after a specific duration, ensuring efficient database management.


📑 Table of Contents
Key Features

Technology Stack

How It Works

Getting Started

Installation

Future Enhancements

Contributors

🚀 Key Features
Duplicate-Free Short URLs: The same long URL always generates the same short link.

Malicious URL Protection: Integrates Google Safe Browsing API to prevent shortening of unsafe or phishing URLs.

Private Click Analytics: Click counts are visible only to the link creator .

Auto-Expiry: Unused links are automatically deleted after 7 days using MongoDB TTL indexing.

User Authentication : Secure login system to allow link management by registered users.

🛠️ Technology Stack
Frontend
EJS – Templating engine for rendering views

Bootstrap – Responsive design and layout

Backend
Node.js – JavaScript runtime environment

Express.js – Server-side routing and logic

Database
MongoDB – NoSQL database with indexing and TTL features

Mongoose – ODM for MongoDB schema and model handling

Security
Google Safe Browsing API – Detects and blocks malicious URLs during submission

📌 How It Works
User enters a long URL on the homepage.

The server checks if a shortened version already exists.

If not, the system validates the URL using the Safe Browsing API.

If valid, a unique short ID is generated and stored.

When the short link is accessed, the system redirects to the original URL and updates the click count.

If the link is unused for 7 days, MongoDB automatically deletes it.

🧭 Getting Started
Prerequisites
Node.js (v16 or higher)

MongoDB (local or MongoDB Atlas)

npm

📦 Installation
Clone the Repository


git clone https://github.com/desaishro/linksphere.git
cd linksphere
Install Dependencies

npm install

Run the Application

npm start
Visit in Browser

http://localhost:5000

🌱 Future Enhancements

Custom short links for branded usage

User authentication and dashboard

Advanced analytics 

QR code generation for each short URL
