import React from 'react';
import me from '../../Assets/anani.png';
import { Link } from 'react-scroll';

const Landingpage = () => {
  return (
    <section id="landingPage" className="h-[calc(100vh-4rem)] w-full max-w-5xl mx-auto relative">
      <div className="flex flex-col justify-center h-full w-full p-4 md:p-8 text-3xl font-bold">
        <span className="text-2xl font-light">Hello,</span>
        <span className="mt-2 text-lg md:text-3xl">
          I'm <span className="text-[#FF5213]">Anani</span> <br/> UI/UX & Graphics Designer
        </span>
        <p className="text-sm font-light mt-4 max-w-md md:max-w-2xl">
          I am a versatile professional with expertise in UI/UX and Graphics Design. With a strong foundation in design principles and technical skills, I create intuitive and visually appealing digital experiences that captivate users.
        </p>
        <Link to="contact" smooth={true} duration={500}>
          <button className="bg-white text-lg mt-4 p-2 px-6 text-[#FF5213] rounded-3xl hover:bg-[#FF5213] hover:text-white transition-all">
            Hire Me
          </button>
        </Link>
      </div>

      <img 
        src={me} 
        alt="Anani" 
        className="absolute top-[-4rem] right-0 z-[-1] h-[calc(100vh+4rem)] object-cover" 
      />
    </section>
  )
}

export default Landingpage;
