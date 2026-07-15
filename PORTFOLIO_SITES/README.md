# Ujjwal Upadhyay - Portfolio Site

## 📋 Overview
This is a professional portfolio website for Ujjwal Upadhyay, a Computer Science Engineering Diploma student. The site showcases skills, projects, education, and contact information with a modern, responsive design.

## ✨ Features

### 🎨 Design
- **Dark/Light Theme Toggle** - Switch between dark and light modes with persistent storage
- **Responsive Design** - Works seamlessly on desktop, tablet, and mobile devices
- **Professional Styling** - Clean, modern UI with smooth animations and transitions
- **Modern Gradient Colors** - Brown and tan gradient theme for professional look

### 📱 Sections
1. **Hero Section** - Eye-catching introduction with profile photo
2. **Navigation Bar** - Sticky navigation with smooth scrolling
3. **About Section** - Career objective, education details, and contact information
4. **Skills Section** - Technical skills, professional skills, and strengths
5. **Projects Section** - Portfolio projects showcase
6. **Languages Section** - Languages proficiency
7. **Contact Section** - Contact information cards
8. **Footer** - Copyright and attribution

### 🎭 Animations & Effects
- Fade-in animations on scroll
- Hover effects on cards and buttons
- Smooth transitions between sections
- Gradient overlays
- Transform animations

## 📂 File Structure
```
PORTFOLIO_SITES/
├── index.html      # Main HTML file
├── styles.css      # CSS styling and responsive design
├── script.js       # JavaScript functionality
├── profile.jpg     # Profile photo (add your image here)
└── README.md       # This file
```

## 🚀 Getting Started

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- A text editor (VS Code, Sublime Text, etc.)

### Installation
1. Clone or download this repository
2. Replace `profile.jpg` with your own profile picture (keep the same name)
3. Open `index.html` in your web browser

### Customization

#### Update Personal Information
Edit the following in `index.html`:
- Name: Line 48
- Contact details: Line 84-86
- Education details: Line 91-93
- Skills: Lines 103-118
- Languages: Lines 162-173

#### Change Colors
Edit the CSS variables in `styles.css` (lines 1-5):
```css
:root {
    --primary-color: #8B6F47;      /* Change primary color */
    --secondary-color: #D4A574;    /* Change secondary color */
    --text-dark: #2C2C2C;          /* Change text color */
    --bg-light: #FFFFFF;           /* Change background */
}
```

#### Add Your Profile Photo
1. Replace `profile.jpg` with your image
2. Keep the filename as `profile.jpg`
3. Ensure image is square (1:1 aspect ratio) for best results

## 🎨 Theme System

### Dark Mode Features
- Automatically detects system preference
- Saves user preference in localStorage
- Smooth transition between themes
- All colors adapt to the current theme

### Color Scheme
- **Primary**: #8B6F47 (Brown)
- **Secondary**: #D4A574 (Tan)
- **Text (Light)**: #2C2C2C
- **Background**: #FFFFFF / #1A1A1A (dark mode)

## 📱 Responsive Breakpoints
- **Desktop**: 1200px and above
- **Tablet**: 768px - 1199px
- **Mobile**: Below 768px
- **Small Mobile**: Below 480px

## 🔧 JavaScript Features

### Theme Toggle
```javascript
// Automatically saves theme preference
// Persists across browser sessions
```

### Smooth Scrolling
```javascript
// Click navigation links for smooth scroll
// Active state indicator in navigation
```

### Scroll Animations
```javascript
// Elements fade in as you scroll
// Intersection Observer API for performance
```

### Mobile Menu
```javascript
// Hamburger menu for mobile devices
// Auto-close on link click
```

## 🌐 Deployment

### Deploy on GitHub Pages
1. Push this repository to GitHub
2. Go to Settings → Pages
3. Select `main` branch as source
4. Your site will be live at `https://username.github.io/codealpha_tasks/PORTFOLIO_SITES`

### Deploy on Netlify
1. Connect your GitHub repository to Netlify
2. Deploy will happen automatically
3. Get a shareable link instantly

## 📞 Contact Information
- **Phone**: 7617842524
- **Email**: darksha0401@gmail.com
- **Location**: Lucknow, Uttar Pradesh, India

## 💻 Technologies Used
- **HTML5** - Semantic structure
- **CSS3** - Modern styling and animations
- **JavaScript (ES6+)** - Interactivity and functionality
- **Font Awesome 6.4** - Icons

## 🎓 Education
- **Institution**: Ambalika Institute of Management and Technology
- **Program**: Diploma in Computer Science Engineering
- **Year**: 3rd Year - 5th Semester
- **Period**: 2024-27

## 💡 Skills Highlighted

### Technical Skills
- Python (Learning)
- HTML
- Computer Fundamentals
- Internet & Email

### Professional Skills
- Data Literacy
- Digital Tool Agility
- Clear Communication
- Problem-Solving
- Adaptability

### Strengths
- Learning Agility
- Analytical Thinking
- Highly Dependable
- Positive Attitude & Resilience
- Collaborative (Team Player)

## 📄 License
This portfolio is personal work and is free to use and modify for your own portfolio.

## 🙏 Credits
- Icons by Font Awesome
- Designed and developed with ❤️ by Ujjwal Upadhyay

## 📝 Notes
- Replace all placeholder content with your actual information
- Test the site on multiple devices before deploying
- Keep the image dimensions consistent (square format for profile images)
- Regularly update your projects and skills sections

## 🐛 Troubleshooting

### Image not showing?
- Ensure `profile.jpg` is in the same directory as `index.html`
- Check image file size (recommended: less than 500KB)
- Try using absolute paths if relative paths don't work

### Theme not persisting?
- Clear browser cache and cookies
- Check if localStorage is enabled in your browser
- Open in a non-private/incognito window

### Mobile menu not working?
- Clear browser cache
- Check JavaScript is enabled
- Try a different browser

## 🚀 Future Enhancements
- Add blog section
- Include downloadable resume
- Add testimonials section
- Implement contact form with backend
- Add project case studies
- Include social media links

---

**Last Updated**: July 2024
**Version**: 1.0