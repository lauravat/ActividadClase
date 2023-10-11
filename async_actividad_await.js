const axios = require('axios')
const url = 'https://api.escuelajs.co/api/v1/categories'
async function leerProductos () {
  const respuesta = await axios.get(url)
  respuesta.data.forEach(element => {
    console.log(element.name)
    console.log('++++++++')
  })
}
leerProductos()
