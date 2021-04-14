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

document.getElementById('revealButton').addEventListener('click', () => {
    document.getElementById('anagram').textContent = country.name
    enableNewWordButton(true)
})
