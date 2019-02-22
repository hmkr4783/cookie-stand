'use strict';

// /* Making a variable hour and attaching all the times to it.
// ----------------------------------------------------------------------------------------------------*/
// var hours = [
//   '6am',
//   '7am',
//   '8am',
//   '9am',
//   '10am',
//   '11am',
//   '12pm',
//   '1pm',
//   '2pm',
//   '3pm',
//   '4pm',
//   '5pm',
//   '6pm',
//   '7pm',
//   '8pm',
// ];

// function random(min, max) {
//   return Math.floor(Math.random() * (max - min + 1)) + min;
// }

// /* Grabbing the ID 'cookiestands' from the html and attaching it to the
// variable, 'cookiestands'.
// ------------------------------------------------------------------------------- */
// var cookieStands = document.getElementById('cookiestands');
// //var shopList = [];
// var firstPikeUl = document.getElementById('firstAndPike');
// var seaTacUl = document.getElementById('SeaTacAirport');
// var seaCenUl = document.getElementById('SeattleCenter');
// var capHillUl = document.getElementById('CapitolHill');
// var alkiUl = document.getElementById('alkiBeach');
// /* This is a contructor function 
// ----------------------------------------------------------------------------------------------------*/
// function StoreInformation(location, averageCookies, max, min, storeId) {
//   this.location = location;
//   this.averageCookies = averageCookies;
//   this.customerPerHour = [];
//   this.cookiesTotal = 0;
//   this.max = max;
//   this.min = min;
//   this.storeId = storeId;
//   this.cookiesPerCustomerTotal = [];

//   /* This will caculate the random customer number times average cookies.
// ----------------------------------------------------------------------------------------------------*/
//   this.totalCustomerCalculation = function(){
//     for (var i = 0; i < hours.length; i++) {
//       this.customerPerHour.push(random(this.min, this.max));
//     }
//   };
//   this.totalCookiesCalculation = function() {
//     this.totalcustomerCalculation();
//     for (var i = 0; i < hours.length; i++) {
//       var cookiesEveryHour = Math.fllor(this.customerPerHour[i] * this.averageCookies);
//       this.cookiesPerCustomerTotal.push(cookiesEveryHour);
//       this.cookiesTotal += cookiesEveryHour;
//     }
//   };
//   /* This will create a prototype that holds the store locations and cookies total rows of table.
// ----------------------------------------------------------------------------------------------------*/
//   StoreInformation.prototype.render = function() {
//     this.totalCookiesCalculation();

//     /* This holds the table row in the variable trEl and table data in the variable tdEl.
//     ----------------------------------------------------------------------------------------------------*/
//     var trEl = document.createElement('tr');
//     var tdEl = document.createElement('td');

//     /* Attaches the location names as a text to the data element and appends the data element to the row element
//     ----------------------------------------------------------------------------------------------------*/
//     tdEl.textContent = this.location;
//     trEl.appendChild(tdEl);

//     /* Makes the part of the row of the table that contains the data for the cookies sold daily
//     ----------------------------------------------------------------------------------------------------*/
//     for (var i = 0; i < hours.length; i++) {
//       tdEl = document.createElement('td');
//       tdEl.textContent = this.cookiesPerCustomerTotal[i];
//       trEl.appendChild(tdEl);
//     }

//     /* Data for the daily location total for each row.
//     ----------------------------------------------------------------------------------------------------*/
//     var thEl = document.createElement('th');
//     thEl.textContent = this.cookiesTotal;
//     trEl.appendChild(thEl);
//     cookieStands.appendChild(trEl);
//   };
// //shopList.push(this);
// }







// /* This function creates the first row of the table.
// ------------------------------------------------------------------------------------------------------*/
// function tableHeader() {

//   /* This holds the table row in the variable trEl and table data in the variable tdEl.
//   ----------------------------------------------------------------------------------------------------*/
//   var trEl = document.createElement('tr');
//   var thEl = document.createElement('th');

