// remove once code reviewed
const testObjectForCodeReview = {
    name: 'England',
    code: 'ENG',
    anagram: 'nldegan'
}

function displayCountry(countryObject) {
    document.getElementById('anagram').textContent = countryObject.anagram
    document.getElementById('hint').textContent = countryObject.code
}

// remove once code reviewed
displayCountry(testObjectForCodeReview)

// remove once code reviewed
console.log(testObjectForCodeReview.code)

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

