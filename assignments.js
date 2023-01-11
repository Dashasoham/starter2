"use strict";


/*
function describeCountry(country, popuplation, capitalCity) {
    const sentence = `${country} has ${popuplation} million people and its capital city is ${capitalCity}`
    return sentence
}

const finland = describeCountry("Finland", 6, "Helsinki")
const ukraine = describeCountry("Ukraone", 38, "Kyiv")
const portugal = describeCountry("Portugal", 10, "Lisbon")


console.log(finland)
console.log(ukraine)
console.log(portugal)


//function declarations and expressions

const worldPopulation = 7900

function percentageOfWorld(country, population) {
    const populationByCountry = (population / worldPopulation) * 100
    const percentage = `${country}´s population is ${populationByCountry}% of the world´s population`

    return percentage
}

const chinaPopulation = percentageOfWorld("China", 1441)
const portugalPopulation = percentageOfWorld("Portugal", 10)
const ukrainePopulation = percentageOfWorld("Ukraine", 44)


console.log(chinaPopulation, portugalPopulation, ukrainePopulation)

const percentageOfTheWorld = function (country, population) {
    const populationByCountry = (population / worldPopulation) * 100
    const percentage = `${country}´s population is ${populationByCountry}% of the world´s population`

    return percentage
}


const chinaPopulation2 = percentageOfWorld("China", 1441)
const portugalPopulation2 = percentageOfWorld("Portugal", 10)
const ukrainePopulation2 = percentageOfWorld("Ukraine", 44)


console.log(chinaPopulation2, portugalPopulation2, ukrainePopulation2)


const percentageOfTheWorld3 = population => (population / 7900) * 100

//const populationCina3 = percentageOfTheWorld3(1440)
//console.log(populationChina3)

console.log(percentageOfTheWorld3(1440))
console.log(percentageOfTheWorld3(42))
console.log(percentageOfTheWorld3(10))



//Functions calling other functions

const percentageOfTheWorld = function (people) {


    return (people / 7900) * 100
}

function describePopulation(country, population) {

    const worldPercentage = percentageOfTheWorld(population)

    const percentage = `${country} has ${population} million people, which is about ${worldPercentage}% of the world`

    return percentage
}

console.log(describePopulation("China", 1441))
console.log(describePopulation("Ukraine", 43))
console.log(describePopulation("Portugal", 10))



//Introduction to arrays

// const populations = ["Ukraine", "Portugal", "India", "Canada"]
// console.log(populations.length === 4)



// const percentageOfWorld = function (population) {
//     const percentageByCountry = (population / 4700) * 100
//     return percentageByCountry
// }

// const chinaPopulation = percentageOfWorld(1441)
// const portugalPopulation = percentageOfWorld(10)
// const ukrainePopulation = percentageOfWorld(44)


// console.log(chinaPopulation)

// const percentages = [chinaPopulation, portugalPopulation, ukrainePopulation]
// console.log(percentages)

//______________

const populations = [10, 1441, 332, 83]
console.log(populations.length === 4)

const percentageOfWorld = function (population) {
    const percentageByCountry = (population / 4700) * 100
    return percentageByCountry
}

const percentages = [
    percentageOfWorld(populations[0]),
    percentageOfWorld(populations[1]),
    percentageOfWorld(populations[2]),
    percentageOfWorld(populations[3])

]
console.log(percentages)



//Basic Array Operations

const neighbours = ["Popand", "Hungary", "Slovakia", "Romania", "Moldova", "Belarus"]

neighbours.push("Utopia")
console.log(neighbours)

neighbours.pop()
console.log(neighbours)

// const includesGermany = neighbours => neighbours.includes("Germany") ? `Germany is a neighbour` : `Not central Europe`

// console.log(includesGermany)

// if (neighbours.includes("Germany")) {
//     console.log("Includes Germany")
// } else {
//     console.log("Probably not a central European country")
// }

if (!neighbours.includes("Germany")) {
    console.log("Probably not a central European country")

}

// console.log(neighbours.indexOf("Belarus"))
// console.log(neighbours[5])

// neighbours[5] = "Portugal"
// console.log(neighbours)

neighbours[neighbours.indexOf("Belarus")] = "Portugal"
console.log(neighbours)



const myCountry = {
    country: "Ukraine",
    capital: "Kyiv",
    language: "Ukrainian",
    population: 38,
    neighbours: ["Popand", "Hungary", "Slovakia", "Romania", "Moldova", "Belarus"]

}

console.log(myCountry.country)
console.log(myCountry.neighbours[3])



//LECTURE: Dot vs. Bracket Notation

const myCountry = {
    country: "Ukraine",
    capital: "Kyiv",
    language: "Ukrainian",
    population: 38,
    neighbours: ["Popand", "Hungary", "Slovakia", "Romania", "Moldova", "Belarus"]

}

console.log(`${myCountry.country} has ${myCountry.population} million ${myCountry.language}-speaking people, ${myCountry.neighbours.length} neighbouring countries and the capital is called ${myCountry.capital}`)

myCountry.population += 2
console.log(`${myCountry.country} has ${myCountry.population} million ${myCountry.language}-speaking people, ${myCountry.neighbours.length} neighbouring countries and the capital is called ${myCountry.capital}`)

myCountry["population"] -= 2
console.log(`${myCountry.country} has ${myCountry.population} million ${myCountry.language}-speaking people, ${myCountry.neighbours.length} neighbouring countries and the capital is called ${myCountry.capital}`)



//Object Methods

const myCountry = {
    country: "Ukraine",
    capital: "Kyiv",
    language: "Ukrainian",
    population: 38,
    neighbours: ["Poland", "Hungary", "Slovakia", "Romania", "Moldova", "Belarus"],
    describe: function () {

        return `${this.country} has ${this.population} million ${this.language}-speaking people, ${this.neighbours.length} neighbouring countries and the capital is called ${this.capital}`
    },
    checkIsland: function () {
        this.isIsland = this.neighbours.length === 0 ? true : false

    }

}

console.log(myCountry.describe())
myCountry.checkIsland()
// console.log(myCountry)
console.log(myCountry.isIsland)




//LOOPS

for (let voter = 1; voter <= 50; voter++) {
    console.log(`Voter number ${voter} is currently voting`)
}

______________________
LOOPING ARRAYS

const populations = [10, 1441, 332, 83]
const percentages2 = []

const percentageOfWorld = function (population) {
    const percentageByCountry = (population / 4700) * 100
    return percentageByCountry
}

for (let i = 0; i < populations.length; i++) {
    const perc = percentageOfWorld(populations[i]);
    percentages2.push(perc)

    console.log(perc)

}
console.log(percentages2)
//___________________________
//LOOPING BACKWARDS AND LOOPS IN LOOPS
*/
//?????????????????
// const listOfNeighbours = [["Canada", "Mexico"], ["Spain"], ["Norway", "Sweden", "Ukraine"]]

