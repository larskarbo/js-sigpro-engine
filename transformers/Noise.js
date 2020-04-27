const { Subject } = require("rxjs")

console.log(Subject)

const FREQUENCY = 1000

class Noise {
  constructor(props){
    
    this.source = props.source
  }

  start = () => {
    const stream = new Subject()

    this.source.subscribe(a => {
    })

    setInterval(() => {
      stream.next({
        noisy: false
      })
    }, FREQUENCY)

    return stream
  }

}

module.exports = Noise