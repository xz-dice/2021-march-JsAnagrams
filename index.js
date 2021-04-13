let countries = []

fetch('countries.json')
    .then(countryData => countryData.json())
    .then(data => {
        countries = data
    })

document.getElementById('startButton').addEventListener('click', () => {
    if(countries.length > 0)
    {
        startGame()
        getAndDisplayCountry(countries)
    }
})