// // for (let i = 0; i < listOfNeighbours.length; i++) {

// //     for (let y = 0; y < listOfNeighbours[i].length; y++)
// //         console.log(`Neighbour: ${listOfNeighbours[i][y]}`)
// // }

// for (let i = 0; i < listOfNeighbours.length; i++) {
//     // for (let j = 0; j < listOfNeighbours[i].length; j++) {
//     console.log(`Neighbour: ${listOfNeighbours[i]}`)
// }
// statement for outer loop
// }

// for (let i = 1; i <= 10; i++) {
//     console.log(i)
// }


// const test = [["A", "B"],
// ["C", "D", "E"],
// ["F", "G"]];
// for (let i = 0; i < test.length; i++) {
//     //console.log("First")
//     console.log([i])

//     for (let j = 0; j < test[i].length; j++) {
//         //console.log("Second")
//         console.log([j])

//     }
// }

// test.map((firstLoopItem, firstLoopIndex) => {
//     console.log(firstLoopItem, "firstLoopIndex");
//     firstLoopItem.map((secondLoopItem, secondLoopIndex) => console.log(secondLoopItem, "secondLoopIndex"))

// })



// for (let i = 0; i < 5; i++) {
//     console.log(`The current value of i is: ${i}`)
// }
// const populations = [10, 1441, 332, 83]
// const percentages3 = []

// const percentageOfWorld = function (population) {
//     const percentageByCountry = (population / 4700) * 100
//     return percentageByCountry
// }

// let i = 0

// while (i < populations.length) {
//     const perc = percentageOfWorld(populations[i]);
//     percentages3.push(perc)
//     i++
// }
// console.log(percentages3)

// for (let i = 0; i < populations.length; i++) {
//     const perc = percentageOfWorld(populations[i]);
//     percentages3.push(perc)


// }
// console.log(percentages3)