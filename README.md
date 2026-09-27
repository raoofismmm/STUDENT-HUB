# StudentHub!

A student opportunity platform — find internships, scholarships, part-time jobs, competitions, and add-on courses all in one place.

## 🚀 Live Demo

Deployed on GitHub Pages: `https://<your-username>.github.io/studenthub/`

## ✨ Features

- 🔍 **Search & Filter** — Filter by category and keyword search across all listings
- 👤 **Student Login / Signup** — Register with name, email, college, and year
- 📋 **Application Tracker** — Track applied opportunities with status updates (Applied → Shortlisted → Selected / Rejected)
- 📊 **Dashboard Stats** — See your application pipeline at a glance
- 💾 **Persistent Storage** — Uses localStorage so data is saved between sessions
- 📱 **Responsive** — Works on mobile, tablet, and desktop

## 📁 Project Structure

```
studenthub/
├── index.html          # Homepage with hero, categories, featured listings
├── css/
│   └── style.css       # All styles (dark theme, responsive)
├── js/
│   ├── data.js         # Shared data, opportunity listings, helper functions
│   └── main.js         # Homepage-specific JS
└── pages/
    ├── listings.html   # Browse all opportunities with filters
    ├── login.html      # Student login
    ├── signup.html     # Student registration
    └── tracker.html    # Application tracker + student profile
```

## 🛠️ Deploy to GitHub Pages

1. **Create a new GitHub repository** (e.g., `studenthub`)
2. **Upload all files** maintaining the folder structure above
3. Go to **Settings → Pages**
4. Under **Source**, select `Deploy from a branch`
5. Choose `main` branch and `/ (root)` folder
6. Click **Save** — your site will be live in a minute!

## 📦 No Build Required

This is a pure HTML/CSS/JS site. No npm, no frameworks, no build step. Just upload and go.

## 🎨 Tech Used

- HTML5, CSS3, Vanilla JavaScript
- Google Fonts (Syne + DM Sans)
- localStorage for data persistence

## 🔮 Future Improvements

- Backend API with real database
- Email notifications for deadlines
- Admin panel for posting new listings
- Resume upload & auto-fill applications
- College-specific filtering
