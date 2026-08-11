import "./Hero.css";
// import heroImage from "../../assets/hero-image.png"; // Import your hero image
import heroImage from "../../assets/manalIT-Hero-Image.webp"; // Import your hero image
import { IoIosStarOutline } from "react-icons/io";


function Hero() {
  return (
    <div className="hero">
 

        <div className='hero_text'>
            <span className="tag"> <IoIosStarOutline /> Learn, Build, Grow</span>
            <h1>Build Your Future with Practical IT Skills </h1>
            <h3>Manal IT provides industry-focused courses and hands-on training that help learners develop real-world technology skills — from frontend and backend to full stack, DevOps, design, and animation.</h3>
                <button className="hero_btn">Contact Now</button>
        </div>

        <div className='hero_img'>
            <img src={heroImage} alt='Manal_IT_Image'/>
        </div>
        
        </div>
  )
}

export default Hero


