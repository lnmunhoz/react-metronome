import React from 'react'
import ReactDOM from 'react-dom'
export default class App extends React.Component {
  constructor() {
    super()
    this.state = {
      bpm: 60
    }
    this.audio = new Audio('songs/tick.mp3')

    this.onChangeBPM = this.onChangeBPM.bind(this)
    this.play = this.play.bind(this)
    this.stop = this.stop.bind(this)
  }

  stop() {
    clearInterval(this.timer)
  }

  play() {
    this.audio.play()
    this.timer = setInterval(() => {
      this.audio.play()
    }, 60000 / this.state.bpm)
  }

  onChangeBPM() {
    let bpm = ReactDOM.findDOMNode(this.refs.bpm).value
    this.setState({
      bpm
    })

    clearInterval(this.timer)
    this.play()
  }

  render() {
    return (
      <div>
      <button onClick={this.play}> Play </button>
      <button onClick={this.stop}> Stop </button>
      <input
        type="range"
        min="40"
        max="100"
        ref="bpm"
        step="1"
        onChange={this.onChangeBPM}/> {this.state.bpm}
      </div>

    )
  }
}
