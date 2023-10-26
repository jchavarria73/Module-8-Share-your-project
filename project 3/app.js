const square = document.querySelector('#square');

square.addEventListener('mouseenter', () => {
  if (!square.classList.contains('hover')) {
    square.classList.add('hover');  
  } 
});

square.addEventListener('mouseleave', () => {
  if (square.classList.contains('hover')) {
    square.classList.remove('hover');
  }
});
