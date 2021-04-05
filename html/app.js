'use strict';

const workingHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];



let parent = document.getElementById('parent');

let table = document.createElement('table');

parent.appendChild(table);

let myTotalSum = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
let rowSum = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, ];

let resturant = ['Seattle', 'Tokyo', 'Dubai', 'Paris', 'Lima'];

let shops = [];


function Cookiestand(name, minHourlyCust, maxHourlyCust, AvgCookieSale) {

    this.name = name;
    this.minHourlyCust = minHourlyCust;
    this.maxHourlyCust = maxHourlyCust;
    this.AvgCookieSale = AvgCookieSale;
    this.getRandoNumOfCustArr = [];
    this.avgAmountPerHourArr = [];
    // let total = 0;


    shops.push(this);


}


Cookiestand.prototype.getRandoNumOfCust = function () {
    for (let i = 0; i < workingHours.length; i++) {

        this.getRandoNumOfCustArr.push(Math.floor(Math.random() * (this.maxHourlyCust - this.minHourlyCust)) + this.minHourlyCust);
        // console.log(this.getRandoNumOfCustArr[i]);

    }


}

Cookiestand.prototype.avgAmountperHour = function () {
    for (let i = 0; i < workingHours.length; i++) {

        
        let mathFloorFactor = Math.floor(this.getRandoNumOfCustArr[i] * this.AvgCookieSale);

        // console.log(this.avgAmountPerHourArr[i]);
        this.avgAmountPerHourArr.push(mathFloorFactor);

        this.avgAmountPerHourArr[i] = (mathFloorFactor);
        this.totalSum = this.totalSum + this.avgAmountPerHourArr[i];
        // // console.log("this is total sum ", this.totalSum);
        myTotalSum[i] = myTotalSum[i] + mathFloorFactor;
        // rowSum[i]=this.totalSum[i]+this.avgAmountPerHourArr[i]+mathFloorFactor;
        
        // this.totalSum+=this.avgAmountPerHourArr[i];
        
     
    }

}

let tablesCol = ['    ', ' 6am ', ' 7am ', ' 8am ', ' 9am ', ' 10am ', ' 11am ', ' 12pm ', ' 1pm ', ' 2pm ', ' 3pm ', ' 4pm ', ' 5pm ', ' 6pm ', '7pm', ' Daily Location Total '];

// let tablesRow = ['Seattle', 'Tokyo', 'Dubai', 'Paris', 'Lima', 'Totals'];

let header = function () {
    let firstRow = document.createElement('tr');
    table.appendChild(firstRow);



    for (let i = 0; i < tablesCol.length; i++) {
        let firstCol = document.createElement('th')

        firstRow.appendChild(firstCol);
        firstCol.textContent = tablesCol[i];
    }


}
header();



