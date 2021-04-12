fetch('countries.json')
    .then(countryData => countryData.json())
    .then(data => {
        console.log(data)
    })