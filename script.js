const blocks = document.querySelectorAll('p');
const audio = document.querySelectorAll('audio');

for (let i = 0; i < blocks.length; i++) {
  blocks[i].addEventListener('click', () => {
    audio[i].play();
  });
}