Cookiestand.prototype.render = function () {

    let rowsOfTable = document.createElement('tr');
    table.appendChild(rowsOfTable);
    let colOfTable = document.createElement('td')

    rowsOfTable.appendChild(colOfTable);

    colOfTable.textContent = `${this.name}`;

    // console.log('this form render', rowsOfTable);


    for (let i = 0; i < this.avgAmountPerHourArr.length; i++) {

        // let tableRows = document.createElement('tr');
        // table.appendChild(tableRows);

        let tableCols = document.createElement('td')
        rowsOfTable.appendChild(tableCols);

        tableCols.textContent = `${this.avgAmountPerHourArr[i]}`;

        for (let j = 0; j < workingHours.length; j++) {

            this.total = tableCols[j] + this.total;
        
        //   for (let k = 0; k < resturant.length; k++) {
         
              
        //    let dailylocTotCOL = document.createElement('td')
        //         rowsOfTable.appendChild(dailylocTotCOL);
        //         dailylocTotCOL.textContent = `${ rowSum[j]}`;
           
        //     for (let d = 0; d < workingHours.length; d++) {
                
        //       for (let k = 0; k < resturant.length; k++) {
                
                  
        //       }
                
        //     }
    // }
        }

    }


}



    // for (let i = 0; i < tablesRow.length; i++) {

    //     let rowsOfTable = document.createElement('tr');
    //     table.appendChild(rowsOfTable);
    //     rowsOfTable.textcontnt = tablesRow[i];

    //     for (let j = 0; j < tablesCol.length; j++) {

    //         let colOfTable = document.createElement('td')

    //         rowsOfTable.appendChild(colOfTable);

    //         colOfTable.textcontnt = tablesCol[i];

    //         if (j === 0 || j === 15) {
    //             let colOfTable = document.createElement('th');

    //         }

    //     }
    // }


    let Seattle = new Cookiestand('Seattle', 23, 65, 6.3);
    let Tokyo = new Cookiestand('Tokyo', 3, 24, 1.2);
    let Dubai = new Cookiestand('Dubai', 11, 38, 3.7);
    let Paris = new Cookiestand('Paris', 20, 38, 2.3);
    let Lima = new Cookiestand('Lima', 2, 16, 4.6);

    for (let i = 0; i < shops.length; i++) {


        shops[i].getRandoNumOfCust();
        shops[i].avgAmountperHour();
        shops[i].render();
        // shops[i].header();
        // console.log('this is from for loop', shops[i]);
    }

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

                // console.log(`footer    `, myTotalSum);
            }
        }
    }

    footer();


// Cookiestand.prototype.getRandoNumOfCust();
// Cookiestand.prototype.AvgCookieSale();
// Cookiestand.prototype.render();


// let logoImage= document.createElement('img');
// parint.












// let Seattle = {
//     name: 'Seattle',
//     minHourlyCust: 23,
//     maxHourlyCust: 65,
//     AvgCookieSale: 6.3,
//     getRandoNumOfCustArr: [],
//     avgAmountPerHourArr: [],
//     totalSum:0,



//     getRandoNumOfCust: function () {
//         for (let i = 0; i < workingHours.length; i++) {

//             this.getRandoNumOfCustArr.push(Math.floor(Math.random() * (this.maxHourlyCust - this.minHourlyCust)) + this.minHourlyCust);
//             console.log(this.getRandoNumOfCustArr[i]);

//         }

//     },
//     avgAmountperHour: function () {
//         for (let i = 0; i < workingHours.length; i++) {

//             this.avgAmountPerHourArr.push(Math.floor(this.getRandoNumOfCustArr[i] * this.AvgCookieSale));

//             console.log(this.avgAmountPerHourArr[i]);

//             // console.log(i);

//             this.totalSum=this.totalSum+ this.avgAmountPerHourArr[i];
//             console.log("this is total sum ", this.totalSum);

//         }

//     }

// }
// // console.log(Seattle.avgAmountperHourArr);

// Seattle.getRandoNumOfCust();
// Seattle.avgAmountperHour();

// // Seattle.avgAmountperHour(workingHours);

// // console.log(Seattle.getRandoNumOfCustArr);
// // console.log(Seattle.avgAmountperHourArr);

// let mainDiv = document.getElementById('Seattle');


// let cookieTitle = document.createElement('h2');
// mainDiv.appendChild(cookieTitle);
// cookieTitle.textContent = `${Seattle.name}`;

// let ulElement = document.createElement('ul');
// mainDiv.appendChild(ulElement);



// for (let i = 0; i < workingHours.length; i++) {

//     let liElement = document.createElement('li');
//     ulElement.appendChild(liElement);
//     liElement.textContent = `${workingHours[i]}  ${Seattle.avgAmountPerHourArr[i]} cookies`;

// } 
// let totalLiElement = document.createElement('li');
// ulElement.appendChild(totalLiElement);
// totalLiElement.textContent = `This is the total sum : ${Seattle.totalSum}`;

// // totalSum=totalSum+Seattle.avgAmountperHour


// // console.log(liElement);

// // ReactDOM.render(<p>hello</p> , );
// // console.log(Seattle.avgAmountperHour(workingHours));

// //TOKYOU:

