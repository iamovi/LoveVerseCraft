const poems = {
    '🌼': 'A beautiful flower in the field,\nWith colors so vivid, it\'s a sight to behold.',
    '🌈': 'A rainbow in the sky so high,\nWith colors that paint, the canvas of the sky.',
    '🌟': 'A shining star in the dark of night,\nGuiding us with its gentle light.',
    '🐦': 'A bird that soars in the open sky,\nWith wings spread wide, it\'s flying high.',
    '🍕': 'A pizza with toppings so divine,\nIn every bite, it\'s a flavor party of mine.',
    '🌸': 'Blossoming flowers in the spring,\nNature\'s art, a delightful thing.',
    '🌞': 'The sun rises to start the day,\nWarming the earth in a golden display.',
    '🌍': 'Our planet Earth, a world so vast,\nA home for life, from first to last.',
    '🌷': 'Tulips in the garden, colors so bright,\nA symbol of love, a beautiful sight.',
    '🚀': 'A rocket in space, a thrilling flight,\nExploring the cosmos, day and night.',
    '🌱': 'A tiny seed in the soil it lay,\nGrowing into life, in its own special way.'
};

const emojiContainers = document.querySelectorAll('.emoji-container');
const poemElement = document.getElementById('poem');
const backButton = document.getElementById('back-button');

emojiContainers.forEach(emojiContainer => {
    emojiContainer.addEventListener('click', () => {
        const selectedEmoji = emojiContainer.getAttribute('data-emoji');
        emojiContainers.forEach(container => {
            if (container.getAttribute('data-emoji') !== selectedEmoji) {
                container.style.opacity = 0; // Fade out other emojis
            } else {
                container.style.transform = 'scale(1.5)'; // Make the clicked emoji bigger
            }
        });

        if (poems[selectedEmoji]) {
            poemElement.textContent = poems[selectedEmoji];
            backButton.style.display = 'inline-block';
        } else {
            poemElement.textContent = 'No poem found for this emoji.';
        }
    });
});

backButton.addEventListener('click', () => {
    emojiContainers.forEach(emojiContainer => {
        emojiContainer.style.opacity = 1; // Reset opacity for all emojis
        emojiContainer.style.transform = 'scale(1)'; // Reset size for all emojis
    });
    backButton.style.display = 'none';
    poemElement.textContent = '';
});
