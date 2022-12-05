'use strict';

// Global Variables *******************************************************
let i=0;
let j=0;

// DOM Windows ***********************************************************
let storeSection = document.getElementById('store-info');

// Object Literals ********************************************************
let Seattle = new Location('Seattle',23, 65, 6.3, 600, 1300);
let Tokyo = new Location('Tokyo',3, 24, 1.2, 600, 1400);
let Dubai = new Location('Dubai',11, 38, 3.7, 600, 1500);
let Paris = new Location('Paris',20, 38, 2.3, 600, 1600);
let Lima = new Location('Lima',2, 16, 4.6, 600, 1700);
let locations = ['Seattle', 'Tokyo', 'Dubai', 'Paris', 'Lima'];

// Functions **************************************************************

// add method to generate random order
function Location(store,min,max,avg,open,close) {
  this.name = store;
  this.minCustomers = min;
  this.maxCustomers = max;
  this.avgOrder = avg;
  this.openTime = open;
  this.closeTime = close;
  // add time in 12hr format ##########
  // add am/pm #############
  this.sales = [[600, 100, 200]];
  this.salesTotal = 0;
}

// combine this into one function with Location ##################
function salesEstimate (store) {
  i=0;
  j=0;
  let time = store.openTime - 100;
  let customers;
  let salesEst;

  // check close time ###############
  for (i=0;time < store.closeTime -100; i++){
    time = time + 100;
    // taken from MDN docs
    customers = Math.floor(Math.random() * (store.maxCustomers - store.minCustomers + 1) + store.minCustomers);
    // change these references to THIS ###############
    salesEst = Math.floor(customers * store.avgOrder);
    store.sales[i] = [time, customers, salesEst];
    store.salesTotal = store.salesTotal + salesEst;
  }
}

function display (store){
  console.log(store.name);
  let time = store.openTime / 100 - 1;
  let time12 = time;
  let close = store.closeTime / 100;
  let amPm = 'am';

  for(i=0; time < close; i++){
    time = time + 1;
    if (time > 12){
      time12 = time - 12;
    } else {
      time12 = time;
    }

    if (time < 12){
      amPm = 'am';
    } else {
      amPm = 'pm';
    }

    console.log(`${time12}${amPm}: ${store.sales[i][2]} cookies`);
  }

  console.log(`Total: ${store.salesTotal}`);
}

// DOM Manipulation *****************************************************
// Put this in a loop for each store #####################################################
let articleElem = document.createElement('article');
storeSection.appendChild(articleElem);

let h2Element = document.createElement('h2');
h2Element.textContent = "Hello";
articleElem.appendChild(h2Element);

let pElement = document.createElement('p');
pElement.textContent = "Frankie is 8";
articleElem.appendChild(pElement);

let ulElement = document.createElement('ul');
articleElem.appendChild(ulElement);

for (i=0; i < 5; i++){
  let liElem = document.createElement('li');
  liElem.textContent = this.interests[i];
  ulElement.appendChild(liElem);
}




// Executable Code *******************************************************
salesEstimate(Seattle);
salesEstimate(Tokyo);
salesEstimate(Dubai);
salesEstimate(Paris);
salesEstimate(Lima);

display(Seattle);
console.log("")
display(Tokyo);


// console.log(Seattle.sales);
// console.log(`Total estimated sales: ${Seattle.salesTotal}`);

// console.log(Tokyo.sales);
// console.log(`Total estimated sales: ${Tokyo.salesTotal}`);

// console.log(Dubai.sales);
// console.log(`Total estimated sales: ${Dubai.salesTotal}`);
