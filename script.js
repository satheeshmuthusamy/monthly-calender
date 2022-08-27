`use strict`;

const monthIndex = new Date().getMonth();
console.log(monthIndex);

const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'Augest',
  'September',
  'October',
  'November',
  'December',
];
// console.log(months[2]);
let monthName = document.querySelector('.date h1');
// console.log(monthName);
monthName.textContent = months[monthIndex];
// console.log(monthName);

const fullDateEl = document.querySelector('.date p');
fullDateEl.textContent = new Date().toDateString();

//DAY OF MONTH DYNAMICALLY
const lastDay = new Date(new Date().getFullYear(), monthIndex + 1, 0).getDate();//last day of current month
const firstDay = new Date(new Date().getFullYear(), monthIndex, 1).getDay() - 1;//js starts from sunday
console.log(firstDay); //0
console.log(lastDay);

const daysEl = document.querySelector('.days');
let days = '';

for (let i = firstDay; i > 0; i++) {
  days += `<div class="empty"></div>`;
}

for (let i = 1; i <= lastDay; i++) {
  if (i === new Date().getDate()) {
    days += `<div class="today">${i}</div>`;
  } else {
    days += `<div>${i}</div>`;
  }
}
daysEl.innerHTML = days;
