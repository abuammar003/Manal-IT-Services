import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Components/Header/Header';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Services from './Pages/Services/Services';
import Courses from './Pages/Courses/Courses';
import Contact from "./Pages/Contact/Contact";
import Footer from './Components/Footer/Footer';

function App() {


  return (
    <>  

    <BrowserRouter>
        <Header />
     
      <Routes>


        <Route path='/' element= {<Home />} />
        <Route path='/about' element= {<About />} />
        <Route path='/services' element= {<Services />} />
        <Route path='/courses' element= {<Courses />} />
        <Route path='/contact' element={<Contact />} />

      </Routes>

      <Footer />
    </BrowserRouter>
    </>
  )
}

export default App
