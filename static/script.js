// static/script.js

document.addEventListener('DOMContentLoaded', () => {
    const starsContainer = document.getElementById('stars-container');
    const numberOfStars = 150; // Adjust for more or fewer stars

    // Function to create a single star element
    function createStar() {
        const star = document.createElement('div');
        star.classList.add('star');

        // Random size for variety (1px to 4px)
        const size = Math.random() * 3 + 1;
        star.style.width = `${size}px`;
        star.style.height = `${size}px`;

        // Random position within the viewport
        star.style.top = `${Math.random() * 100}vh`;
        star.style.left = `${Math.random() * 100}vw`;

        // Randomize animation duration and delay for the twinkling effect
        // This makes each star twinkle independently
        star.style.setProperty('--duration', `${Math.random() * 2 + 1}s`); // 1 to 3 seconds
        star.style.setProperty('--delay', `${Math.random() * 2}s`);     // 0 to 2 seconds

        starsContainer.appendChild(star);
    }

    // Create the specified number of stars
    for (let i = 0; i < numberOfStars; i++) {
        createStar();
    }

    // Adjust moon's orbit dynamically
    // The CSS for moonRotate animation has transform-origin set to center center,
    // which is relative to its own position within the SVG group.
    // To make it orbit its planet, we need to adjust its position
    // or set a more complex transform. For simplicity, the moonRotate
    // in CSS already includes a translateX to move it away.
    // If you wanted to adjust it dynamically based on the planet's position,
    // you would need to calculate that in JS or rely purely on SVG transformations.
});