//   /* This will list the hours in a row.
//   ----------------------------------------------------------------------------------------------------*/
//   for(var i = 0; i < hours.length; i ++) {
//     thEl = document.createElement('th');
//     thEl.textContent = hours[i];
//     trEl.appendChild(thEl);
//   }
//   thEl = document.createElement('th');
//   thEl.textContent = 'Daily Location Totals';
//   trEl.appendChild(thEl);
//   cookieStands.appendChild(trEl);
// }

// /* This function creates the last row of the table.
// ----------------------------------------------------------------------------------------------------*/
// function tableFooter() {
//   var trEl = document.createElement('tr');
//   var tfEl = document.createElement('tf');
//   tfEl.textContent = 'Totals';
//   trEl.appendChild(tfEl);
// }





// /* Creating variables for each store location to push each information up.
// ----------------------------------------------------------------------------------------------------*/

// var firstAndPike = new StoreInformation('1st and Pike', 6.3, 65, 23, firstPikeUl);
// firstAndPike.render();

// var seaTacAirport = new StoreInformation('SeaTac Airport', 1.2, 24, 3, seaTacUl);
// seaTacAirport.render();

// var seattleCenter = new StoreInformation('Seattle Center', 3.7, 38, 11, seaCenUl);
// seattleCenter.render();

// var capitolHill = new StoreInformation('Capitol Hill', 2.3, 38, 20, capHillUl);
// capitolHill.render();

// var alki = new StoreInformation('Alki', 4.6, 16, 2, alkiUl);
// alki.render();
// //var cookiesSoldTotalPerHour = new StoreInformation('Totals',0 ,0);




// tableHeader();










//     //create table data
//     //append data to row  

// //     var newRow = document.createElement('tr');
// //     for(var j = 0; j < hours.length; j++);
// //     var tdEl = document.createElement('td');
// //     tdEl.textContent = this.cookiesByStore[j];
// //     newRow.appendChild(tdEl);
// //   }
// //   liEl.textContent = `Total: ${cookiesTotalRounded} cookies.`;
// //   cookiestands.appendChild(newRow);
// // }


















var hours = [
  '6am',
  '7am',
  '8am',
  '9am',
  '10am',
  '11am',
  '12pm',
  '1pm',
  '2pm',
  '3pm',
  '4pm',
  '5pm',
  '6pm',
  '7pm',
  '8pm',
];

var cookieStands = document.getElementById('cookiestands');
function tableHeader() {

  /* This holds the table row in the variable trEl and table data in the variable tdEl.
  ----------------------------------------------------------------------------------------------------*/
  var trEl = document.createElement('tr');
  var thEl = document.createElement('th');

  /* This will list the hours in a row.
  ----------------------------------------------------------------------------------------------------*/
  for(var i = 0; i < hours.length; i ++) {
    thEl = document.createElement('th');
    thEl.textContent = hours[i];
    trEl.appendChild(thEl);
  }
  thEl = document.createElement('th');
  thEl.textContent = 'Daily Location Totals';
  trEl.appendChild(thEl);
  cookieStands.appendChild(trEl);
}

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
      var liEl = document.createElement('td');

      var maxCust = 65;
      var minCust = 23;
      var customerPerHour = (Math.random() * (maxCust - minCust + 1) + minCust);
      var cookiesPerCustomer = (customerPerHour*firstAndPike.averageCookies);
      var final = Math.floor(cookiesPerCustomer);
      firstAndPike.cookiesTotal = cookiesPerCustomer + firstAndPike.cookiesTotal;
      var cookiesTotalRounded = Math.floor(firstAndPike.cookiesTotal);
      liEl.innerHTML = final;
      firstPikeUl.appendChild(liEl);
    }
    liEl.innerHTML = cookiesTotalRounded;
  }
};

