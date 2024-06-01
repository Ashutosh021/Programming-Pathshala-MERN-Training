import React from 'react'
import Navbar from './pages/Navbar'
import Hnavbar from './pages/Hnavbar'
import Home from './pages/Home'
import Products from './pages/Products'
import SearchPage from './pages/SearchPage'
import Footer from './pages/Footer'
import { BrowserRouter as Router,Routes,Route} from 'react-router-dom'


import './app.css'
const App = () => {
  return (
    <Router>
        <Navbar/>
        <Hnavbar/>
      <Routes>
        <Route path='/' element=<Home />>Home</Route>
        <Route path='/products' element=<Products/>>Products</Route>
        <Route path='/search' element=<SearchPage/>>Search</Route>
      </Routes>
      <Footer />
    </Router>
  )
}

export default App