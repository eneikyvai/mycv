// Smooth scroll effect
const scrollLinks = document.querySelectorAll('.scroll-link');

scrollLinks.forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        window.scrollTo({
            top: targetElement.offsetTop - 60, // Adjust for navigation bar height
            behavior: 'smooth',
        });
    });
});

// Scroll animations
const sections = document.querySelectorAll('section');
const options = {
    threshold: 0.2,
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, options);

sections.forEach(section => {
    observer.observe(section);
});

// Theme toggle functionality
document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.getElementById('toggle-theme');
    const body = document.body;
    const cvContainer = document.querySelector('.cv-container');

    // Check for saved user preference, if any, on load of the website
    const darkMode = localStorage.getItem('darkMode');
    
    // If the user previously enabled dark mode, apply it to the document
    if (darkMode === 'enabled') {
        body.classList.add('dark-mode');
        toggleButton.textContent = '☀️';
    }

    toggleButton.addEventListener('click', () => {
        // Toggle dark mode on body
        body.classList.toggle('dark-mode');
        
        // Update button icon
        toggleButton.textContent = body.classList.contains('dark-mode') ? '☀️' : '🌙';
        
        // Store user preference
        if (body.classList.contains('dark-mode')) {
            localStorage.setItem('darkMode', 'enabled');
        } else {
            localStorage.setItem('darkMode', null);
        }
    });
});