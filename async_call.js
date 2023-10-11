const request = require('request')
// url de conexion a la api rest(dinosarios)
const url = 'https://pokeapi.co/api/v2/pokemon/'
// transaccion asincronica

// eslint-disable-next-line n/handle-callback-err, no-unused-vars
const r = request(url, { json: true }, (error, response, body) => {
  if (error) {
    console.log(error)
  } else {
    const pokemones = body.results
    pokemones.forEach((pokemon) => {
      console.log(pokemon.name)
      console.log('---------------')
    })
  }
})
