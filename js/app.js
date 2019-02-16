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
];
var firstPikeUl = document.getElementById('firstAndPike');
var seaTacUl = document.getElementById('SeaTacAirport');
var seaCenUl = document.getElementById('SeattleCenter');
var capHillUl = document.getElementById('CapitolHill');
var alkiUl = document.getElementById('alkiBeach');

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
  cookiesTotal: 0,
  render: function () {
    for(var i = 0; i < hours.length; i++) {
      var liEl = document.createElement('li');
      var maxCust = 65;
      var minCust = 23;
      var customerPerHour = (Math.random() * (maxCust - minCust + 1) + minCust);
      var cookiesPerCustomer = (customerPerHour*firstAndPike.averageCookies);
      var final = Math.floor(cookiesPerCustomer);
      console.log(final);
      firstAndPike.cookiesTotal = cookiesPerCustomer + firstAndPike.cookiesTotal;
      var cookiesTotalRounded = Math.floor(firstAndPike.cookiesTotal);
      liEl.textContent = `${hours[i]}: ${final} cookies.`;
      firstPikeUl.appendChild(liEl);
    }
    liEl.textContent = `Total: ${cookiesTotalRounded} cookies.`;
  }
};


var seaTacAirport = {
  location: 'SeaTac Airport',
  averageCookies: 1.2,
  cookiesPerCustomer: 0,
  cookiesTotal: 0,
  render: function () {
    for(var i = 0; i < hours.length; i++) {
      var liEl = document.createElement('li');
      var maxCust = 24;
      var minCust = 3;
      var customerPerHour = (Math.random() * (maxCust - minCust + 1) + minCust);
      var cookiesPerCustomer = (customerPerHour*seaTacAirport.averageCookies);
      var final = Math.floor(cookiesPerCustomer);
      console.log(final);
      seaTacAirport.cookiesTotal = cookiesPerCustomer + seaTacAirport.cookiesTotal;
      var cookiesTotalRounded = Math.floor(seaTacAirport.cookiesTotal);
      liEl.textContent = `${hours[i]}: ${final} cookies.`;
      seaTacUl.appendChild(liEl);
    }
    liEl.textContent = `Total: ${cookiesTotalRounded} cookies.`;
  }
};

var seattleCenter = {
  location: 'Seattle Center',
  averageCookies: 3.7,
  cookiesPerCustomer: 0,
  cookiesTotal: 0,
  render: function () {
    for(var i = 0; i < hours.length; i++) {
      var liEl = document.createElement('li');
      var maxCust = 38;
      var minCust = 11;
      var customerPerHour = (Math.random() * (maxCust - minCust + 1) + minCust);
      var cookiesPerCustomer = (customerPerHour*seattleCenter.averageCookies);
      var final = Math.floor(cookiesPerCustomer);
      console.log(final);
      seattleCenter.cookiesTotal = cookiesPerCustomer + seattleCenter.cookiesTotal;
      var cookiesTotalRounded = Math.floor(seattleCenter.cookiesTotal);
      liEl.textContent = `${hours[i]}: ${final} cookies.`;
      seaCenUl.appendChild(liEl);
    }
    liEl.textContent = `Total: ${cookiesTotalRounded} cookies.`;
  }
};

var capitolHill = {
  location: 'Capitol Hill',
  averageCookies: 2.3,
  cookiesPerCustomer: 0,
  cookiesTotal: 0,
  render: function () {
    for(var i = 0; i < hours.length; i++) {
      var liEl = document.createElement('li');
      var maxCust = 38;
      var minCust = 20;
      var customerPerHour = (Math.random() * (maxCust - minCust + 1) + minCust);
      var cookiesPerCustomer = (customerPerHour*capitolHill.averageCookies);
      var final = Math.floor(cookiesPerCustomer);
      console.log(final);
      capitolHill.cookiesTotal = cookiesPerCustomer + capitolHill.cookiesTotal;
      var cookiesTotalRounded = Math.floor(capitolHill.cookiesTotal);
      liEl.textContent = `${hours[i]}: ${final} cookies.`;
      capHillUl.appendChild(liEl);
    }
    liEl.textContent = `Total: ${cookiesTotalRounded} cookies.`;
  }
};

var alki = {
  location: 'Alki',
  averageCookies: 4.6,
  cookiesPerCustomer: 0,
  cookiesTotal: 0,
  render: function () {
    for(var i = 0; i < hours.length; i++) {
      var liEl = document.createElement('li');
      var maxCust = 16;
      var minCust = 2;
      var customerPerHour = (Math.random() * (maxCust - minCust + 1) + minCust);
      var cookiesPerCustomer = (customerPerHour*alki.averageCookies);
      var final = Math.floor(cookiesPerCustomer);
      console.log(final);
      alki.cookiesTotal = cookiesPerCustomer + alki.cookiesTotal;
      var cookiesTotalRounded = Math.floor(alki.cookiesTotal);
      liEl.textContent = `${hours[i]}: ${final} cookies.`;
      alkiUl.appendChild(liEl);
    }
    liEl.textContent = `Total: ${cookiesTotalRounded} cookies.`;
  }
};

firstAndPike.render();
seaTacAirport.render();
seattleCenter.render();
capitolHill.render();
alki.render();