// let Tokyo = {
//     name: 'Tokyo',
//     minHourlyCust: 3,
//     maxHourlyCust: 24,
//     AvgCookieSale: 1.2,
//     getRandoNumOfCustArr: [],
//     avgAmountPerHourArr: [],
//     totalSum:0,


//     getRandoNumOfCust: function () {
//         for (let i = 0; i < workingHours.length; i++) {

//             this.getRandoNumOfCustArr.push(Math.floor(Math.random() * (this.maxHourlyCust - this.minHourlyCust)) + this.minHourlyCust);
//             console.log(this.getRandoNumOfCustArr[i]);

//         }

//     },
//     avgAmountperHour: function () {
//         for (let i = 0; i < workingHours.length; i++) {

//             this.avgAmountPerHourArr.push(Math.floor(this.getRandoNumOfCustArr[i] * this.AvgCookieSale));

//             console.log(this.avgAmountPerHourArr[i]);

//             this.totalSum=this.totalSum+ this.avgAmountPerHourArr[i];
//             console.log("this is total sum ", this.totalSum);



//         }

//     }
// }


// Tokyo.getRandoNumOfCust();
// Tokyo.avgAmountperHour();


// let tokyoDiv = document.getElementById('tokyo');

// let tokyoTitle = document.createElement('h2');

// tokyoDiv.appendChild(tokyoTitle);

// tokyoTitle.textContent = `${Tokyo.name}`;

// let tokyoUlElement = document.createElement('ul');
// tokyoDiv.appendChild(tokyoUlElement);



// for (let i = 0; i < workingHours.length; i++) {

//     let liElement = document.createElement('li');
//     tokyoUlElement.appendChild(liElement);
//     liElement.textContent = `${workingHours[i]}  ${Tokyo.avgAmountPerHourArr[i]} cookies`;
// }
// let totalLiElement2 = document.createElement('li');
// tokyoUlElement.appendChild(totalLiElement2);
// totalLiElement2.textContent = `This is the total sum : ${Tokyo.totalSum}`;


// //Dubai:

// let Dubai = {
//     name: 'Dubai',
//     minHourlyCust: 11,
//     maxHourlyCust: 38,
//     AvgCookieSale: 3.7,
//     getRandoNumOfCustArr: [],
//     avgAmountPerHourArr: [],
//     totalSum:0,



//     getRandoNumOfCust: function () {
//         for (let i = 0; i < workingHours.length; i++) {

//             this.getRandoNumOfCustArr.push(Math.floor(Math.random() * (this.maxHourlyCust - this.minHourlyCust)) + this.minHourlyCust);
//             console.log(this.getRandoNumOfCustArr[i]);

//         }

//     },
//     avgAmountperHour: function () {
//         for (let i = 0; i < workingHours.length; i++) {

//             this.avgAmountPerHourArr.push(Math.floor(this.getRandoNumOfCustArr[i] * this.AvgCookieSale));

//             console.log(this.avgAmountPerHourArr[i]);

//             // console.log(i);
//             this.totalSum=this.totalSum+ this.avgAmountPerHourArr[i];
//             console.log("this is total sum ", this.totalSum);

//         }

//     }
// }


// Dubai.getRandoNumOfCust();
// Dubai.avgAmountperHour();


// let dubaiDiv = document.getElementById('Dubai');

// let dubaiTitle = document.createElement('h2');

// dubaiDiv.appendChild(dubaiTitle);

// dubaiTitle.textContent = `${Dubai.name}`;

// let dubaiUlElement = document.createElement('ul');
// dubaiDiv.appendChild(dubaiUlElement);



// for (let i = 0; i < workingHours.length; i++) {

//     let liElement = document.createElement('li');
//     dubaiUlElement.appendChild(liElement);
//     liElement.textContent = `${workingHours[i]}  ${Dubai.avgAmountPerHourArr[i]} cookies`;
// }
// let totalLiElement3 = document.createElement('li');
// dubaiUlElement.appendChild(totalLiElement3);
// totalLiElement3.textContent = `This is the total sum : ${Dubai.totalSum}`;


