const MockSource = require("./sources/MockSource.js")
const Epoch = require("./transformers/Epoch.js")
const Noise = require("./transformers/Noise.js")

console.log('hey')
console.log('starting session')

async function start(){

  // set up device
  const sourceDevice = new MockSource()
  const rawStream = await sourceDevice.initialize()
  
  rawStream.subscribe(a => {
    // console.log('RAW data', a)
  })

  // set up device
  const epochModule = new Epoch({source: rawStream})
  const epochStream = epochModule.start()
  
  epochStream.subscribe(a => {
    console.log('epoch data', a)
  })

  const noiseModule = new Noise({source: rawStream})
  const noiseStream = noiseModule.start()

  noiseStream.subscribe(a => {
    console.log('Noisy?', a)
  })


}

start()