import React from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub } from 'react-icons/fa';

import { Link, useNavigate } from 'react-router-dom';
const Footer = () => {
  const navigate = useNavigate();
  const handleScroll = (scrollTo) => {
    navigate('/');
    setTimeout(() => {
      const element = document.getElementById(scrollTo);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100); // Adjust the timeout as needed
  };

  return (
    <footer className="bg-gray-800 text-white pt-14 pb-4 px-3">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="mb-6 md:mb-0 text-center">
          <h2 className="text-2xl font-bold mb-4">Quick Links</h2>
          <ul>
            <li className="mb-2"><a onClick={handleScroll} href="/" className="hover:underline text-center">Home</a></li>
            <li className="mb-2"><a onClick={handleScroll} href="#about" className="hover:underline text-center">About</a></li>
            <li className="mb-2"><a onClick={handleScroll} href="#Skills" className="hover:underline text-center">Skills</a></li>
            <li className="mb-2"><a onClick={handleScroll} href="#contact" className="hover:underline text-center">Contact</a></li>
            <li className="mb-2"><a onClick={handleScroll} href="/projects" className="hover:underline text-center">Projects</a></li>
          </ul>
        </div>
        <div className="mb-6 md:mb-0 ">
          <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
          <p className="mb-2 cursor-pointer"><FaEnvelope className="text-2xl text-center" />
          <Link to={'mailto:alikhan9327224@gmail.com'} className="mt-2 text-center hover:underline hover:decoration-black transition duration-3 ease underline decoration-white" target="_blank" rel="noopener noreferrer" >alikhan9327224@gmail.com</Link></p>
          <p className="mb-2 cursor-pointer"><FaPhone className="text-2xl text-center"/><Link to={'tel:+923429327224'} className=" mt-2 text-center hover:underline hover:decoration-black transition duration-3 ease underline decoration-white" target="_blank" rel="noopener noreferrer" >+92 342 9327 224</Link></p>
          <p className="mb-2 cursor-pointer"><FaMapMarkerAlt className="text-2xl text-center"/>
          <Link to={"https://maps.app.goo.gl/7CS2ufEVFA1ty8mm9"} className="mt-2 text-center hover:underline hover:decoration-black transition duration-3 ease underline decoration-white" target="_blank" rel="noopener noreferrer" >Rashakai / Nowshera</Link></p>
        </div>
        <div>
          <h2 className="text-2xl font-bold mb-4">Follow Me</h2>
          <div className="flex space-x-4">
            <a href="https://github.com/Alikhan23M" target="_blank" rel="noopener noreferrer">
              <FaGithub className="text-2xl hover:text-black hover:bg-white" />
            </a>
            <a href="https://www.linkedin.com/in/ali-khan-972758316?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="text-2xl hover:text-blue-600 hover:bg-white" />
            </a>
          </div>
        </div>
      </div>
      <div className="text-center mt-8">
        <p>© 2024 Ali Khan. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
