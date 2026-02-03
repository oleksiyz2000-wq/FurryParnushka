import { useState } from 'react'
import './App.css'
import Header from './components/Header/header.jsx'

export default function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header></Header>
    </>
  )
}
