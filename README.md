# Dakota Davis - Portfolio

A modern, sleek portfolio website built with React, Vite, and Tailwind CSS featuring a beautiful purple theme with subtle animations and glassmorphism effects.

## ✨ Features

- **Modern Design**: Clean, professional layout with purple gradient accents
- **Dark/Light Theme**: Toggle between themes with smooth transitions
- **Responsive**: Fully responsive design that works on all devices
- **Animations**: Subtle animations including floating elements, gradient backgrounds, and hover effects
- **Glassmorphism**: Beautiful glass-like effects throughout the interface
- **Interactive Elements**: Smooth scrolling navigation and interactive hover states
- **GitHub Pages Ready**: Configured for easy deployment to GitHub Pages

## 🛠️ Built With

- **React** - Frontend framework
- **Vite** - Build tool and development server
- **Tailwind CSS** - Utility-first CSS framework
- **Custom Animations** - CSS keyframes and transitions
- **Inter Font** - Modern typography

## 🚀 Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/dakotadavis58/simple-portfolio.git
cd simple-portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:5173](http://localhost:5173) to view the portfolio in your browser.

## 📦 Deployment to GitHub Pages

The portfolio is pre-configured for GitHub Pages deployment. To deploy:

1. Build the project:
```bash
npm run build
```

2. Deploy to GitHub Pages:
```bash
npm run deploy
```

The portfolio will be available at: `https://dakotadavis58.github.io/simple-portfolio`

### Manual Deployment Setup

If you need to set up GitHub Pages manually:

1. Go to your GitHub repository settings
2. Navigate to the "Pages" section
3. Select "Deploy from a branch" as the source
4. Choose the `gh-pages` branch
5. Save the settings

## 🎨 Customization

### Colors

The purple theme can be customized in `tailwind.config.cjs` by modifying the `primary` color palette.

### Content

Update the personal information in the components:
- `src/components/Hero.jsx` - Main hero section
- `src/components/About.jsx` - About section and skills
- `src/components/Projects.jsx` - Projects showcase
- `src/components/Contact.jsx` - Contact information and social links

### Theme

The dark/light theme system is managed by the `ThemeContext` in `src/contexts/ThemeContext.jsx`.

## 📱 Sections

- **Hero**: Eye-catching introduction with animated background
- **About**: Personal information, skills, and quick stats
- **Projects**: Portfolio projects (currently shows "Under Construction" with progress indicators)
- **Contact**: Social links and contact information

## 🌟 Animations

- Gradient backgrounds with subtle movement
- Floating geometric shapes
- Smooth hover transitions
- Theme toggle animations
- Scroll-triggered animations

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Feel free to fork this project and make it your own! If you find any bugs or have suggestions for improvements, please open an issue or submit a pull request.

---

Built with ❤️ by Dakota Davis