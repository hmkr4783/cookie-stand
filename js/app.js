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

function multiply (a, b) {
  var result = a*b;
  var final = Math.floor(result);
  return (final);
}

function randomNumber (min, max) {
  var result = Math.random() * (max - min + 1) + min;
  var final = Math.floor(result);
  console.log(final);
  return final;
}



var render = function () {
  for(var i = 0; i < hours.length; i++) {
    var liEl = document.createElement('li');
    
    var result = Math.floor(Math.random() * (max - min + 1) + min);


    firstAndPike.cookiesPerCustomer = multiply(firstAndPike.customersCount, firstAndPike.averageCookies);
    liEl.textContent = `${hours[i]}: ${firstAndPike.cookiesPerCustomer[i]} cookies.`;
    firstPikeUl.appendChild(liEl);
  }
};


var firstAndPike = {
  location: 'First and Pike',
  averageCookies: 6.3,
  customersCount: randomNumber(23, 65),
  cookiesPerCustomer: 0,
};






render();

// console.log(firstAndPike.customersCount);
// console.log(firstAndPike);

// randomNumber(23,53);





























// var seaTacUl = document.getElementById('seatac');
// var seaCenUl = document.getElementById('seacen');
// var capHillUl = document.getElementById('caphill');
// var alkiUl = document.getElementById('alki');