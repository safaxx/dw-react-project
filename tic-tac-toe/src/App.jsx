import { useState } from 'react'
import { Board } from './TicTacToe'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Board />
    </>
  )
}

export default App
