"use strict";
/*

//#1



const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3
let scoreDolphins = calcAverage(44, 23, 71)
let scoreKoalas = calcAverage(65, 54, 49)
console.log(scoreDolphins, scoreKoalas)


function checkWinner(avgDolphins, avgKoalas) {


    //     const avgDolphins = calcAverage(44, 23, 71)
    //     const avgKoalas = calcAverage(65, 54, 49)

    if (avgDolphins >= avgKoalas * 2) {
        console.log(`Dolphins win ${avgDolphins} vs. ${avgKoalas}`)
    } else if (avgKoalas >= avgDolphins * 2) {
        console.log(`Koalas win ${avgKoalas} vs. ${avgDolphins}`)
    } else {
        console.log(`No one wins`)
    }

}

checkWinner(scoreDolphins, scoreKoalas)
checkWinner(23, 46)

scoreDolphins = calcAverage(85, 54, 41)
scoreKoalas = calcAverage(23, 34, 27)

checkWinner(scoreDolphins, scoreKoalas)


//#2



const calcTip = function (value) {

    if (value >= 50 && value <= 300) {
        return value * 0.15
    } else {
        return value * 0.2
    }
}
const bills = [125, 555, 44]


const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])]
console.log(tips)


const total = [tips[0] + bills[0], tips[1] + bills[1], tips[2] + bills[2]]

console.log(total)




//#3 Object methods

const mark = {
    firstName: "Mark",
    lastName: "Miller",
    mass: 78,
    height: 1.69,
    calcBMI: function () {
        this.bmi = this.mass / this.height ** 2
        return this.bmi
    }
}

const john = {
    firstName: "John",
    lastName: "Smith",
    mass: 92,
    height: 1.95,
    calcBMI: function () {
        this.bmi = this.mass / this.height ** 2
        return this.bmi

    }
}

//NEED TO CALL THE FUNCTION TO ACCESS A NEW PROPERTY
john.calcBMI()
console.log(john.bmi)

// const showBMI = (mark, john) => mark.calcBMI() > john.calcBMI() ? console.log(`${mark.firstName}´s BMI ${mark.calcBMI()} is highter than ${john.firstName}´s ${john.calcBMI()}`) : console.log(`${john.firstName}´s BMI ${john.calcBMI()} is highter than ${mark.firstName}´s ${mark.calcBMI()}`)

// console.log(showBMI)

if (mark.bmi > john.bmi) {
    console.log(`${mark.firstName}´s BMI ${mark.bmi} is highter than ${john.firstName}´s ${john.bmi}`)
} else {
    console.log(`${john.firstName}´s BMI ${john.bmi} is highter than ${mark.firstName}´s ${mark.bmi}`)
}

// const sentence = mark => mark.calcBMI() > john.calcBMI() ? `${mark.firstName}´s BMI ${mark.calcBMI()} is highter than ${john.firstName}´s ${john.calcBMI()}` : `${john.firstName}´s BMI ${john.calcBMI()} is highter than ${mark.firstName}´s ${mark.calcBMI()}`

console.log(mark.calcBMI())
console.log(john.calcBMI())

*/
