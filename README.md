# LinkSphere

LinkSphere is a full-stack URL shortener that focuses on privacy, security, and efficiency. It enables users to shorten URLs while preventing duplication, blocking malicious URLs, and keeping analytics private to the link owner. The platform is ideal for both individual users and businesses looking to manage links more securely.

Key Features
Consistent Short URLs: Generates the same short URL for the same long URL, avoiding duplicates.

Malicious URL Detection: Uses Google Safe Browsing API to block unsafe or phishing URLs before shortening.

Private Analytics: Only the creator of a short URL can view the number of clicks and insights.

Auto-Expiry: Automatically deletes unused links after 7 days using MongoDB’s TTL (Time-To-Live) indexing.

User Authentication : Will allow users to manage and organize their shortened links through personal accounts.

Technology Stack
Frontend
EJS (Embedded JavaScript Templates) for rendering dynamic pages

Bootstrap for responsive and clean UI

Backend
Node.js and Express.js for handling server logic and routing

Database
MongoDB with Mongoose for schema design, indexing, and TTL

Google Safe Browsing API for URL safety validation

How It Works
The user enters a long URL on the homepage.

The system checks if the URL already exists and is safe.

If it’s safe and not already shortened, a new short URL is generated and stored.

When the short URL is accessed, it redirects to the original URL and updates the click count.

If the URL remains unused for 7 days, MongoDB automatically deletes it.

Getting Started
Prerequisites
Node.js 

MongoDB 

npm or yarn

Installation
Clone the repository:

git clone https://github.com/desaishro/linksphere.git
cd linksphere
Install backend dependencies:


npm install
Set up environment variables:
Create a .env file and add:

Run the application:


npm start
Open in your browser:


http://localhost:5000
Future Enhancements
Custom short URLs for branding

User dashboard with login/signup for link history

QR code generation for each shortened link

Advanced analytics 
