import "./Footer.css";
import { RiGraduationCapFill } from "react-icons/ri"; 



function Footer() {

    const aboutLinks = ['About Us', 'Contact Us', 'Careers', 'Press', 'Corporate Info'];

    const helpLinks = ['Payments', 'Shipping', 'Cancellations', 'FAQs', 'Report'];

    const policyLink = ['Terms f Use', 'Security', 'Privecy', 'Sitemap', 'Compliance'];

  return (
    <footer className='footer'>
        <div className="menus">
            <div className="info-footer">
                <h1 className='logo'> <RiGraduationCapFill className='hdrLogo'/> Manal <span> IT </span> </h1>
                <p className="description">An educational institute and IT training center helping students, freshers, and aspiring developers build practical skills and launch careers in technology.</p> 
            </div>
        </div>


    </footer>
  );

};

export default Footer;