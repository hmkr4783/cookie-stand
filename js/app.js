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

function StoreInformation(location, averageCookies, max, min, store) {
  this.location = location;
  this.averageCookies = averageCookies;
  this.cookiesPerCustomer = 0;
  this.cookiesTotal = 0;
  this.max = max;
  this.min = min;
  this.store = store;
  this.cookiesByStore = [];
  //create table row


  this.table = document.getElementById('shell');
  for(var i = 0; i < hours.length; i++) {
    // var liEl = document.createElement('li');
    var maxCust = this.max;
    var minCust = this.min;
    var customerPerHour = (Math.random() * (maxCust - minCust + 1) + minCust);
    var cookiesPerCustomer = (customerPerHour*this.averageCookies);
    var final = Math.floor(cookiesPerCustomer);
    this.cookiesTotal = final + this.cookiesTotal;
    var cookiesTotalRounded = Math.floor(this.cookiesTotal);
    this.cookiesByStore.push(final);
   
    
    //create table data
    //append data to row  
    var cookiestands = document.getElementById('cookiestands');
    var newRow = document.createElement('tr');
    for(var j = 0; j < hours.length; j++);
    var tdEl = document.createElement('td');
    tdEl.textContent = this.cookiesByStore[j];
    newRow.appendChild(tdEl);
  }
  liEl.textContent = `Total: ${cookiesTotalRounded} cookies.`;
  cookiestands.appendChild(newRow);
}


var firstAndPike = new StoreInformation('1st and Pike', 6.3, 65, 23, firstPikeUl);

// create five stores/
//call render five times

var seaTacAirport = new StoreInformation('SeaTac Airport', 1.2, 24, 3, seaTacUl);

var seattleCenter = new StoreInformation('Seattle Center', 3.7, 38, 11, seaCenUl);

var capitolHill = new StoreInformation('Capitol Hill', 2.3, 38, 20, capHillUl);

var alki = new StoreInformation('Alki', 4.6, 16, 2, alkiUl);

var cookiesSoldTotalPerHour = new StoreInformation('Totals',0 ,0);


firstAndPike.function();
seaTacAirport.render();
seattleCenter.render();
capitolHill.render();
alki.render();
























// var hours = [
//   '6am: ',
//   '7am: ',
//   '8am: ',
//   '9am: ',
//   '10am: ',
//   '11am: ',
//   '12pm: ',
//   '1pm: ',
//   '2pm: ',
//   '3pm: ',
//   '4pm: ',
//   '5pm: ',
//   '6pm: ',
//   '7pm: ',
//   '8pm: ',
// ];
// var firstPikeUl = document.getElementById('firstAndPike');
// var seaTacUl = document.getElementById('SeaTacAirport');
// var seaCenUl = document.getElementById('SeattleCenter');
// var capHillUl = document.getElementById('CapitolHill');
// var alkiUl = document.getElementById('alkiBeach');

// // function multiply (a, b) {
// //   var result = a*b;
// //   var final = Math.floor(result);
// //   return (final);
// // }

// // function randomNumber (min, max) {
// //   var result = Math.random() * (max - min + 1) + min;
// //   var final = Math.floor(result);
// //   console.log(final);
// //   return final;
// // }

// var firstAndPike = {
//   location: 'First and Pike',
//   averageCookies: 6.3,
//   cookiesPerCustomer: 0,
//   cookiesTotal: 0,
//   render: function () {
//     for(var i = 0; i < hours.length; i++) {
//       var liEl = document.createElement('li');
//       var maxCust = 65;
//       var minCust = 23;
//       var customerPerHour = (Math.random() * (maxCust - minCust + 1) + minCust);
//       var cookiesPerCustomer = (customerPerHour*firstAndPike.averageCookies);
//       var final = Math.floor(cookiesPerCustomer);
//       firstAndPike.cookiesTotal = cookiesPerCustomer + firstAndPike.cookiesTotal;
//       var cookiesTotalRounded = Math.floor(firstAndPike.cookiesTotal);
//       liEl.textContent = `${hours[i]}: ${final} cookies.`;
//       firstPikeUl.appendChild(liEl);
//     }
//     liEl.textContent = `Total: ${cookiesTotalRounded} cookies.`;
//   }
// };


