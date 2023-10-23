const sun = document.querySelector('.closed');
const moon = document.querySelector('.open');

// Add event listener
sun.addEventListener('click', () => {
  if (moon.classList.contains('open')) {
    moon.classList.add('active');
    sun.classList.remove('active');
  }
});

moon.addEventListener('click', () => {
  if (sun.classList.contains('closed')) {
    sun.classList.add('active');
    moon.classList.remove('active');
  }
});
