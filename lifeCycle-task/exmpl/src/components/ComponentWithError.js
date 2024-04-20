import React, { useState } from 'react'

const ComponentWithError = () => {
  const [throwError, setThrowError] = useState(false)

  const handleClick = () => setThrowError(presState => !presState.throwError)

  if (throwError) {
    // Имитация ошибки
    throw new Error('Это ошибка в компоненте ComponentWithError')
  }

  return (
    <div>
      <h3>Компонент с возможной ошибкой</h3>
      <button onClick={() => handleClick()}>Генерировать ошибку</button>
    </div>
  )
}

export default ComponentWithError
