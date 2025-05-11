// script.js
// Add event listener to button
document.querySelector('.learn-more').addEventListener('click', () => {
    alert('Hello World!');
});

// Add event listener to read more buttons
document.querySelectorAll('.read-more').forEach(button => {
    button.addEventListener('click', () => {
        alert('Read more!');
    });
});

// Animate hero section on page load
document.querySelector('.hero').addEventListener('animationend', () => {
    document.querySelector('.hero').style.opacity = 1;
});

// Add animation to hero section
document.querySelector('.hero').style.animation = 'fadeIn 2s';
document.querySelector('.hero').style.opacity = 0;

// Define animation
const style = document.createElement('style');
style.innerHTML = `
    @keyframes fadeIn {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }
`;
document.head.appendChild(style);