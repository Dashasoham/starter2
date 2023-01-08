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

*/

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