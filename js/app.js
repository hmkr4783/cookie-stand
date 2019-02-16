'use strict';

var hours = [
  '6am: ',
  '7am: ',
  '8am: ',
  '9am: ',
  '10am: ',
  '11am: ',
  '12pm: ',
  '1pm: ',
  '2pm: ',
  '3pm: ',
  '4pm: ',
  '5pm: ',
  '6pm: ',
  '7pm: ',
  '8pm: ',
  'Total: ',
];

var firstPikeUl = document.getElementById('firstpike');

// function multiply (a, b) {
//   var result = a*b;
//   var final = Math.floor(result);
//   return (final);
// }

// function randomNumber (min, max) {
//   var result = Math.random() * (max - min + 1) + min;
//   var final = Math.floor(result);
//   console.log(final);
//   return final;
// }

var firstAndPike = {
  location: 'First and Pike',
  averageCookies: 6.3,
  cookiesPerCustomer: 0,
};

var render = function () {
  for(var i = 0; i < hours.length; i++) {
    var liEl = document.createElement('li');
    var maxCust = 65;
    var minCust = 23;
    var customerPerHour = (Math.random() * (maxCust - minCust + 1) + minCust);
    var cookiesPerCustomer = (customerPerHour*firstAndPike.averageCookies);
    var final = Math.floor(cookiesPerCustomer);
    console.log(final);
    liEl.textContent = `${hours[i]}: ${final} cookies.`;
    firstPikeUl.appendChild(liEl);
  }
};

var firstAndPike = {
  location: 'First and Pike',
  averageCookies: 6.3,
  cookiesPerCustomer: 0,
};

var render = function () {
  for(var i = 0; i < hours.length; i++) {
    var liEl = document.createElement('li');
    var maxCust = 65;
    var minCust = 23;
    var customerPerHour = (Math.random() * (maxCust - minCust + 1) + minCust);
    var cookiesPerCustomer = (customerPerHour*firstAndPike.averageCookies);
    var final = Math.floor(cookiesPerCustomer);
    console.log(final);
    liEl.textContent = `${hours[i]}: ${final} cookies.`;
    firstPikeUl.appendChild(liEl);
  }
};
render();





























// var seaTacUl = document.getElementById('seatac');
// var seaCenUl = document.getElementById('seacen');
// var capHillUl = document.getElementById('caphill');
// var alkiUl = document.getElementById('alki');