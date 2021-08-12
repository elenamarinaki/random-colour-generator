const COLOURS = [
  '#81717A',
  '#9D8CA1',
  '#9993B2',
  '#A7ABDD',
  '#B4D4EE',
  '#586BA4',
  '#324376',
  '#F5DD90',
  '#F68E5F',
  '#F76C5E',
  '#adbca5',
  '#e8b9ab',
  '#e09891',
  '#cb769e',
  '#8c5f66',
  '#ef946c',
  '#c4a77d',
  '#70877f',
  '#454372',
  '#2f2963',
  '#643a71',
  '#8b5fbf',
  '#d183c9',
  '#e3879e',
  '#fec0ce',
  '#acf39d',
  '#e85f5c',
  '#9cfffa',
  '#773344',
  '#e3b5a4',
  '#c9cba3',
  '#ffe1a8',
  '#e26d5c',
  '#723d46',
  '#472d30',
  '#86e7b8',
  '#93ff96',
  '#b2ffa8',
  '#d0ffb7',
  '#f2f5de',
  '#0a2239',
  '#53a2be',
  '#1d84b5',
  '#132e32',
  '#176087',
];

const boxes = document.querySelectorAll('.colour-box');
const generate = document.querySelector('#refresh');
const saveBtn = document.querySelector('#save');
const controls = document.querySelector('#controls');

function randomPalette() {
  boxes.forEach((box) => {
    const colour = Math.floor(Math.random() * COLOURS.length);
    box.style.backgroundColor = COLOURS[colour];
    if (COLOURS[colour] < '#8d8d8d') {
      box.classList.remove('black-text');
      box.classList.add('white-text');
    } else {
      box.classList.remove('white-text');
      box.classList.add('black-text');
    }
    box.textContent = COLOURS[colour];
  });

  const msg = document.querySelector('.msg-text');
  saveBtn.removeChild(msg);
}

function changeColour() {
  const colour = Math.floor(Math.random() * COLOURS.length);
  this.style.backgroundColor = COLOURS[colour];
  if (COLOURS[colour] < '#8d8d8d') {
    this.classList.remove('black-text');
    this.classList.add('white-text');
  } else {
    this.classList.remove('white-text');
    this.classList.add('black-text');
  }
  this.textContent = COLOURS[colour];

  const msg = document.querySelector('.msg-text');
  saveBtn.removeChild(msg);
}

function copyToClipboard() {
  const colouredBoxes = document.querySelectorAll('.colour-box');
  const colourArr = [];

  colouredBoxes.forEach((box) => {
    colourArr.push(box.textContent);
  });

  const selectColours = colourArr.toString();
  navigator.clipboard.writeText(selectColours).then(() => {
    const msg = document.createElement('p');
    msg.textContent = 'Copied! 📋';
    msg.classList.add('msg-text');
    saveBtn.appendChild(msg);
  });
}

window.addEventListener('load', randomPalette);
boxes.forEach((box) => box.addEventListener('click', changeColour));
generate.addEventListener('click', randomPalette);
saveBtn.addEventListener('click', copyToClipboard);
