let countries = []
let country
let score = 0
let timer = 0
let timerInterval

// fetch('countries.json')
//     .then(countryData => countryData.json())
//     .then(data => {
//         countries = data
//     })

document.getElementById('startButton').addEventListener('click', () => {
    if (countries.length) {
        startGame()
        country = getAndDisplayCountry(countries)
    }
})

document.getElementById('text').addEventListener('keyup', e => {
    let correctWord = checkCorrect(country)
    displayCheckCorrect(correctWord)
    if (correctWord) {
        score = incrementScore(score)
        displayUpdatedScore(score)
        if (score % 5 === 0 ) {
            partyMode()
        }
    }
})

document.getElementById('revealButton').addEventListener('click', () => {
    enableTextInput(false)
    enableNextButton(true)
    document.getElementById('anagram').textContent = country.name
})

document.getElementById('nextButton').addEventListener('click', () => {
    if (countries.length === 0) {
        document.getElementById('mainScreen').style.display = 'hide'
        document.getElementById('displayGameOver').style.display = 'block'
    }
    country = newWord(countries)
})

//testing function

fetch('testcountries.json')
    .then(countryData => countryData.json())
    .then(data => {
        countries = data
    })