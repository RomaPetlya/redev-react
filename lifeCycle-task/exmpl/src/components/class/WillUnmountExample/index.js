import React from 'react'

class WillUnmountExample extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      time: 0
    }
  }

  componentDidMount () {
    this.timerID = setInterval(() => {
      this.setState(prevState => ({
        time: prevState.time + 1
      }))
    }, 1000)
  }

  componentWillUnmount () {
    clearInterval(this.timerID)
    alert('Компонент удален из DOM')
  }

  render () {
    return (
      <div>
        <p>Время: {this.state.time} секунд</p>
      </div>
    )
  }
}

export default WillUnmountExample
