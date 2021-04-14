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

/**
 * function to check user input against original country name, changing both to lower case
 *
 * @param {object} country containing name property
 *
 * @return bool if input = country.name
 */
const checkCorrect = (country) => {
    let input = document.getElementById("text").value.toLowerCase()
    let lowercaseCountry = country.name
    lowercaseCountry = lowercaseCountry.toLowerCase()
    return (input === lowercaseCountry)
}

/**
 * function to change display from red cross to green tick if checkCorrect is true
 *
 * @param checkCorrect which if true will trigger function
 */
const displayCheckCorrect = (checkCorrect) => {
    if (checkCorrect) {
        document.getElementById('cross').textContent = 'check_circle'
        document.getElementById('cross').style.color = 'green'
        disableTextInput(true)
        enableNewWordButton(true)
    }
}

/**
 * function to disable text input
 * default functionality disables text input
 * @param {boolean} boolean if true, disables text input and if false enables text input
 */

const disableTextInput = (boolean= true) => {
    document.getElementById('text').disabled = boolean
}
/**
 * function to enable or disable the next button
 * @param {boolean} enabled if true the next button is enabled otherwise disabled
 */
const enableNewWordButton = (enabled) => {
    document.getElementById('nextButton').disabled = !enabled
}