// //Paris:

// let Paris = {
//     name: 'Paris',
//     minHourlyCust: 20,
//     maxHourlyCust: 38,
//     AvgCookieSale: 2.3,
//     getRandoNumOfCustArr: [],
//     avgAmountPerHourArr: [],
//     totalSum:0,


//     getRandoNumOfCust: function () {
//         for (let i = 0; i < workingHours.length; i++) {

//             this.getRandoNumOfCustArr.push(Math.floor(Math.random() * (this.maxHourlyCust - this.minHourlyCust)) + this.minHourlyCust);
//             console.log(this.getRandoNumOfCustArr[i]);

//         }

//     },
//     avgAmountperHour: function () {
//         for (let i = 0; i < workingHours.length; i++) {

//             this.avgAmountPerHourArr.push(Math.floor(this.getRandoNumOfCustArr[i] * this.AvgCookieSale));

//             console.log(this.avgAmountPerHourArr[i]);

//             this.totalSum=this.totalSum+ this.avgAmountPerHourArr[i];
//             console.log("this is total sum ", this.totalSum);


//         }

//     }
// }


// Paris.getRandoNumOfCust();
// Paris.avgAmountperHour();


// let parisDiv = document.getElementById('Paris');

// let parisTitle = document.createElement('h2');

// parisDiv.appendChild(parisTitle);

// parisTitle.textContent = `${Paris.name}`;

// let parisUlElement = document.createElement('ul');
// parisDiv.appendChild(parisUlElement);



// for (let i = 0; i < workingHours.length; i++) {

//     let liElement = document.createElement('li');
//     parisUlElement.appendChild(liElement);
//     liElement.textContent = `${workingHours[i]}  ${Paris.avgAmountPerHourArr[i]} cookies`;
// }
// let totalLiElement4 = document.createElement('li');
// parisUlElement.appendChild(totalLiElement4);
// totalLiElement4.textContent = `This is the total sum : ${Paris.totalSum}`;




// //Lima:


// let Lima = {
//     name: 'Lima',
//     minHourlyCust: 20,
//     maxHourlyCust: 38,
//     AvgCookieSale: 2.3,
//     getRandoNumOfCustArr: [],
//     avgAmountPerHourArr: [],
//     totalSum:0,


//     getRandoNumOfCust: function () {
//         for (let i = 0; i < workingHours.length; i++) {

//             this.getRandoNumOfCustArr.push(Math.floor(Math.random() * (this.maxHourlyCust - this.minHourlyCust)) + this.minHourlyCust);
//             console.log(this.getRandoNumOfCustArr[i]);

//         }

//     },
//     avgAmountperHour: function () {
//         for (let i = 0; i < workingHours.length; i++) {

//             this.avgAmountPerHourArr.push(Math.floor(this.getRandoNumOfCustArr[i] * this.AvgCookieSale));

//             console.log(this.avgAmountPerHourArr[i]);

//             this.totalSum=this.totalSum+ this.avgAmountPerHourArr[i];
//             console.log("this is total sum ", this.totalSum);



//         }

//     }
// }


// Lima.getRandoNumOfCust();
// Lima.avgAmountperHour();


// let limaDiv = document.getElementById('Lima');

// let limaTitle = document.createElement('h2');

// limaDiv.appendChild(limaTitle);

// limaTitle.textContent = `${Lima.name}`;

// let limaUlElement = document.createElement('ul');
// limaDiv.appendChild(limaUlElement);



// for (let i = 0; i < workingHours.length; i++) {

//     let liElement = document.createElement('li');
//     limaUlElement.appendChild(liElement);
//     liElement.textContent = `${workingHours[i]}  ${Lima.avgAmountPerHourArr[i]} cookies`;
// }

// let totalLiElement5 = document.createElement('li');
// limaUlElement.appendChild(totalLiElement5);
// totalLiElement5.textContent = `This is the total sum : ${Lima.totalSum}`;