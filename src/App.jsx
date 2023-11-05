import { useState } from 'react'
import './App.css'
import { CounterComp } from './components/counter/counter'

function App() {
  const [count, setCount ] = useState(0)
  return (
    <div className='App'>
      <CounterComp/>
    </div>
  )
}

export default App
