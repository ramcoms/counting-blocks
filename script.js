const blocks = document.querySelectorAll('p');
const hello = document.getElementById('hello');
const good = document.getElementById('good');

const audioNum = document.querySelectorAll('.audio--numbers');
const audioHello = document.getElementById('audio--hello');
const audioGood = document.getElementById('audio--good');

hello.addEventListener('click', () => audioHello.play());
good.addEventListener('click', () => audioGood.play());

for (let i = 0; i < blocks.length; i++) {
  blocks[i].addEventListener('click', () => audioNum[i].play());
}
