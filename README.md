# LinkSphere
LinkSphere is an advanced URL shortener that focuses on efficiency, security, and privacy. Unlike traditional shorteners, it prevents duplicate links, blocks malicious URLs, and provides analytics only to the link owner.

🔥 Features
✅ Unique Short URLs – Same long URL gets the same short URL.
✅ Malicious URL Protection – Uses Google Safe Browsing API to block harmful links.
✅ Private Analytics – Only the creator can see click counts.
✅ Auto-Expiry – Unused links delete automatically after 7 days to save space.
✅ User Authentication (Future Scope) – Personalized link tracking & management.

🛠️ Tech Stack
Backend: Node.js, Express.js

Database: MongoDB (with indexing & TTL for auto-deletion)

Frontend: EJS, Bootstrap

Security: Google Safe Browsing API for link validation

📌 How It Works
1️⃣ User enters a long URL → System checks for existing short link.

2️⃣ If malicious, the URL is rejected.

3️⃣ If safe, a unique short link is generated & stored in MongoDB.

4️⃣ When someone visits the short link, the system redirects them & logs the click count.

5️⃣ The link auto-expires after 7 days if not used.

⚡ Installation & Setup
Clone the repository:
git clone : git clone https://github.com/desaishro/linksphere.git

cd linksphere
Install dependencies:

npm install

Start the server:

npm start
Open in browser: http://localhost:3000

📌 Future Enhancements

Custom short URLs for branding

User dashboard for managing links

Advanced analytics & QR code generation
