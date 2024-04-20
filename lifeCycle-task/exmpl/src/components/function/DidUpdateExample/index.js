import React, { useState, useEffect } from 'react'

const DidUpdateExample = () => {
  const [count, setCount] = useState(0)
  const [prevCount, setPrevCount] = useState(0)

  const increment = () => setCount(count => count + 1)
  const decrement = () => setCount(count => count - 1)

  useEffect(() => {
    setPrevCount(count)
  }, [count])

  useEffect(() => {
    if (prevCount !== count) {
      alert(`Количество обновлено с ${prevCount} до ${count}`)
    }
  }, [count, prevCount])

  return (
    <div>
      <p>Количество: {count}</p>
      <button onClick={increment}>Добавить</button>
      <button onClick={decrement}>Отнять</button>
    </div>
  )
}
export default DidUpdateExample
