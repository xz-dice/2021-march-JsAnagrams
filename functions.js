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
        for (let i = lowercaseSplitCountry.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            let temp = lowercaseSplitCountry[i];
            lowercaseSplitCountry[i] = lowercaseSplitCountry[j];
            lowercaseSplitCountry[j] = temp;
        }
        return lowercaseSplitCountry.join()
}

console.log(formatCountry());