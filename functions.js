/**
 * function to get random country object from the array
 * removing that country from the array
 * @param countries array of country objects
 * @returns {object} a random country object
 */
const getRandomCountry = (countries) => {
    const randomIndex = Math.floor(Math.random() * countries.length)
    return countries.splice(randomIndex, 1)[0]
}


//split the random country into individual characters
let country = 'India';

let formatCountry = () => {
    let lowercaseSplitCountry = country.toLowerCase().split('');

    // Shuffling array
    for (let currentIndex = lowercaseSplitCountry.length - 1; currentIndex > 0; currentIndex--) {
        let randomIndex = Math.floor(Math.random() * (currentIndex + 1));
        let tempValue = lowercaseSplitCountry[currentIndex];
        lowercaseSplitCountry[currentIndex] = lowercaseSplitCountry[randomIndex];
        lowercaseSplitCountry[randomIndex] = tempValue;
    }
    
    return lowercaseSplitCountry.join()
}

console.log(formatCountry());