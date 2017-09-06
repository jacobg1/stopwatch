import React, { Component } from 'react'
import './Stopwatch.css'

class Stopwatch extends Component {
  constructor (props) {
    super(props)
    this.state = {
      time: 0
    }
  }
  handleStartButton () {
    console.log('start clicked')
    this.startWatch = setInterval(function () {
      this.setState({
        time: this.state.time + 1
      })
    }.bind(this), 1000)
  }
  handleResetButton () {
    this.setState({
      time: 0
    })
    clearInterval(this.startWatch)
  }
  handlePauseButton () {
    clearInterval(this.startWatch)
  }
  render () {
    return (
      <div className='stopwatch'>
        <h1>{this.state.time}</h1>
        <div className='controls'>
          <button onClick={() => this.handleResetButton()}>Reset</button>
          <button onClick={() => this.handleStartButton()}>Start</button>
          <button onClick={() => this.handlePauseButton()}>Pause</button>
        </div>
      </div>
    )
  }
}

export default Stopwatch
