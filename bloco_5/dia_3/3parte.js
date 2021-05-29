/* eslint-disable require-jsdoc */

function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();

// Escreva seu código abaixo.
// /////////////////////////////////////////////////////////////////////////////

// exercicio 1
const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6,
  7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18,
  19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
const dezHolidays = [24, 25, 31];
createDaysOfMonth(dezDaysList, dezHolidays);

function createDaysOfMonth(monthList, holiDays) {
  const dayList = document.querySelector('#days');
  let holiCount = 0;
  for (index = 0; index < monthList.length; index += 1) {
    const insertDay = document.createElement('li');
    insertDay.setAttribute('class', 'day');
    insertDay.innerText = monthList[index];
    if ((index+2)%7 === 0) {
      insertDay.classList.add('friday');
    }
    if (monthList[index] === holiDays[holiCount]) {
      insertDay.classList.add('holiday');
      holiCount += 1;
    }
    dayList.appendChild(insertDay);
  }
}

// exercicio2
const feriadosButton = dinButton('Feriados', 'btn-holiday');

function dinButton(string, id) {
  const btnContainer = document.querySelector('.buttons-container');
  const btn = document.createElement('button');
  btn.setAttribute('id', id);
  btn.innerText = string;
  btnContainer.appendChild(btn);
  return btn;
}

// exercicio3
feriadosButton.addEventListener('click', holidayColorChanger);
function holidayColorChanger(eventOrigin) {
  const allHolidays = document.querySelectorAll('.holiday');
  if (allHolidays[0].style.backgroundColor === 'lightblue') {
    for (index = 0; index < allHolidays.length; index += 1) {
      allHolidays[index].style.backgroundColor = '#eee';
    }
  } else {
    for (index = 0; index < allHolidays.length; index += 1) {
      allHolidays[index].style.backgroundColor = 'lightblue';
    }
  }
}

// exercicio4
const holidayButton = dinButton('Sexta-feira', 'btn-friday');

// exercicio5
holidayButton.addEventListener('click', fridayTextChanger);
function fridayTextChanger(eventOrigin) {
  const allFridays = document.querySelectorAll('.friday');
  if (allFridays[0].innerText === 'Sexta') {
    for (index = 0; index < allFridays.length; index += 1) {
      const anterior = allFridays[index].previousElementSibling.innerText;
      allFridays[index].innerText = parseInt(anterior) + 1;
    }
  } else {
    for (index = 0; index < allFridays.length; index += 1) {
      allFridays[index].innerText = 'Sexta';
    }
  }
}
