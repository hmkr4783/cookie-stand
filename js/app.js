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

function randomNumber (min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

function multiply (a, b) {
  return (a * b);
};

var firstPikeUl = document.getElementById('firstpike');

var firstAndPike = {
  location: 'First and Pike',
  averageCookies: 6.3,
  customersCount: randomNumber(23, 65),
  cookiesTimesCustomer: 0,

  // render: function () {
  //   for(var i = 0; i < hours.length; i++) {
      
      
  //     // var liEL = document.createElement('li');
     
  //     // liEL.textcontent = `${hours[i]}${cookiesTimesCustomer} cookies.`
  //     // firstPikeUl.appendChild(liEl);
  //   }
  // }
};

firstAndPike.cookiesTimesCustomer = multiply(firstAndPike.customersCount, firstAndPike.averageCookies);
// firstAndPike.render();
// console.log(firstAndPike.customersCount);
console.log(firstAndPike);
































var firstPikeUl = document.getElementById('firstpike');
// var seaTacUl = document.getElementById('seatac');
// var seaCenUl = document.getElementById('seacen');
// var capHillUl = document.getElementById('caphill');
// var alkiUl = document.getElementById('alki');