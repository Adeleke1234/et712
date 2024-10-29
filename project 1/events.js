// script.js
document.addEventListener('DOMContentLoaded', () => {
    // Example: Interactive Color Learning
    const colorSection = document.getElementById('colors');
    colorSection.addEventListener('click', () => {
        alert('This is a color!');
    });

    // Example: Go to Top Button
    const goTopButton = document.createElement('button');
    goTopButton.innerText = 'Go to Top';
    goTopButton.style.position = 'fixed';
    goTopButton.style.bottom = '20px';
    goTopButton.style