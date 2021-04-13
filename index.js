let countries = []

fetch('countries.json')
    .then(countryData => countryData.json())
    .then(data => {
        countries = data
    })

document.getElementById('startButton').addEventListener('click', () => {
    if (countries.length) {
        startGame()
        getAndDisplayCountry(countries)
    }
})

document.getElementById('nextButton').addEventListener('click', (e) => {
    e.preventDefault()
    newWord()
})