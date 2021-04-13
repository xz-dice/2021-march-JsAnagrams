let countries = []

fetch('countries.json')
    .then(countryData => countryData.json())
    .then(data => {



        countries = data
    })

