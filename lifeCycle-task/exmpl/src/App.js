import React from 'react'

import DidMountExample from './components/class/DidMountExample'
import DidUpdateExample from './components/class/DidUpdateExample'
import WillUnmountExample from './components/class/WillUnmountExample'

import DidMountExampleFn from './components/function/DidMountExample'
import DidUpdateExampleFn from './components/function/DidUpdateExample'
import WillUnmountExampleFn from './components/function/WillUnmountExample'

import ErrorBoundaryExample from './components/ErrorBoundary.js'
import ComponentWithError from './components/ComponentWithError.js'

import './App.css'

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      showTimer: false,
      showTimerFn: false
    }
    this.toggleTimer = this.toggleTimer.bind(this)
    this.toggleTimerFn = this.toggleTimerFn.bind(this)
  }

  toggleTimer () {
    // переключатель для классовой компоненты
    this.setState(prevState => ({
      showTimer: !prevState.showTimer
    }))
  }

  toggleTimerFn () {
    // переключатель для функциональной компоненты
    this.setState(prevState => ({
      showTimerFn: !prevState.showTimerFn
    }))
  }

  render () {
    return (
      <>
        <div className='container'>
          <div className='centeredDiv'>
            <div className='content'>
              {/* тут будут классовые компоненты */}

              <h1> DidMountExample (class)</h1>
              <DidMountExample />
              <h1> DidUpdateExample (class)</h1>
              <DidUpdateExample />
              <h1> WillUnmountExample (class)</h1>
              <button onClick={this.toggleTimer}>Переключатель таймера</button>
              {this.state.showTimer && <WillUnmountExample />}
            </div>
          </div>

          <div className='centeredDiv'>
            <div className='content'>
              {/* тут будут функциональные компоненты */}

              <h1> DidMountExample (function)</h1>
              <DidMountExampleFn />
              <h1> DidUpdateExample (function)</h1>
              <DidUpdateExampleFn />

              <h1> WillUnmountExample (function)</h1>
              <button onClick={this.toggleTimerFn}>
                Переключатель таймера
              </button>
              {this.state.showTimerFn && <WillUnmountExampleFn />}
            </div>
          </div>
        </div>

        <h1>Пример использования ErrorBoundary</h1>
        <ErrorBoundaryExample>
          {/* ТВОЙ компонент с возможной ошибкой */}
          <ComponentWithError />
        </ErrorBoundaryExample>
      </>
    )
  }
}

export default App