var seaTacAirport = {
  location: 'SeaTac Airport',
  averageCookies: 1.2,
  cookiesPerCustomer: 0,
  cookiesTotal: 0,
  render: function () {
    for(var i = 0; i < hours.length; i++) {
      var liEl = document.createElement('td');
      var maxCust = 24;
      var minCust = 3;
      var customerPerHour = (Math.random() * (maxCust - minCust + 1) + minCust);
      var cookiesPerCustomer = (customerPerHour*seaTacAirport.averageCookies);
      var final = Math.floor(cookiesPerCustomer);
      seaTacAirport.cookiesTotal = cookiesPerCustomer + seaTacAirport.cookiesTotal;
      var cookiesTotalRounded = Math.floor(seaTacAirport.cookiesTotal);
      liEl.innerHTML = final;
      seaTacUl.appendChild(liEl);
    }
    liEl.innerHTML = cookiesTotalRounded;
  }
};

var seattleCenter = {
  location: 'Seattle Center',
  averageCookies: 3.7,
  cookiesPerCustomer: 0,
  cookiesTotal: 0,
  render: function () {
    for(var i = 0; i < hours.length; i++) {
      var liEl = document.createElement('td');
      var maxCust = 38;
      var minCust = 11;
      var customerPerHour = (Math.random() * (maxCust - minCust + 1) + minCust);
      var cookiesPerCustomer = (customerPerHour*seattleCenter.averageCookies);
      var final = Math.floor(cookiesPerCustomer);
      seattleCenter.cookiesTotal = cookiesPerCustomer + seattleCenter.cookiesTotal;
      var cookiesTotalRounded = Math.floor(seattleCenter.cookiesTotal);
      liEl.innerHTML = final;
      seaCenUl.appendChild(liEl);
    }
    liEl.innerHTML = cookiesTotalRounded;
  }
};

var capitolHill = {
  location: 'Capitol Hill',
  averageCookies: 2.3,
  cookiesPerCustomer: 0,
  cookiesTotal: 0,
  render: function () {
    for(var i = 0; i < hours.length; i++) {
      var liEl = document.createElement('td');
      var maxCust = 38;
      var minCust = 20;
      var customerPerHour = (Math.random() * (maxCust - minCust + 1) + minCust);
      var cookiesPerCustomer = (customerPerHour*capitolHill.averageCookies);
      var final = Math.floor(cookiesPerCustomer);
      capitolHill.cookiesTotal = cookiesPerCustomer + capitolHill.cookiesTotal;
      var cookiesTotalRounded = Math.floor(capitolHill.cookiesTotal);
      liEl.innerHTML = final;
      capHillUl.appendChild(liEl);
    }
    liEl.innerHTML = cookiesTotalRounded;
  }
};

var alki = {
  location: 'Alki',
  averageCookies: 4.6,
  cookiesPerCustomer: 0,
  cookiesTotal: 0,
  render: function () {
    for(var i = 0; i < hours.length; i++) {
      var liEl = document.createElement('td');
      var maxCust = 16;
      var minCust = 2;
      var customerPerHour = (Math.random() * (maxCust - minCust + 1) + minCust);
      var cookiesPerCustomer = (customerPerHour*alki.averageCookies);
      var final = Math.floor(cookiesPerCustomer);
      alki.cookiesTotal = cookiesPerCustomer + alki.cookiesTotal;
      var cookiesTotalRounded = Math.floor(alki.cookiesTotal);
      liEl.innerHTML = final;
      alkiUl.appendChild(liEl);
    }
    liEl.innerHTML = cookiesTotalRounded;
  }
};

/* This function creates the last row of the table.
----------------------------------------------------------------------------------------------------*/
function tableFooter() {
  var trEl = document.createElement('tr');
  var tfEl = document.createElement('tf');
  tfEl.textContent = 'Totals';
  trEl.appendChild(tfEl);
}



tableHeader();
firstAndPike.render();
seaTacAirport.render();
seattleCenter.render();
capitolHill.render();
alki.render();
tableFooter();
