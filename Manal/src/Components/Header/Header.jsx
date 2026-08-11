import { useState } from 'react';
import "./Header.css";
import LogoImage from "../../assets/manal_logo_Manalit.svg";
import ManalLogo from "../../assets/manal_logo.svg";
import { Link } from 'react-router-dom';
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
        {/* Text Logo */}
        {/* <h1 className='logo'> <RiGraduationCapFill className='hdrLogo'/> Manal <span> IT </span> </h1> */}

        {/* Image Logo */}
        <div className="logo">
          <img src={ManalLogo} alt='Manal' className='manal-logo' />
          <img src={LogoImage} alt='Logo'  className='logo-image' /> 
        </div>

        <nav className={`nav_links ${showNav ? "show" : ""}`} onClick={() => {setShowNav(false)}}> 
            <ul>
              

                <li><Link to="/" className='link'> Home </Link></li>
                <li><Link to="/about" className='link'> About </Link></li>
                <li><Link to="/courses" className='link'> Courses </Link></li>
                <li><Link to="/services" className='link'> Services </Link></li>
                <li><Link to="contact" className='link'> Contact </Link></li>
            </ul>
          </nav>

            <button className='menuIcon' onClick={toggleMenu}>{ showNav ? <RxCross2 /> : <IoMenu /> }</button>
            
    </div>
    </header>
  )
}

export default Header;