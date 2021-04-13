// let countries = [
//     'india',
//     'iceland',
//     'united kingdom',
//     'japan',
//     'spain'
// ]

//export version
// const countries = () => {
//     console.log(countries.length) // Output: 5
// //create a random number to start to select a country
//     let getRandomNumber = Math.floor(Math.random() * countries.length)
//     console.log(getRandomNumber)
// }
// export { countries }
//=================================================================================

//refactored version
//create an array with fake list of countries

const countries = [
    'india',
    'iceland',
    'united kingdom',
    'japan',
    'spain'
];

console.log(countries.length); // Output: 5
//create a random number to start to select a country
const getRandomNumber = Math.floor(Math.random() * countries.length);
console.log(getRandomNumber);
//select one country from the array at random
console.log(countries[getRandomNumber]);