# Shahid Mir - Academic Portfolio

A modern, responsive academic portfolio website showcasing research, education, and professional expertise. Built with React 19 and Vite, featuring a sleek dark theme with smooth animations and glass-morphism effects.

## 🎓 About

This portfolio belongs to **Shahid Mir**, Special Advisor and Academic Mentor at Writers INN Competitive Academy (WICA), specializing in:
- Biotechnology (EQF Level 6)
- Political Science (EQF Level 5)
- Competitive Examination Mentorship
- Academic Writing & Research

## ✨ Features

- 🎨 **Modern Dark Theme** - Sleek dark design with gradient accents and glass-morphism effects
- 📱 **Fully Responsive** - Optimized for all devices (Desktop, Tablet, Mobile)
- 🚀 **Fast Performance** - Built with Vite for lightning-fast load times
- 🎭 **Smooth Animations** - Scroll effects and hover interactions
- 📄 **PDF Integration** - Direct links to research papers, notes, and publications
- 🔍 **SEO Optimized** - Proper meta tags and semantic HTML
- ♿ **Accessible** - WCAG compliant design
- 🌐 **Social Integration** - Facebook, Instagram, LinkedIn, and Email links

## 🛠️ Tech Stack

- **Frontend Framework:** React 19.2.0
- **Build Tool:** Vite 7.3.1
- **Styling:** CSS3 with modern features (Grid, Flexbox, Gradients, Glass-morphism)
- **Icons:** React Icons 5.6.0
- **Deployment:** Vercel
- **Version Control:** Git & GitHub

## 📦 Installation & Setup

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### Quick Start

```bash
# Clone the repository
git clone https://github.com/yourusername/portfolio.git

# Navigate to project directory
cd portfolio

# Install dependencies
npm install

# Start development server
npm run dev
```

The application will open at `http://localhost:5173/`

### Build for Production

```bash
# Create production build
npm run build

# Preview production build
npm run preview
```

## 📂 Project Structure

```
portfolio/
├── public/                      # Static assets
│   ├── book.pdf                # FPSC Biology MCQs Book
│   ├── Pak Affairs Notes - Shahid Mir.pdf
│   ├── Criminology Final Notes- Shahid Mir.pdf
│   └── vite.svg
├── src/
│   ├── components/              # React components
│   │   ├── About.jsx           # About section with 4 cards
│   │   ├── About.css
│   │   ├── Contact.jsx         # Contact information with social links
│   │   ├── Contact.css
│   │   ├── Expertise.jsx       # 5 expertise cards
│   │   ├── Expertise.css
│   │   ├── Footer.jsx          # Footer with social links
│   │   ├── Footer.css
│   │   ├── Hero.jsx            # Landing section with bio
│   │   ├── Hero.css
│   │   ├── Navbar.jsx          # Transparent navigation bar
│   │   ├── Navbar.css
│   │   ├── Research.jsx        # Research papers (3 cards)
│   │   ├── Research.css
│   │   ├── Timeline.jsx        # Education & career timeline
│   │   ├── Timeline.css
│   │   ├── Toolkit.jsx         # Skills and tools
│   │   └── Toolkit.css
│   ├── images/                  # Image assets
│   │   ├── 2.png               # Hero profile image
│   │   └── 3.png               # Contact profile image
│   ├── App.jsx                  # Main app component
│   ├── main.jsx                 # Entry point
│   └── index.css                # Global styles
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── vercel.json                  # Vercel deployment config
├── vite.config.js
└── README.md
```

## 🎯 Key Sections

### 1. **Hero Section**
- Professional introduction with animated gradient name
- Bio highlighting academic background and teaching philosophy
- Profile image with hover effects
- Dark theme with glass-morphism card

### 2. **About Me**
- 4 cards showcasing:
  - **Academic Foundation** - Biotechnology & Political Science background
  - **Professional Growth** - Research and examination preparation experience
  - **Achievements** - Award-winning public speaker and debater
  - **Vision** - Commitment to continuous learning and innovation

