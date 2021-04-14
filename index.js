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

document.getElementById('text').addEventListener('keyup', e => {
    displayCheckCorrect(checkCorrect(country))
})

document.getElementById('revealButton').addEventListener('click', (e) => {
    e.preventDefault()
    disableTextInput()
    enableNewWordButton(true)
    document.getElementById('anagram').textContent = country.name
})

