import './App.css'
import { Navbar } from './components/Navbar'
import { HomePage } from './components/HomePage'
import { Footer } from './components/Footer'
import { Copyright } from './components/Copyright'
import { Routes, Route } from 'react-router-dom'
import { Service } from './components/Service'
import { Portfolio } from './components/Portfolio'
import { ContactUs } from './components/ContactUs'
import { Values } from './components/Values'
import { RequestQuote } from './components/RequestQuote'
import { ProjectDetail } from './components/ProjectDetail'
function App() {
  return (<>
    <Navbar />

    <Routes>
      <Route
        path='/'
        element={<HomePage />}
      />
      <Route
        path='/service'
        element={<Service />}

      />
      
      <Route
        path='/contactus'
        element={<ContactUs />}

      />
      <Route
        path='/values'
        element={<Values/>}

      />
      <Route
        path='/requestQuote'
        element={<RequestQuote/>}

      />
      <Route
        path='/portfolio'
        element={<Portfolio />}

      />
      <Route
        path='/portfolio/:projectid'
        element={<ProjectDetail/>}

      />

      
    </Routes>

    <Footer />
    <Copyright />
  </>
  )
}
export default App
