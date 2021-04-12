fetch('countryData.json')
    .then(response => countryData.json())
    .then(data => {
        console.log(data)
    })})