import { useState } from 'react';
import "./Header.css";
// import { Link } from 'react-router-dom';
import { IoMenu } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import { RiGraduationCapFill } from "react-icons/ri"; 

const Header = () => {
    const [showNav, setShowNav] = useState(false);

    function toggleMenu() {
      setShowNav((prev) => !prev);
      return;
    }

  return (
    <header className="nav">
    <div className='nav_main'>
        <h1> <RiGraduationCapFill className='hdrLogo'/> Manal <span> IT </span> </h1>

        <nav className={`nav_links ${showNav ? "show" : ""}`} onClick={() => {setShowNav(false)}}> 
            <ul>
                <li><a href="#home" className='link'> Home </a></li>
                <li><a href="#skill" className='link'> About </a></li>
                <li><a href="#projects" className='link'> Courses </a></li>
                <li><a href="#about" className='link'> Services </a></li>
                <li><a href="#contact" className='link'> Contact </a></li>

                {/* <li><Link to="home" className='link'> Home </Link></li>
                <li><Link to="skill" className='link'> Skills </Link></li>
                <li><Link to="projects" className='link'> Projects </Link></li>
                <li><Link to="about" className='link'> About </Link></li>
                <li><Link to="contact" className='link'> Contact </Link></li> */}
            </ul>
          </nav>

            <button className='menuIcon' onClick={toggleMenu}>{ showNav ? <RxCross2 /> : <IoMenu /> }</button>
            
    </div>
    </header>
  )
}

export default Header;