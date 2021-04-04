'use strict';
let workingHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
// let totalSum=0;

let Seattle = {
    name: 'Seattle',
    minHourlyCust: 23,
    maxHourlyCust: 65,
    AvgCookieSale: 6.3,
    getRandoNumOfCustArr: [],
    avgAmountPerHourArr: [],
    totalSum:0,



    getRandoNumOfCust: function () {
        for (let i = 0; i < workingHours.length; i++) {

            this.getRandoNumOfCustArr.push(Math.floor(Math.random() * (this.maxHourlyCust - this.minHourlyCust)) + this.minHourlyCust);
            console.log(this.getRandoNumOfCustArr[i]);

        }

    },
    avgAmountperHour: function () {
        for (let i = 0; i < workingHours.length; i++) {

            this.avgAmountPerHourArr.push(Math.floor(this.getRandoNumOfCustArr[i] * this.AvgCookieSale));

            console.log(this.avgAmountPerHourArr[i]);

            // console.log(i);

            this.totalSum=this.totalSum+ this.avgAmountPerHourArr[i];
            console.log("this is total sum ", this.totalSum);

        }

    }

}
// console.log(Seattle.avgAmountperHourArr);

Seattle.getRandoNumOfCust();
Seattle.avgAmountperHour();

// Seattle.avgAmountperHour(workingHours);

// console.log(Seattle.getRandoNumOfCustArr);
// console.log(Seattle.avgAmountperHourArr);

let mainDiv = document.getElementById('Seattle');


let cookieTitle = document.createElement('h2');
mainDiv.appendChild(cookieTitle);
cookieTitle.textContent = `${Seattle.name}`;

let ulElement = document.createElement('ul');
mainDiv.appendChild(ulElement);



for (let i = 0; i < workingHours.length; i++) {

    let liElement = document.createElement('li');
    ulElement.appendChild(liElement);
    liElement.textContent = `${workingHours[i]}  ${Seattle.avgAmountPerHourArr[i]} cookies`;

} 
let totalLiElement = document.createElement('li');
ulElement.appendChild(totalLiElement);
totalLiElement.textContent = `This is the total sum : ${Seattle.totalSum}`;

// totalSum=totalSum+Seattle.avgAmountperHour


// console.log(liElement);

// ReactDOM.render(<p>hello</p> , );
// console.log(Seattle.avgAmountperHour(workingHours));

//TOKYOU:

let Tokyo = {
    name: 'Tokyo',
    minHourlyCust: 3,
    maxHourlyCust: 24,
    AvgCookieSale: 1.2,
    getRandoNumOfCustArr: [],
    avgAmountPerHourArr: [],
    totalSum:0,


    getRandoNumOfCust: function () {
        for (let i = 0; i < workingHours.length; i++) {

            this.getRandoNumOfCustArr.push(Math.floor(Math.random() * (this.maxHourlyCust - this.minHourlyCust)) + this.minHourlyCust);
            console.log(this.getRandoNumOfCustArr[i]);

        }

    },
    avgAmountperHour: function () {
        for (let i = 0; i < workingHours.length; i++) {

            this.avgAmountPerHourArr.push(Math.floor(this.getRandoNumOfCustArr[i] * this.AvgCookieSale));

            console.log(this.avgAmountPerHourArr[i]);

            this.totalSum=this.totalSum+ this.avgAmountPerHourArr[i];
            console.log("this is total sum ", this.totalSum);
            


        }

    }
}


Tokyo.getRandoNumOfCust();
Tokyo.avgAmountperHour();


let tokyoDiv = document.getElementById('tokyo');

let tokyoTitle = document.createElement('h2');

tokyoDiv.appendChild(tokyoTitle);

tokyoTitle.textContent = `${Tokyo.name}`;

let tokyoUlElement = document.createElement('ul');
tokyoDiv.appendChild(tokyoUlElement);



for (let i = 0; i < workingHours.length; i++) {

    let liElement = document.createElement('li');
    tokyoUlElement.appendChild(liElement);
    liElement.textContent = `${workingHours[i]}  ${Tokyo.avgAmountPerHourArr[i]} cookies`;
}
let totalLiElement2 = document.createElement('li');
tokyoUlElement.appendChild(totalLiElement2);
totalLiElement2.textContent = `This is the total sum : ${Tokyo.totalSum}`;


//Dubai:

let Dubai = {
    name: 'Dubai',
    minHourlyCust: 11,
    maxHourlyCust: 38,
    AvgCookieSale: 3.7,
    getRandoNumOfCustArr: [],
    avgAmountPerHourArr: [],
    totalSum:0,



    getRandoNumOfCust: function () {
        for (let i = 0; i < workingHours.length; i++) {

            this.getRandoNumOfCustArr.push(Math.floor(Math.random() * (this.maxHourlyCust - this.minHourlyCust)) + this.minHourlyCust);
            console.log(this.getRandoNumOfCustArr[i]);

        }

    },
    avgAmountperHour: function () {
        for (let i = 0; i < workingHours.length; i++) {

            this.avgAmountPerHourArr.push(Math.floor(this.getRandoNumOfCustArr[i] * this.AvgCookieSale));

            console.log(this.avgAmountPerHourArr[i]);

            // console.log(i);
            this.totalSum=this.totalSum+ this.avgAmountPerHourArr[i];
            console.log("this is total sum ", this.totalSum);

        }

    }
}


