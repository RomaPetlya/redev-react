import React from 'react'
import axios from 'axios'

class DidMountExample extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      data: null,
      loading: true,
      error: null
    }
  }

  componentDidMount () {
    axios
      .get(process.env.REACT_APP_URL)
      .then(response => {
        this.setState({ data: response.data, loading: false })
      })
      .catch(error => {
        this.setState({ error: error, loading: false })
      })
  }

  render () {
    const { data, loading, error } = this.state

    if (loading) {
      return <div>Загрузка...</div>
    }

    if (error) {
      return <div>Ошибка: {error.message}</div>
    }

    return (
      <div>
        <h3>{data.name}👇🏻</h3>
        <img
          src={data?.sprites?.other?.dream_world?.front_default}
          alt={data.name}
        />
      </div>
    )
  }
}

export default DidMountExample
