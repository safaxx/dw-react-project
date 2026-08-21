import { useState } from 'react'
import './App.css'
import Profile from './UseStateEg'
import { ToggleApp } from './ToggleApp'
import { ColorPicker } from './ColorPicker'
import Counter from './UseEffectEg'
import { FruitSearch } from './FruitSearch'
import { CurrencyConverter } from './CurrencyConverter'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* <Profile /> */}
    {/* <br/>
    <ToggleApp />
    <br/>
    <ColorPicker />
    <Counter />
     <br/> */}
     {/* <FruitSearch /> */}
     <CurrencyConverter />
    </>
  )
}

export default App
