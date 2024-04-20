import React from 'react'

class DidUpdateExample extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      count: 0
    }
    this.increment = this.increment.bind(this)
    this.decrement = this.decrement.bind(this)
  }

  increment () {
    this.setState(prevState => ({
      count: prevState.count + 1
    }))
  }

  decrement () {
    this.setState(prevState => ({
      count: prevState.count - 1
    }))
  }

  componentDidUpdate (prevProps, prevState) {
    // Если предыдущее значение count из стейта не равно текущему
    if (prevState.count !== this.state.count) {
      alert(`Количество обновлено с ${prevState.count} до ${this.state.count}`)
    }
  }

  render () {
    return (
      <div>
        <p>Количество: {this.state.count}</p>
        <button onClick={this.increment}>Добавить</button>
        <button onClick={this.decrement}>Отнять</button>
      </div>
    )
  }
}

export default DidUpdateExample
