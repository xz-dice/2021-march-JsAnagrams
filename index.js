fetch('countries.json')
    .then(countryData => countryData.json())
    .then(data => {
        console.log(data)
    })




document.getElementById('test').addEventListener('click',startGame)
