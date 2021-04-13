
//hides the main menu and shows the main game screen.
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
 * function to get random country object from the array,
 * add the anagram property to the country object,
 * then display that country to the web page, and
 * finally return the country object
 *
 * @param countries array of country objects
 * @returns {object} the randomly selected country object with the anagram property attached to it
 */
const getAndDisplayCountry = countries => {
    countryObject = getRandomCountry(countries)
    countryObject = formatCountry(countryObject)
    displayCountry(countryObject)
    return countryObject
}