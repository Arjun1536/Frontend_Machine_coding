import { lazy, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// import StarRating from './components/Star_print/StartRating'
import Fetch_Api from './components/Pagenation/Fetch_Api'
import Search from './components/Search_bar/Search'
import SearchbyAPI from './components/Search_bar/SearchbyAPI'
//import Grid_layout from './components/Grid_layout/Grid_layout'
import {OtpCheck }from './components/OTP_validation/OtpCheck'
import Counter from './components/Redux/Counter'
import { Routes,Route } from 'react-router-dom'
import Contact from './components/Lazy_Loading_RR/Contact'
import Home from './components/Lazy_Loading_RR/Home'
import Navbar from './components/Lazy_Loading_RR/Navbar'
import InfiniteLoading from './components/Infinite_Loading/InfiniteLoading'

 const About = lazy(()=>import ('./components/Lazy_Loading_RR/About' ))  // using lazy loading
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <StarRating /> */}
      {/* <Fetch_Api /> */}
      {/* <Search /> */}
      {/* <SearchbyAPI/> */}
      {/* <Grid_layout/> */}
      {/* <OtpCheck /> */}
      {/* <Counter />
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/about' element = {<About />}/>
        <Route path='/contact' element={<Contact />}/>
      </Routes> */}
      <InfiniteLoading />
    </>
  )
}

export default App
