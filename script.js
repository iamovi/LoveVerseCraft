const poemContainer = document.getElementById('love-poem');
const generateButton = document.getElementById('generate-poem');
let usedPoems = [];

generateButton.addEventListener('click', () => {
  generateButton.disabled = true; // Disable the button
  generateButton.innerHTML = "..."; // Change button text

  // Show the poem
  showRandomPoem();
});

function showRandomPoem() {
  // Check if all poems have been used; if so, reset the list
  if (usedPoems.length === lovePoems.length) {
    usedPoems = [];
  }

  // Get a random poem that hasn't been used before
  let randomIndex;
  do {
    randomIndex = Math.floor(Math.random() * lovePoems.length);
  } while (usedPoems.includes(randomIndex));

  usedPoems.push(randomIndex);
  typeLovePoem(lovePoems[randomIndex]);
}

function typeLovePoem(poem) {
  poemContainer.textContent = ''; // Clear existing content

  let currentIndex = 0;
  const typeInterval = 45; // Adjust typing speed (milliseconds)

  const typingTimer = setInterval(() => {
    if (currentIndex <= poem.length) {
      poemContainer.textContent = poem.substring(0, currentIndex);
      currentIndex++;
    } else {
      clearInterval(typingTimer); // Stop typing when done
      startCountdown(); // Start the countdown after generating the poem
    }
  }, typeInterval);
}

function startCountdown() {
  let countdown = 4;
  const countdownInterval = setInterval(() => {
    countdown--;
    generateButton.innerHTML = countdown;

    if (countdown === 0) {
      clearInterval(countdownInterval);
      generateButton.disabled = false; // Re-enable the button
      generateButton.innerHTML = "Get Poem"; // Reset the button text
    }
  }, 1000);
}


// for falling of love

// Array of love emojis (without the broken heart)
const loveEmojis = ['❤️', '💖', '😙', '😙', '😘', '💏', '💑', '💞', '💗', '💓', '💕', '😻', '💘', '💋', '💚', '💜', '🤎', '💛', '🤍', '🧚🏻‍♀️', '🎂', '💫', '🐣', '🐥', '🍰', '😁'];


// Function to create and animate falling emojis
function createFallingEmoji() {
  const loveEmoji = document.createElement('div');
  loveEmoji.className = 'love-emoji';
  loveEmoji.style.left = Math.random() * window.innerWidth + 'px';
  loveEmoji.textContent = loveEmojis[Math.floor(Math.random() * loveEmojis.length)];
  document.querySelector('.love-emojis').appendChild(loveEmoji);
  setTimeout(() => {
    loveEmoji.remove();
  }, 5000);
}

// Function to continuously create falling emojis
function startFallingEmojis() {
  setInterval(createFallingEmoji, 1000); // Adjust the interval as needed
}

// Start the falling emojis when the page loads
window.addEventListener('load', startFallingEmojis);
