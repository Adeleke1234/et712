// Create the "Go to Top" button
const goTopButton = document.createElement('button');
goTopButton.innerText = 'Go to Top';
goTopButton.style.position = 'fixed';
goTopButton.style.bottom = '20px';
goTopButton.style.right = '20px'; // Add right positioning
goTopButton.style.zIndex = '1000'; // Ensure it appears above other elements
goTopButton.style.padding = '10px 15px'; // Add some padding for aesthetics
goTopButton.style.backgroundColor = '#007BFF'; // Button background color
goTopButton.style.color = '#FFFFFF'; // Button text color
goTopButton.style.border = 'none'; // Remove default border
goTopButton.style.borderRadius = '5px'; // Rounded corners
goTopButton.style.cursor = 'pointer'; // Change cursor to pointer

// Append the button to the body
document.body.appendChild(goTopButton);

// Scroll to top function
goTopButton.onclick = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // Smooth scrolling effect
    });
};

// Optionally, hide the button initially
goTopButton.style.display = 'none';

// Show button when scrolling down
window.onscroll = () => {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        goTopButton.style.display = 'block';
    } else {
        goTopButton.style.display = 'none';
    }
};
