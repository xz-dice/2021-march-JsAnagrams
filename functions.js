/**
 * function to get start game by hiding instructions screen & revealing main screen
 */
const startGame = () => {
    document.getElementById('instructionScreen').style.display = 'none'
    document.getElementById('mainScreen').style.display = 'block'
}

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
const formatCountry = (country) => {
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

/**
 * function to display anagram and country code to front end
 * @param {object} countryObject containing anagram and code properties
 */
const displayCountry = (countryObject) => {
    document.getElementById('anagram').textContent = countryObject.anagram
    document.getElementById('hint').textContent = countryObject.code
}

/**
 * function to get random country object from the array,
 * add the anagram property to the country object,
 * then display that country to the web page, and
 * finally return the country object
 *
 * @param countries array of country objects
 * @returns {object} the randomly selected country object with the anagram property attached to it
 */
const getAndDisplayCountry = countries => {
    let countryObject = getRandomCountry(countries)
    countryObject = formatCountry(countryObject)
    displayCountry(countryObject)
    return countryObject
}

const newWord = (countries) => {
    getAndDisplayCountry(countries)
    document.getElementById('nextButton').disabled = true
    document.querySelector('#textInput input').disabled = false
}