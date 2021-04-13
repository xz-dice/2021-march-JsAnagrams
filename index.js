fetch('countries.json')
    .then(countryData => countryData.json())
    .then(data => {
        console.log(data)

    })


document.getElementById('startButton').addEventListener('click', () => {
    startGame()
    //displayCountry(countries)
})
