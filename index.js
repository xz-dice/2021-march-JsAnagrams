let countries = []
let country
let score = {score: 0}
let timerObject = {}

fetch('countries.json')
    .then(countryData => countryData.json())
    .then(data => {
        countries = data
    })

document.getElementById('startButton').addEventListener('click', () => {
    if (countries.length) {
        startGame()
        country = getAndDisplayCountry(countries)
        timerObject = startTimer(timerObject, score)
    }
})

document.getElementById('text').addEventListener('keyup', e => {
    let correctWord = checkCorrect(country)
    displayCheckCorrect(correctWord)
    if (correctWord) {
        score = incrementScore(score)
        displayUpdatedScore(score)
        if (score.score % 5 === 0 ) {
            partyMode()
        }
        document.getElementById('nextButton').focus()
    }
})

document.getElementById('rescrumbleButton').addEventListener('click', () => {
    country = formatCountry(country)
    displayCountry(country)
    document.getElementById('text').focus()
})

document.getElementById('revealButton').addEventListener('click', () => {
    enableTextInput(false)
    enableNextButton(true)
    document.getElementById('anagram').textContent = country.name
})

document.getElementById('nextButton').addEventListener('click', () => {
    if (countries.length === 0) {
        displayGameOver(score, timerObject.interval)
    } else {
        country = newWord(countries)
        document.getElementById('text').focus()
    }
})
