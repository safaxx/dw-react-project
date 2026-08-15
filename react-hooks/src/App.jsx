import { useState } from 'react'
import './App.css'
import Profile from './UseStateEg'
import { ToggleApp } from './ToggleApp'
import { ColorPicker } from './ColorPicker'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Profile />
    <br/>
    <ToggleApp />
    <br/>
    <ColorPicker />
    </>
  )
}

export default App
