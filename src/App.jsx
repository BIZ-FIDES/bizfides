import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import AboutUs from './Pages/AboutUs'
import Resources from './Pages/Resources'
import Services from './Pages/Services'
import Signup from './Pages/Signup'
import Login from './Pages/Login'
import Dashboard from './Pages/Dashboard'
import Support from './Pages/Support'
import NotFound from './Pages/NotFound'


function App() {

  return (
    <>
    <Router>
      <Routes>
        <Route path = '/' element = {<Home/>}/>
        <Route path = '/about-us' element = {<AboutUs/>}/>
        <Route path = '/services' element = {<Services/>}/>
        <Route path = '/resources' element = {<Resources/>}/>
        <Route path = '/support' element = {<Support/>}/>
        <Route path = '/signup' element = {<Signup/>}/>
        <Route path = '/login' element = {<Login/>}/>
        <Route path = '/*' element = {<NotFound/>}/>
        <Route path = '/dashboard' element = {<Dashboard/>}/>
      </Routes>
    </Router>  
    </>
  )
}

export default App
