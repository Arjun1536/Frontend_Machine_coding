import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// import StarRating from './components/Star_print/StartRating'
import Fetch_Api from './components/Pagenation/Fetch_Api'
import Search from './components/Search_bar/Search'
import SearchbyAPI from './components/Search_bar/SearchbyAPI'
import Grid_layout from './components/Grid_layout/Grid_layout'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <StarRating /> */}
      {/* <Fetch_Api /> */}
      {/* <Search /> */}
      {/* <SearchbyAPI/> */}
      <Grid_layout/>
    </>
  )
}

export default App
