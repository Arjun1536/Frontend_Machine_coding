import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// import StarRating from './components/Star_print/StartRating'
import Fetch_Api from './components/Pagenation/Fetch_Api'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <StarRating /> */}
      <Fetch_Api />
    </>
  )
}

export default App
