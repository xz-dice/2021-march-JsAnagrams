let countries = [
    'india',
    'iceland',
    'united kingdom',
    'japan',
    'spain'
];
console.log(countries.length); // Output: 5
//create a random number to start to select a country
let getRandomNumber = Math.floor(Math.random() * countries.length);
console.log(getRandomNumber);