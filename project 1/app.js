const snowman = document.querySelectorAll('.emoji.closed');
const snow = document.querySelectorAll('.emoji.open');

function toggleEmoji(emoji) {
  if (emoji.classList.contains('closed')) {
    snowman.forEach((face) => {
      face.classList.remove('active');
    });
    snow.forEach((face) => {
      face.classList.add('active');
    });
  } else if (emoji.classList.contains('open')) {
    snow.forEach((face) => {
      face.classList.remove('active');
    });
    snowman.forEach((face) => {
      face.classList.add('active');
    });
  }
}
