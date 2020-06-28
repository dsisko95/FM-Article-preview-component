// DOM elements

const shareIcon = document.querySelector('.share-icon');
const shareIconContainer = document.querySelector('.share-icon-container');

// Events

shareIcon.addEventListener('click', () => shareIconContainer.classList.toggle('hidden-element'));