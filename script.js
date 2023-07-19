// Custom JavaScript for the website

// Scroll to section on click
const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
navLinks.forEach((link) => {
  link.addEventListener('click', (event) => {
    event.preventDefault();
    const target = document.querySelector(link.getAttribute('href'));
    target.scrollIntoView({
      behavior: 'smooth'
    });
  });
});


// Custom JavaScript for the website
window.addEventListener('DOMContentLoaded', () => {
    const f1 = document.querySelector('.f1');
    const f2 = document.querySelector('.f2');
    const f3 = document.querySelector('.f3');
    
    const fadeInElements = [f1, f2, f3];

    fadeInElements.forEach((element, index) => {
        element.style.animationDelay = `${index * 400}ms`;
        element.classList.add('fade-in');
        
        // Remove the animation class after the animation is complete
        const animationDuration = 1000; // Duration in milliseconds
        setTimeout(() => {
            element.classList.remove('fade-in');
        }, index * 200 + animationDuration);
    });
});

// Custom JavaScript for the website
const typingElement = document.querySelector('.typing');

const text = "Answer Once, Answer Forever";
const typingSpeed = 100; // Adjust the typing speed as needed

let charIndex = 0;
let typingInterval;

function startTyping() {
    typingInterval = setInterval(() => {
        typingElement.textContent += text[charIndex];
        charIndex++;
        if (charIndex === text.length) {
            clearInterval(typingInterval);
        }
    }, typingSpeed);
}

startTyping();
