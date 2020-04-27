const { Subject } = require("rxjs")

console.log(Subject)

const FREQUENCY = 200

class Epoch {
  constructor(props) {
    this.source = props.source
  }

  start = () => {
    // this function returns a RXJS stream

    const stream = new Subject()

    this.source.subscribe(a => {
      // TODO implement epoch
      // I removed the previous epoch functionality because it
      // had some issues.
      // Better to write our own.
      
      stream.next(a)
    })

    return stream
  }


}

module.exports = Epoch