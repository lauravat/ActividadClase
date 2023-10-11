const axios = require('axios')
const options = {
  method: 'GET',
  url: 'https://razas-de-perros.p.rapidapi.com/TypeOfBreeds',
  headers: {
    'X-RapidAPI-Key': 'SIGN-UP-FOR-KEY',
    'X-RapidAPI-Host': 'razas-de-perros.p.rapidapi.com'
  }
}
axios.get(options.url).then((res) => {
  res.data.forEach((element) => {
    console.log(element)
    console.error('-----------')
  })
}).catch((err) => {
  console.error(err)
})
