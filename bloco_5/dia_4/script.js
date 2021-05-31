/* eslint-disable require-jsdoc */
const btn = document.querySelector('button');
btn.addEventListener('click', changeAll);
userSettings();

function userSettings() {
  const body = document.querySelector('body');
  body.style.backgroundColor = localStorage.getItem('backgroundColor');
  body.style.color = localStorage.getItem('color');
  body.style.fontSize = localStorage.getItem('fontSize');
  body.style.letterSpacing = localStorage.getItem('letterSpacing');
}

function changeAll(event) {
  const body = document.querySelector('body');
  const bgColor = document.querySelector('#background-input').value;
  localStorage.setItem('backgroundColor', bgColor);
  body.style.backgroundColor = bgColor;
  const textColor = document.querySelector('#textcolor-input').value;
  localStorage.setItem('color', textColor);
  body.style.color = textColor;
  const fontSize = document.querySelector('#font-size-input').value;
  localStorage.setItem('fontSize', fontSize);
  body.style.fontSize = fontSize;
  const spacing = document.querySelector('#spacing-input').value;
  localStorage.setItem('letterSpacing', spacing);
  body.style.letterSpacing = spacing;
  const fontFamily = document.querySelector('#font-family-input').value;
  localStorage.setItem('fontFamily', fontFamily);
  //  ody.style.fontFamily = fontSize;
}
