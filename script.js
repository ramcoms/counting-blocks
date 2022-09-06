const blocks = document.querySelectorAll('p');
const audioNum = document.querySelectorAll('.audio--numbers');

const hello = document.getElementById('hello');
const audioHello = document.getElementById('audio--hello');

const good = document.getElementById('good');
const audioGood = document.getElementById('audio--good');

hello.addEventListener('click', () => {
  audioHello.play();
});

good.addEventListener('click', () => {
  audioGood.play();
});

for (let i = 0; i < blocks.length; i++) {
  blocks[i].addEventListener('click', () => {
    audioNum[i].play();
  });
}
