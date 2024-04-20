import React, { useState, useEffect } from 'react'

const WillUnmountExample = () => {
  const [time, setTime] = useState(0)

  useEffect(() => {
    const timerID = setInterval(() => {
      setTime(prevTime => prevTime + 1)
    }, 1000)

    return () => {
      clearInterval(timerID)
      alert('Компонент удален из DOM')
    }
  }, [])

  return (
    <div>
      <p>Время: {time} секунд</p>
    </div>
  )
}

export default WillUnmountExample
