/* eslint-disable func-names */
const body = document.querySelector('body'); 
body.innerHTML = '<div class="wrapper"></div>';
document.querySelector('.wrapper').innerHTML = '<textarea autofocus class="textarea"></textarea> <div class="keyboard"></div>';
const keyboard = [
  96, 49, 50, 51, 52, 53, 54, 55, 56, 57, 48, 45, 61, 8, 9, 113, 119, 101, 114,
  116, 121, 117, 105, 111, 112, 91, 93, 46, 20, 97, 115, 100, 102, 103, 104,
  106, 107, 108, 59, 222, 92, 13, 16, 122, 120, 99, 118, 98, 110, 109, 44, 46,
  47, 38, 16, 17, 17, 18, 32, 18, 37, 40, 39, 17,
];

function init() {
  let out = '';
  for (let i = 0; i < keyboard.length; i++) {
    if (i == 14 || i == 28 || i == 42 || i == 55) {
      out += '<div class="clearfix"></div>';
    }
    out
      += `<div class="k-key n${
        [i]
      }" data="${
        keyboard[i]
      }" >${
        String.fromCharCode(keyboard[i])
      }</div>`;
  }
  document.querySelector('.keyboard').innerHTML = out;
}
init();
const input = document.querySelector('.textarea');
const cc = function (event) {
  document.querySelectorAll('.k-key').forEach((element) => {
    element.classList.remove('active');
  });
  document
    .querySelector(`.k-key[data="${event.keyCode}"]`)
    .classList.add('active');
  input.focus();
};
document.onkeypress = cc;
document.onkeydown = cc;
document.querySelectorAll('.k-key').forEach((element) => {
  element.onclick = function (event) {
    document.querySelectorAll('.k-key').forEach((element) => {
      element.classList.remove('active');
    });
    this.classList.add('active');
    input.value += element.textContent;
  };
});
document.querySelectorAll('keydown', (event) => {
  if (event.code == 'CapsLock') {
    document.querySelectorAll('.k-key').forEach((element) => {
      element.textContent.toUpperCase();
    });
  }
});
document.querySelector('.n13').textContent = 'Bcsp';
document.querySelector('.n14').textContent = 'Tab';
document.querySelector('.n27').textContent = 'Del';
document.querySelector('.n28').textContent = 'Caps';
document.querySelector('.n41').textContent = 'Enter';
document.querySelector('.n42').textContent = 'Shift';
document.querySelector('.n53').textContent = '↑';
document.querySelector('.n54').textContent = 'Shift';
document.querySelector('.n55').textContent = 'Ctrl';
document.querySelector('.n56').textContent = 'Win';
document.querySelector('.n57').textContent = 'Alt';
document.querySelector('.n58').textContent = ' ';
document.querySelector('.n59').textContent = 'Alt';
document.querySelector('.n60').textContent = '←';
document.querySelector('.n61').textContent = '↓';
document.querySelector('.n62').textContent = '→';
document.querySelector('.n63').textContent = 'Ctrl';
