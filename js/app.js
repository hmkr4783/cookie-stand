'use strict';


/* Making a variable hour and attaching all the times to it.
----------------------------------------------------------------------------------------------------*/
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
/* Grabbing the ID 'cookiestands' from the html and attaching it to the
variable, 'cookiestands'.
--------------------------------------------------------------------------------------------------- */
var cookieStands = document.getElementById('cookiestands');
/* making a varible that will store all the shops
----------------------------------------------------------------------------------------------------*/
var shopList = [];
// var additionalStore = [];
/* This is a contructor function
----------------------------------------------------------------------------------------------------*/
function StoreInformation(location, averageCookies, maxC, minC) {
  this.location = location;
  this.averageCookies = averageCookies;
  this.customerPerHour = [];
  this.cookiesTotal = 0;
  this.maxC = maxC;
  this.minC = minC;
  this.cookiesPerCustomerTotal = [];
  /* This will caculate the random customer number times average cookies and also the totals that are needed.
----------------------------------------------------------------------------------------------------*/
  this.customerCountPerHour = function() {
    for (var i = 0; i < hours.length; i++) {
      this.customerPerHour.push(random(this.minC, this.maxC));
    }
  };
  this.totalCookiesCalculation = function() {
    this.customerCountPerHour();
    for (var i = 0; i < hours.length; i++) {
      var cookiesEveryHour = Math.floor(this.customerPerHour[i] * this.averageCookies);
      this.cookiesPerCustomerTotal.push(cookiesEveryHour);
      this.cookiesTotal += cookiesEveryHour;
    }
  };
  /* This will push all the calculations to the variable shopList.
----------------------------------------------------------------------------------------------------*/
  shopList.push(this);
}

/* This function will create the function 'random' that will have the random number generator equation
----------------------------------------------------------------------------------------------------*/
function random(min, max) {
  return (Math.random() * (max - min + 1)) + min;
}


/* This will create a prototype that holds the store locations and cookies total rows of table.
----------------------------------------------------------------------------------------------------*/
StoreInformation.prototype.render = function() {
  this.totalCookiesCalculation();
  /* This holds the table row in the variable trEl and table data in the variable tdEl.
  ----------------------------------------------------------------------------------------------------*/
  var trEl = document.createElement('tr');
  var tdEl = document.createElement('td');


  /* Attaches the location names as a text to the data element and appends the data element to the row element
  ----------------------------------------------------------------------------------------------------*/
  tdEl.textContent = this.location;
  trEl.appendChild(tdEl);
  /* Makes the part of the row of the table that contains the data for the cookies sold daily
  ----------------------------------------------------------------------------------------------------*/
  for (var i = 0; i < hours.length; i++) {
    tdEl = document.createElement('td');
    tdEl.textContent = this.cookiesPerCustomerTotal[i];
    trEl.appendChild(tdEl);
  }
  /* Data for the daily location total for each row.
  ----------------------------------------------------------------------------------------------------*/
  var thEl = document.createElement('th');
  thEl.textContent = this.cookiesTotal;
  trEl.appendChild(thEl);
  cookieStands.appendChild(trEl);
  // newUserTableInfo.appendChild(trEl);
};

  
/* This function creates the first row of the table.
------------------------------------------------------------------------------------------------------*/
function tableHeader() {
  /* This holds the table row in the variable trEl and table data in the variable tdEl.
  ----------------------------------------------------------------------------------------------------*/
  var trEl = document.createElement('tr');
  var thEl = document.createElement('th');
  thEl.textContent = 'Store Locations';
  trEl.appendChild(thEl);
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

/* This function creates the last row of the table.
----------------------------------------------------------------------------------------------------*/
function tableFooter() {
  var trEl = document.createElement('tr');
  var thEl = document.createElement('th');
  thEl.textContent = 'Totals For All Locations';
  // eslint-disable-next-line no-redeclare
  var trEl = document.createElement('tr');
  trEl.setAttribute('id', 'footer');
  trEl.appendChild(thEl);

  /* This will set the value for allTotaled to 0.
----------------------------------------------------------------------------------------------------*/
  var allTotaled = 0;
  for (var i = 0; i < hours.length; i++) {
    var hourlyTotal = 0;
    for (var j = 0; j < shopList.length; j++) {
      hourlyTotal += shopList[j].cookiesPerCustomerTotal[i];
    }
    /* This makes the total of each hour show up on the table.
  ----------------------------------------------------------------------------------------------------*/
    allTotaled += hourlyTotal;
    thEl = document.createElement('th');
    thEl.textContent = hourlyTotal;
    trEl.appendChild(thEl);
  }
  /* This makes the total of all totals show up on the table.
  ----------------------------------------------------------------------------------------------------*/
  thEl = document.createElement('th');
  thEl.textContent = allTotaled;
  trEl.appendChild(thEl);
  cookieStands.appendChild(trEl);
}


// /* Event Handler
// ----------------------------------------------------------------------------------------------------*/
var newStoreForm = document.getElementById('additional-store');

function handleSubmit(event) {

  event.preventDefault();

  var location = event.target.newLocation.value;
  var averageCookies = parseInt(event.target.newAverageCookies.value);
  var maxC = parseInt(event.target.newMax.value);
  var minC = parseInt(event.target.newMin.value);

  var storeSubmission = new StoreInformation(location, averageCookies, maxC, minC);

  event.target.newLocation.value = null;
  event.target.newMin.value = null;
  event.target.newMax.value = null;
  event.target.newAverageCookies.value = null;
  shopList.push(storeSubmission);

  document.getElementById('footer').remove();
  storeSubmission.render();
  tableFooter();
}


/* Creating variables for each store location to push each information up.
-----------------------------------------------------------------------------------------------------*/
var firstAndPike = new StoreInformation('1st and Pike', 6.3, 65, 23);
var seaTacAirport = new StoreInformation('SeaTac Airport', 1.2, 24, 3);
var seattleCenter = new StoreInformation('Seattle Center', 3.7, 38, 11);
var capitolHill = new StoreInformation('Capitol Hill', 2.3, 38, 20);
var alki = new StoreInformation('Alki', 4.6, 16, 2);

/* var userSubmission = new StoreInformation(newUserLocation, newUserAverageCookies, newUserMax, newUserMin, 'new submissions');*/

var allShops = [firstAndPike, seaTacAirport, seattleCenter, capitolHill, alki];





/* Calling all functions for the table.
----------------------------------------------------------------------------------------------------*/
function renderTable() {
  tableHeader();
  for(var i = 0; i < allShops.length; i++) {
    allShops[i].render();
  }
  tableFooter();
}

newStoreForm.addEventListener('submit', handleSubmit);
renderTable();