Dubai.getRandoNumOfCust();
Dubai.avgAmountperHour();


let dubaiDiv = document.getElementById('Dubai');

let dubaiTitle = document.createElement('h2');

dubaiDiv.appendChild(dubaiTitle);

dubaiTitle.textContent = `${Dubai.name}`;

let dubaiUlElement = document.createElement('ul');
dubaiDiv.appendChild(dubaiUlElement);



for (let i = 0; i < workingHours.length; i++) {

    let liElement = document.createElement('li');
    dubaiUlElement.appendChild(liElement);
    liElement.textContent = `${workingHours[i]}  ${Dubai.avgAmountPerHourArr[i]} cookies`;
}
let totalLiElement3 = document.createElement('li');
dubaiUlElement.appendChild(totalLiElement3);
totalLiElement3.textContent = `This is the total sum : ${Dubai.totalSum}`;


//Paris:

let Paris = {
    name: 'Paris',
    minHourlyCust: 20,
    maxHourlyCust: 38,
    AvgCookieSale: 2.3,
    getRandoNumOfCustArr: [],
    avgAmountPerHourArr: [],
    totalSum:0,


    getRandoNumOfCust: function () {
        for (let i = 0; i < workingHours.length; i++) {

            this.getRandoNumOfCustArr.push(Math.floor(Math.random() * (this.maxHourlyCust - this.minHourlyCust)) + this.minHourlyCust);
            console.log(this.getRandoNumOfCustArr[i]);

        }

    },
    avgAmountperHour: function () {
        for (let i = 0; i < workingHours.length; i++) {

            this.avgAmountPerHourArr.push(Math.floor(this.getRandoNumOfCustArr[i] * this.AvgCookieSale));

            console.log(this.avgAmountPerHourArr[i]);

            this.totalSum=this.totalSum+ this.avgAmountPerHourArr[i];
            console.log("this is total sum ", this.totalSum);


        }

    }
}


Paris.getRandoNumOfCust();
Paris.avgAmountperHour();


let parisDiv = document.getElementById('Paris');

let parisTitle = document.createElement('h2');

parisDiv.appendChild(parisTitle);

parisTitle.textContent = `${Paris.name}`;

let parisUlElement = document.createElement('ul');
parisDiv.appendChild(parisUlElement);



for (let i = 0; i < workingHours.length; i++) {

    let liElement = document.createElement('li');
    parisUlElement.appendChild(liElement);
    liElement.textContent = `${workingHours[i]}  ${Paris.avgAmountPerHourArr[i]} cookies`;
}
let totalLiElement4 = document.createElement('li');
parisUlElement.appendChild(totalLiElement4);
totalLiElement4.textContent = `This is the total sum : ${Paris.totalSum}`;




//Lima:


let Lima = {
    name: 'Lima',
    minHourlyCust: 20,
    maxHourlyCust: 38,
    AvgCookieSale: 2.3,
    getRandoNumOfCustArr: [],
    avgAmountPerHourArr: [],
    totalSum:0,


    getRandoNumOfCust: function () {
        for (let i = 0; i < workingHours.length; i++) {

            this.getRandoNumOfCustArr.push(Math.floor(Math.random() * (this.maxHourlyCust - this.minHourlyCust)) + this.minHourlyCust);
            console.log(this.getRandoNumOfCustArr[i]);

        }

    },
    avgAmountperHour: function () {
        for (let i = 0; i < workingHours.length; i++) {

            this.avgAmountPerHourArr.push(Math.floor(this.getRandoNumOfCustArr[i] * this.AvgCookieSale));

            console.log(this.avgAmountPerHourArr[i]);

            this.totalSum=this.totalSum+ this.avgAmountPerHourArr[i];
            console.log("this is total sum ", this.totalSum);
            


        }

    }
}


Lima.getRandoNumOfCust();
Lima.avgAmountperHour();


let limaDiv = document.getElementById('Lima');

let limaTitle = document.createElement('h2');

limaDiv.appendChild(limaTitle);

limaTitle.textContent = `${Lima.name}`;

let limaUlElement = document.createElement('ul');
limaDiv.appendChild(limaUlElement);



for (let i = 0; i < workingHours.length; i++) {

    let liElement = document.createElement('li');
    limaUlElement.appendChild(liElement);
    liElement.textContent = `${workingHours[i]}  ${Lima.avgAmountPerHourArr[i]} cookies`;
}

let totalLiElement5 = document.createElement('li');
limaUlElement.appendChild(totalLiElement5);
totalLiElement5.textContent = `This is the total sum : ${Lima.totalSum}`;