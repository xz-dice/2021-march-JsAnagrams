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

document.getElementById('reveal').addEventListener('click', (e) => {
    e.preventDefault()
    disableTextInput()
})