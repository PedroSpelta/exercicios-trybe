document.querySelector('#header-container').style.backgroundColor = 'green';
document.querySelector('.emergency-tasks').style.backgroundColor = 'pink';
document.querySelector('.no-emergency-tasks').style.backgroundColor = 'yellow';
document.querySelector('#footer-container').style.backgroundColor = 'darkgreen';
const urgentBox = document.querySelectorAll('.emergency-tasks div h3');
const notUrgentBox = document.querySelectorAll('.no-emergency-tasks div h3');
for (let index = 0; index < urgentBox.length; index += 1) {
  urgentBox[index].style.backgroundColor = 'purple';
}
for (let index = 0; index < notUrgentBox.length; index += 1) {
  notUrgentBox[index].style.backgroundColor = 'black';
}


