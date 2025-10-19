# Cosmic Canvas

![Cosmic Canvas Screenshot](https://github.com/user-attachments/assets/eec35ffe-f35d-4efe-a1cb-e1b40c1976fa)

Welcome to our animated solar system! Twinkling stars and orbiting planets await.

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![GitHub Pages](https://img.shields.io/badge/demo-live-brightgreen)](https://anacondy.github.io/stars-ui/)

## ✨ Features

- **Animated Solar System**: Watch planets orbit around a glowing sun with realistic motion
- **Twinkling Stars**: Dynamic star field with individual twinkling animations
- **Saturn-like Planet**: Complete with animated rings and orbital mechanics
- **Moon System**: Earth-like planet with its own orbiting moon
- **Asteroid Field**: Small debris particles orbiting the sun
- **Responsive Design**: Adapts to different screen sizes for optimal viewing
- **Pure HTML/CSS/JS**: No dependencies, no build process - just open and enjoy!
- **Zero Dependencies**: No external libraries, reducing security risks
- **Lightweight**: Fast loading with minimal resource usage

## 🚀 Getting Started

### Live Demo

🌟 **[View Live Demo](https://anacondy.github.io/stars-ui/)**

Experience the cosmic canvas in action!

### Local Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/anacondy/stars-ui.git
   cd stars-ui
   ```

2. Open `index.html` in your web browser, or serve it with a local HTTP server:
   ```bash
   # Using Python 3
   python3 -m http.server 8080
   
   # Or using Python 2
   python -m SimpleHTTPServer 8080
   
   # Or using Node.js
   npx http-server
   ```

3. Navigate to `http://localhost:8080` in your browser

## 📁 Project Structure

```
stars-ui/
├── index.html          # Main HTML file
├── static/
│   ├── style.css      # Styling and animations
│   └── script.js      # Star generation logic
├── LICENSE            # MIT License
├── SECURITY.md        # Security policy
└── README.md          # This file
```

## 🔒 Security

This project is designed with security in mind:

- **Zero External Dependencies**: No third-party libraries means reduced attack surface
- **No User Input**: Static content eliminates many common vulnerabilities
- **CSP Compatible**: Works with strict Content Security Policies
- **HTTPS Ready**: Fully compatible with secure connections

For detailed security information, including how to report vulnerabilities and recommended security headers for production deployment, please see our [Security Policy](SECURITY.md).

## 🤝 Contributing

Contributions are welcome! Here's how you can help:

1. **Fork the repository**
2. **Create a feature branch**: `git checkout -b feature/amazing-feature`
3. **Make your changes**: Ensure code follows the existing style
4. **Test thoroughly**: Open `index.html` and verify everything works
5. **Commit your changes**: `git commit -m 'Add amazing feature'`
6. **Push to the branch**: `git push origin feature/amazing-feature`
7. **Open a Pull Request**

### Guidelines

- Keep the code simple and maintainable
- Maintain zero external dependencies
- Ensure responsive design works on all screen sizes
- Test in multiple browsers (Chrome, Firefox, Safari, Edge)
- Follow existing code style and conventions
- Add comments for complex animations or calculations

## 🎨 Customization

You can easily customize the cosmic canvas:

### Colors

Edit CSS variables in `static/style.css`:

```css
:root {
    --planet-color: #EDE8D4;
    --orbit-color: rgba(255, 255, 255, 0.2);
    --star-color: rgba(255, 255, 255, 0.8);
    --sun-color: #FDB813;
}
```

### Number of Stars

Modify in `static/script.js`:

```javascript
const numberOfStars = 150; // Adjust for more or fewer stars
```

### Planet Orbits

Adjust orbit speeds and radii in `index.html`:

```html
<g class="planet-group" style="--orbit-radius: 150px; --orbit-speed: 20s;">
```

## 🛠️ Browser Support

- ✅ Chrome/Edge (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

### What does this mean?

You are free to:
- ✅ Use this project commercially
- ✅ Modify the source code
- ✅ Distribute this project
- ✅ Use this project privately

You must:
- 📝 Include the original license and copyright notice

## 🙏 Acknowledgments

- Inspired by the beauty of our solar system
- Built with vanilla web technologies
- Deployed on GitHub Pages

## 📞 Contact

For questions, suggestions, or issues, please [open an issue](https://github.com/anacondy/stars-ui/issues) on GitHub.

---

Made with ❤️ and ✨ | [View Demo](https://anacondy.github.io/stars-ui/)
