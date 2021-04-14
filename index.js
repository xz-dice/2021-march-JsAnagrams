let countries = []
let currentCountryObject = {}

fetch('countries.json')
    .then(countryData => countryData.json())
    .then(data => {
        countries = data
    })

document.getElementById('startButton').addEventListener('click', () => {
    if (countries.length) {
        startGame()
        currentCountryObject = getAndDisplayCountry(countries)
    }
})

document.getElementById('revealButton').addEventListener('click', () => {
    document.getElementById('anagram').textContent = currentCountryObject.name
    enableNewWordButton(true)
})
