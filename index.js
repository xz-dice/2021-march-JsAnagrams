let countries = []
let country

fetch('countries.json')
    .then(countryData => countryData.json())
    .then(data => {
        countries = data
    })

document.getElementById('startButton').addEventListener('click', () => {
    if (countries.length) {
        startGame()
        country = getAndDisplayCountry(countries)
    }
})

document.getElementById('textInput').addEventListener('keyup', e => {
    displayCheckCorrect(checkCorrect(country))
})

