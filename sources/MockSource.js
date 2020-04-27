const { Subject } = require("rxjs")

console.log(Subject)

const FREQUENCY = 1000/250

class MockSource {
  constructor(){

  }

  initialize = async () => {
    // this function returns a RXJS stream

    const stream = new Subject()

    setInterval(() => {
      stream.next({
        data: [Math.random(), Math.random(), Math.random(), Math.random()],
        timestamp: new Date()
      })
    }, FREQUENCY)

    return stream
  }

}

module.exports = MockSource