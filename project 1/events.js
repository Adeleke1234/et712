// Modal Window
const modal = document.getElementById('modal');
const showModalBtn = document.getElementById('colorBtn'); // For demonstration, using the color section button
const closeModalBtn = document.querySelector('.close-btn');

showModalBtn.onclick = function() {
    modal.style.display = 'block';
}

closeModalBtn.onclick = function() {
    modal.style.display = 'none';
}

window.onclick = function(event) {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
}

// Go to Top Button
const topButton = document.createElement('button');
topButton.innerHTML = "Go to Top";
topButton.classList.add('go-to-top-btn');
document.body.appendChild(topButton);

topButton.style.position = 'fixed';
topButton.style.bottom = '20px';
topButton.style.right = '20px';

topButton.onclick = function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
};

// Sound Effects for Buttons (Animal sounds, etc.)
const animalSoundBtn = document.getElementById('animalBtn');
const animalSound = new Audio('lion_roar.mp3');

animalSoundBtn.onclick = function() {
    animalSound.play();
};


