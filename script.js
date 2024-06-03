// Select the container element
const container = document.querySelector('.container');

// Add an event listener for when the window finishes loading
window.addEventListener('load', () => {
  // Add a class to the container to animate it
  container.classList.add('fadeIn');
});