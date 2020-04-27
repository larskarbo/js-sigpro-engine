const { Subject } = require("rxjs")
const eegPipes = require("@neurosity/pipes")

console.log(Subject)

const FREQUENCY = 200

class Epoch {
  constructor(props) {
    this.source = props.source
  }

  start = () => {
    // this function returns a RXJS stream

    const stream = new Subject()

    this.source.pipe(
      eegPipes.epoch({ duration: 256, interval: FREQUENCY })
    ).subscribe(a => {
      stream.next(a)
    })

    return stream
  }


}

module.exports = Epoch