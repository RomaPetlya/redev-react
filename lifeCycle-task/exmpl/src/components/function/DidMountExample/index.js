import React, { useState, useEffect } from 'react'
import axios from 'axios'

const DidMountExample = () => {
  const [apiState, setApiState] = useState({
    data: null,
    loading: true,
    error: null
  })

  const fetchData = async () => {
    try {
      const response = await axios.get(process.env.REACT_APP_URL)
      setApiState({
        data: response.data,
        loading: false,
        error: null
      })
    } catch (error) {
      setApiState({
        data: null,
        loading: false,
        error: error
      })
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  if (apiState.loading) {
    return <div>Загрузка...</div>
  }

  if (apiState.error) {
    return <div>Ошибка: {apiState.error.message}</div>
  }

  return (
    <div>
      <h3>{apiState.data.name}👇🏻</h3>
      <img
        src={apiState?.data?.sprites?.other?.dream_world?.front_default}
        alt={apiState?.data?.name}
      />
    </div>
  )
}

export default DidMountExample
