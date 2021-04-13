


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