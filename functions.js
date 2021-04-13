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

/**
 * function to add a new property to a country object containing a lowercase anagram of the country name
 * @param country object containing a country name & country code
 * @returns {object} a country object containing a lowercase anagram of the country name
 */
let formatCountry = (country) => {
    country.anagram = country.name
    let lowercaseSplitCountry = country.anagram.toLowerCase().split('')

    // Shuffling array
    for (let currentIndex = lowercaseSplitCountry.length - 1; currentIndex > 0; currentIndex--) {
        let randomIndex = Math.floor(Math.random() * (currentIndex + 1))
        let tempValue = lowercaseSplitCountry[currentIndex]
        lowercaseSplitCountry[currentIndex] = lowercaseSplitCountry[randomIndex]
        lowercaseSplitCountry[randomIndex] = tempValue
    }

    country.anagram = lowercaseSplitCountry.join('')

    return country
}