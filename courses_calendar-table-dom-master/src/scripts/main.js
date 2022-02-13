'use strict';

const calendar = document.querySelector('#calendar');
let copyMonth;
let copyYear;
const infoDate = document.querySelector('#infoDate');

const calendarTable = (year, month, element) => {
  copyMonth = month;
  copyYear = year;

  const searchMonth = month - 1;

  const searchDate = new Date(year, searchMonth);

  let table = '<table><tr><th>ПН</th><th>ВТ</th><th>СР</th><th>ЧТ</th><th>ПТ</th><th>СБ</th><th>ВС</th></tr>';

  for (let i = 0; i < getDay(searchDate); i++) {
    table += '<td></td>';
  }

  while (searchDate.getMonth() === searchMonth) {
    table += '<td>' + searchDate.getDate() + '</td>';

    if (getDay(searchDate) % 7 == 6) {
      table += '</tr><tr>';
    }

    searchDate.setDate(searchDate.getDate() + 1);
  }

  if (getDay(searchDate) !== 0) {
    for (let i = getDay(searchDate); i < 7; i++) {
      table += '<td></td>';
    }
  }
  table += '</tr></table>';

  element.innerHTML = table;
  infoDate.innerHTML = 'Month: ' + copyMonth + ' Year: ' + copyYear;
};


const getDay = (date) => { 
  let day = date.getDay();

  if (day == 0) {
    day = 7;
  }
 
  return day - 1;
};

calendarTable(2022, 2, calendar);


const nextMoth = document.querySelector('#nextMonth');

nextMoth.addEventListener('click', () => {
  copyMonth += 1;

  if (copyMonth === 13){
    copyMonth = 1;
    copyYear += 1;
  }
  calendarTable(copyYear, copyMonth, calendar);
});

const earlyMoth = document.querySelector('#earlyMonth');

earlyMoth.addEventListener('click', () => {
  copyMonth -= 1;

  if (copyMonth === 0){
    copyMonth = 12;
    copyYear -= 1;
  }
  calendarTable(copyYear, copyMonth, calendar);
});