// var seaTacAirport = {
//   location: 'SeaTac Airport',
//   averageCookies: 1.2,
//   cookiesPerCustomer: 0,
//   cookiesTotal: 0,
//   render: function () {
//     for(var i = 0; i < hours.length; i++) {
//       var liEl = document.createElement('li');
//       var maxCust = 24;
//       var minCust = 3;
//       var customerPerHour = (Math.random() * (maxCust - minCust + 1) + minCust);
//       var cookiesPerCustomer = (customerPerHour*seaTacAirport.averageCookies);
//       var final = Math.floor(cookiesPerCustomer);
//       seaTacAirport.cookiesTotal = cookiesPerCustomer + seaTacAirport.cookiesTotal;
//       var cookiesTotalRounded = Math.floor(seaTacAirport.cookiesTotal);
//       liEl.textContent = `${hours[i]}: ${final} cookies.`;
//       seaTacUl.appendChild(liEl);
//     }
//     liEl.textContent = `Total: ${cookiesTotalRounded} cookies.`;
//   }
// };

// var seattleCenter = {
//   location: 'Seattle Center',
//   averageCookies: 3.7,
//   cookiesPerCustomer: 0,
//   cookiesTotal: 0,
//   render: function () {
//     for(var i = 0; i < hours.length; i++) {
//       var liEl = document.createElement('li');
//       var maxCust = 38;
//       var minCust = 11;
//       var customerPerHour = (Math.random() * (maxCust - minCust + 1) + minCust);
//       var cookiesPerCustomer = (customerPerHour*seattleCenter.averageCookies);
//       var final = Math.floor(cookiesPerCustomer);
//       seattleCenter.cookiesTotal = cookiesPerCustomer + seattleCenter.cookiesTotal;
//       var cookiesTotalRounded = Math.floor(seattleCenter.cookiesTotal);
//       liEl.textContent = `${hours[i]}: ${final} cookies.`;
//       seaCenUl.appendChild(liEl);
//     }
//     liEl.textContent = `Total: ${cookiesTotalRounded} cookies.`;
//   }
// };

// var capitolHill = {
//   location: 'Capitol Hill',
//   averageCookies: 2.3,
//   cookiesPerCustomer: 0,
//   cookiesTotal: 0,
//   render: function () {
//     for(var i = 0; i < hours.length; i++) {
//       var liEl = document.createElement('li');
//       var maxCust = 38;
//       var minCust = 20;
//       var customerPerHour = (Math.random() * (maxCust - minCust + 1) + minCust);
//       var cookiesPerCustomer = (customerPerHour*capitolHill.averageCookies);
//       var final = Math.floor(cookiesPerCustomer);
//       capitolHill.cookiesTotal = cookiesPerCustomer + capitolHill.cookiesTotal;
//       var cookiesTotalRounded = Math.floor(capitolHill.cookiesTotal);
//       liEl.textContent = `${hours[i]}: ${final} cookies.`;
//       capHillUl.appendChild(liEl);
//     }
//     liEl.textContent = `Total: ${cookiesTotalRounded} cookies.`;
//   }
// };

// var alki = {
//   location: 'Alki',
//   averageCookies: 4.6,
//   cookiesPerCustomer: 0,
//   cookiesTotal: 0,
//   render: function () {
//     for(var i = 0; i < hours.length; i++) {
//       var liEl = document.createElement('li');
//       var maxCust = 16;
//       var minCust = 2;
//       var customerPerHour = (Math.random() * (maxCust - minCust + 1) + minCust);
//       var cookiesPerCustomer = (customerPerHour*alki.averageCookies);
//       var final = Math.floor(cookiesPerCustomer);
//       alki.cookiesTotal = cookiesPerCustomer + alki.cookiesTotal;
//       var cookiesTotalRounded = Math.floor(alki.cookiesTotal);
//       liEl.textContent = `${hours[i]}: ${final} cookies.`;
//       alkiUl.appendChild(liEl);
//     }
//     liEl.textContent = `Total: ${cookiesTotalRounded} cookies.`;
//   }
// };

// firstAndPike.render();
// seaTacAirport.render();
// seattleCenter.render();
// capitolHill.render();
// alki.render();
