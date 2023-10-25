import React from 'react';
import './landingpage.css';
import me from '../../Assets/anani.png';
import { Link } from 'react-scroll';

const Landingpage = () => {
  return (
    <section id="landingPage">
        <div className="content">
            <span className="hello">Hello,</span>
            <span className="description"> I'm <span className="name">Anani</span> <br/> UI/UX & Graphics Desiner</span>
            <p className="introPara">
            I am a versatile professional with expertise in UI/UX and Graphics Design. With a strong foundation in design principles and technical skills, I create intuitive and visually appealing digital experiences that captivate users. 
            </p>
            <Link><button className="btn">Hire Me</button></Link>
        </div>

        <img src={ me} alt="" className="me" />
    </section>
  )
}

export default Landingpage;