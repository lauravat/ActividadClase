const needle = require('needle')

const url = 'https://dinosaur-facts-api.shultzlab.com/dinosaurs'

needle('get', url, { json: true }).then((res) => {
  const dinosaurios = res.body
  dinosaurios.forEach((dinosaurio) => {
    console.log(dinosaurio)
    console.error('-----------')
  })
}).catch((err) => {
  console.error(err)
})
