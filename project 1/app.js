const snowman = document.querySelector('.closed');
const snow = document.querySelector('.open');

// Add event listener
snowman.addEventListener('click', () => {
  if (snow.classList.contains('open')) {
    snow.classList.add('active');
    snowman.classList.remove('active');
  }
});

snow.addEventListener('click', () => {
  if (snowman.classList.contains('closed')) {
    snowman.classList.add('active');
    snow.classList.remove('active');
  }
});
