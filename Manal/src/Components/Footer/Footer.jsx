import "./Footer.css";
import { RiGraduationCapFill } from "react-icons/ri"; 

 

function Footer() {

    const aboutLinks = ['About Us', 'Courses', 'Services', 'Contact'];

  return (
    <footer className='footer'> 


            <div className="info-footer">
                <h1 className='logo'> <RiGraduationCapFill className='hdrLogo'/> Manal <span> IT </span> </h1>
                <p className="description">An educational institute and IT training center helping students, freshers, and aspiring developers build practical skills and launch careers in technology.</p>
            </div>
            
        <div className="menus">


            <div className="about-links">
                <h3>Usefull Links</h3>
                <ul>
                    {aboutLinks.map(link => <li key={link}>{link}</li>)}
                </ul>
            </div>

            <div className="footer-contact">
              <h3>Contact</h3>
              <p>Phone: (123) 456-7890</p>
              <p>Email: info@manalit.com</p>  
              <p>Address: Apna Super Market, Malegaon, India. </p>
            </div>

        </div>

        <div className="footer-bottom">
            <p>&copy; {new Date().getFullYear()} Manal IT. All rights reserved.</p>
        </div>

    </footer>
  );

};

export default Footer;