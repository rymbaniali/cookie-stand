'use strict';

const workingHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

// declare the div
let parent = document.getElementById('parent');
//creat table 
let table = document.createElement('table');
//append the table to parent
parent.appendChild(table);

//footer sum
let myTotalSum = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];


let shops = [];
let totalOfTotal = 0;


function Cookiestand(name, minHourlyCust, maxHourlyCust, AvgCookieSale) {

  this.name = name;
  this.minHourlyCust = minHourlyCust;
  this.maxHourlyCust = maxHourlyCust;
  this.AvgCookieSale = AvgCookieSale;
  this.getRandoNumOfCustArr = [];
  this.avgAmountPerHourArr = [];
  this.total = 0;


  shops.push(this);


}

// calculate random customer
Cookiestand.prototype.getRandoNumOfCust = function () {
  for (let i = 0; i < workingHours.length; i++) {

    this.getRandoNumOfCustArr.push(Math.floor(Math.random() * (this.maxHourlyCust - this.minHourlyCust)) + this.minHourlyCust);
    // console.log(this.getRandoNumOfCustArr[i]);

  }


};

// calculate avg cookies amount
Cookiestand.prototype.avgAmountperHour = function () {
  for (let i = 0; i < workingHours.length; i++) {
    let mathFloorFactor = Math.floor(this.getRandoNumOfCustArr[i] * this.AvgCookieSale);
    this.avgAmountPerHourArr.push(mathFloorFactor);
    this.avgAmountPerHourArr[i] = (mathFloorFactor);

    this.total = this.total + this.avgAmountPerHourArr[i];

    myTotalSum[i] = myTotalSum[i] + mathFloorFactor;

  }
  console.log("this is the total  ", this.total);

};

let tablesCol = ['    ', ' 6am ', ' 7am ', ' 8am ', ' 9am ', ' 10am ', ' 11am ', ' 12pm ', ' 1pm ', ' 2pm ', ' 3pm ', ' 4pm ', ' 5pm ', ' 6pm ', '7pm', ' Daily Location Total '];

// let tablesRow = ['Seattle', 'Tokyo', 'Dubai', 'Paris', 'Lima', 'Totals'];

let header = function () {
  let firstRow = document.createElement('tr');
  table.appendChild(firstRow);

  for (let i = 0; i < tablesCol.length; i++) {

    let firstCol = document.createElement('th');

    firstRow.appendChild(firstCol);
    firstCol.textContent = tablesCol[i];
  }
};




Cookiestand.prototype.render = function () {

  let rowsOfTable = document.createElement('tr');
  table.appendChild(rowsOfTable);
  let colOfTable = document.createElement('td');

  rowsOfTable.appendChild(colOfTable);

  colOfTable.textContent = `${this.name}`;


  console.log('befor the loop', this.total);

  for (let i = 0; i < this.avgAmountPerHourArr.length; i++) {

    let tableCols = document.createElement('td');
    rowsOfTable.appendChild(tableCols);

    tableCols.textContent = `${this.avgAmountPerHourArr[i]}`;
  }

  let dailylocTotCOL = document.createElement('td');
  rowsOfTable.appendChild(dailylocTotCOL);
  dailylocTotCOL.textContent = this.total;

  totalOfTotal += this.total;
  console.log(this);

};



let Seattle = new Cookiestand('Seattle', 23, 65, 6.3);
let Tokyo = new Cookiestand('Tokyo', 3, 24, 1.2);
let Dubai = new Cookiestand('Dubai', 11, 38, 3.7);
let Paris = new Cookiestand('Paris', 20, 38, 2.3);
let Lima = new Cookiestand('Lima', 2, 16, 4.6);



let footer = function () {

  let firstRowInFooter = document.createElement('tr');
  table.appendChild(firstRowInFooter);

  let firstColInFooter = document.createElement('th')
  firstRowInFooter.appendChild(firstColInFooter);

  firstColInFooter.textContent = `total`;


  for (let i = 0; i < workingHours.length; i++) {
    let lastRow = document.createElement('tr');
    table.appendChild(lastRow);
  }

  for (let j = 0; j < workingHours.length; j++) {

    let lastcol = document.createElement('th');

    firstRowInFooter.appendChild(lastcol);

    for (let k = 0; k < myTotalSum.length; k++) {

      lastcol.textContent = `${myTotalSum[j]}`;

    }
  }

  console.log(totalOfTotal);
  
  let totalOfTotalCOL = document.createElement('th');
  firstRowInFooter.appendChild(totalOfTotalCOL);
  totalOfTotalCOL.textContent = totalOfTotal;


};


header();

for (let i = 0; i < shops.length; i++) {


  shops[i].getRandoNumOfCust();
  shops[i].avgAmountperHour();
  shops[i].render();
}

footer();
