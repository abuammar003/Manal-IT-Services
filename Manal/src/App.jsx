import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Components/Header/Header';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Services from './pages/Services/Services';
import Courses from './pages/Courses/Courses';
import Contact from "./pages/Contact/Contact";
import Footer from './Components/Footer/Footer';
import ScrollToTop from './Components/ScrollToTop/ScrollToTop';

function App() {
 
   
  return (
    <>  

    <BrowserRouter>
    
        <ScrollToTop />

        <Header />
     
      <Routes>

        <Route path='/' element= {<Home />} />
        <Route path='/about' element= {<About />} />
        <Route path='/courses' element= {<Courses />} />
        <Route path='/services' element= {<Services />} />
        <Route path='/contact' element={<Contact />} />

      </Routes>

      <Footer />
    </BrowserRouter>
    </>
  )
}

export default App
