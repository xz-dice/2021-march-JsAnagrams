let countries = []

fetch('countries.json')
    .then(countryData => countryData.json())
    .then(data => {
        countries = data
        document.getElementById('startButton').addEventListener('click', () => {
            startGame()
            //displayCountry(countries)
        })
    })