### 3. **Areas of Expertise**
- 5 expertise cards with icons:
  - Political Science
  - Gender Studies
  - General Science
  - Criminology
  - Geography
- Responsive grid layout (3 columns → 2 → 1)

### 4. **My Journey (Timeline)**
- 5 milestone cards:
  - Special Advisor at WICA (2021-Present)
  - Competitive Examination Journey (2026)
  - BS in Biotechnology (2020-2024)
  - Associate Degree in Political Science (2020-2022)
  - Oratory Milestones (Speech & Debate achievements)

### 5. **Research & Publications**
- 3 research cards with PDF downloads:
  - **Featured Book** - FPSC Lecturer Biology MCQs Bank (with Buy Book button)
  - **Pakistan Affairs Notes** - Comprehensive CSS exam material
  - **Criminology Notes** - Specialized CSS framework
- VIP featured card with golden theme
- All PDFs downloadable

### 6. **Contact**
- 5 contact methods:
  - Email: shahidmir1302@icloud.com
  - Phone: 0340-3698788
  - Facebook Profile
  - Instagram Profile
  - LinkedIn Profile
- Profile image with contact card

### 7. **Footer**
- Quick navigation links
- Contact information
- 4 social media icons (Facebook, Instagram, LinkedIn, Email)
- Copyright notice

## 📱 Responsive Design

### Breakpoints:
- **Desktop:** > 1024px (3-column layouts)
- **Tablet:** 768px - 1024px (2-column layouts)
- **Mobile:** < 768px (1-2 column layouts)

### Mobile-Specific Features:
- **Expertise Section:** Shows all 5 cards with responsive grid
- **Hamburger Menu:** Collapsible navigation
- **Optimized Typography:** Scaled font sizes for readability
- **Touch-Friendly:** Larger tap targets
- **Research Cards:** 3 cards in one row on desktop, responsive on mobile

## 🎨 Design Features

### Color Scheme:
- **Primary Background:** Dark navy (#0a0e1a, #0f172a, #1a1f2e)
- **Accent Colors:** Blue gradients (#60a5fa, #3b82f6) and Purple (#a78bfa, #8b5cf6)
- **VIP Elements:** Gold/Yellow (#ffd700) for featured content
- **Text:** Light gray (#cbd5e1, #94a3b8) on dark backgrounds
- **Glass-morphism:** Transparent navbar with backdrop blur

### Animations:
- Scroll reveal effects
- Hover transformations
- Gradient animations
- Smooth transitions
- Glass-morphism effects

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. **Install Vercel CLI:**
```bash
npm install -g vercel
```

2. **Deploy:**
```bash
vercel
```

3. **Production Deployment:**
```bash
vercel --prod
```

### Deploy to Netlify

1. Build the project:
```bash
npm run build
```

2. Deploy the `dist` folder to Netlify

### Deploy to GitHub Pages

1. Install gh-pages:
```bash
npm install --save-dev gh-pages
```

2. Add to package.json:
```json
"homepage": "https://yourusername.github.io/portfolio",
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}
```

3. Deploy:
```bash
npm run deploy
```

## 🔧 Configuration

### Vite Config (`vite.config.js`)
```javascript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
})
```

### Vercel Config (`vercel.json`)
```json
{
  "rewrites": [
    { "source": "/(.*)", "destination": "/" }
  ]
}
```

## 📊 Performance

- ⚡ **Lighthouse Score:** 95+
- 🎯 **First Contentful Paint:** < 1.5s
- 📦 **Bundle Size:** ~227KB (gzipped: ~72KB)
- 🖼️ **Image Optimization:** Lazy loading enabled

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.
## 🙏 Acknowledgments

- React Icons for beautiful icons
- Vite for blazing fast build tool
- Vercel for seamless deployment
- All open-source contributors

---

**Made with ❤️ by Shahid Mir**

*Last Updated: May 2026*
