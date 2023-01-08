
"use strict";
/*
let hasDriversLicense = false
const passTest = true

if (passTest) hasDriverLicense = true
if (hasDriversLicense) console.log("I can drive")


//reserved words
// const interface="Audio"
// const private = 32


function logger() {
    console.log("My name is Dasha")
}
//calling, running or invoking the function
logger()
logger()

function fruitProcessor(apples, oranges) {
    //console.log(apples, oranges)
    const juice = `Juice with ${apples} apples and ${oranges} oranges`
    return juice
}
const appleJuice = fruitProcessor(5, 0)
console.log(appleJuice)

const appleOrangeJuice = fruitProcessor(2, 4)
console.log(appleOrangeJuice)

//function declaration

const age1 = calcAge1(1991)

function calcAge1(birthYear) {
    return 2037 - birthYear
}

console.log(age1)


//function expressions, anonymous function
const calcAge2 = function (birthYear) {
    return 2037 - birthYear

}

const age2 = calcAge2(1991)
console.log(age1, age2)





const calcAge3 = birthYear => 2037 - birthYear

//const age3 = calcAge3(1991)
//console.log(age3)

console.log(calcAge3(1991))

const yearsUntilRet = (birthYear, firstName) => {
    const age = 2037 - birthYear
    const retirement = 65 - age
    //return retirement
    return `${firstName} retires in ${retirement} years `
}

console.log(yearsUntilRet(1991, "John"))
console.log(yearsUntilRet(1980, "Bob"))



//Functions calling other functions
function cutFruitPieces(fruit) {
    return fruit * 4
}


function fruitProcessor(apples, oranges) {
    //console.log(apples, oranges)

    const applePieces = cutFruitPieces(apples)
    const orangePieces = cutFruitPieces(oranges)

    const juice = `Juice with ${applePieces} apples and ${orangePieces} oranges`
    return juice
}

console.log(fruitProcessor(2, 3))


//Reviewing functions

const calAge = function (birthYear) {
    return 2037 - birthYear
}

const yearsUntilRet = function (birthYear, firstName) {

    const age = calAge(birthYear)
    const retirement = 65 - age

    if (retirement > 0) {
        console.log(`${firstName} retires in ${retirement} years`)
        return retirement
    }
    else {
        console.log(`${firstName} has already retired`)
        return -1
    }
}
//return retirement
//return `${firstName} retires in ${retirement} years `

console.log(yearsUntilRet(1991, "Dasha"))
console.log(yearsUntilRet(1950, "Mike"))



//Introduction to arrays

const friend1 = "Michael"
const friend2 = "Steven"
const friend3 = "Peter"

//1(literal syntax) more usual
const friends = ["Michael", "Steven", "Peter"]
console.log(friends)

//2
const years = new Array(1991, 1982, 2020, 2029)
console.log(years)

console.log(friends[0])

console.log(friends.length)

//the last element in the array
console.log(friends[friends.length - 1])

//mutating array7changing elements

friends[2] = "Jay"
console.log(friends)

//Cannot mutate the whole array
//friends = ["Bob", "Alice"]

const firstName = "Dasha"
const dasha = [firstName, "K", 2023 - 1991, "teacher", friends]
console.log(dasha)

//Excercise
const calcAge = function (birthYear) {
    return 2023 - birthYear
}

const year = [1990, 1967, 2002, 2010, 2018]
//cannot do
//console.log(calcAge(year))

const age1 = calcAge(year[0])
const age2 = calcAge(year[1])
const age3 = calcAge(year[year.length - 1])

console.log(age1, age2, age3)
const ages = [calcAge(year[0]), calcAge(year[1]), calcAge(year[year.length - 1])]

console.log(ages)

*/