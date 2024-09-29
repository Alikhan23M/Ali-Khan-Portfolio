import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaEnvelope, FaLinkedin, FaPhone } from 'react-icons/fa';

const navLinks = [
  { title: 'Home', link: '/', isRoute: true },
  { title: 'Skills', link: '#Skills', isRoute: false },
  { title: 'About', link: '#about', isRoute: false },
  { title: 'Contact', link: '#contact', isRoute: false },
  { title: 'Projects', link: '/projects', isRoute: true },
];

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false);

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  return (
    <nav className="fixed bg-[rgba(0,0,0,0.7)] shadow-lg shadow-blue-600 p-3 navbar relative h-16 text-white z-100">
      <div className="mx-auto flex h-full max-w-7xl items-center justify-between px-4">
        <a href="/" className="flex items-center gap-3">
          <h1 className='text-blue-600 text-3xl'>Ali Khan</h1>
        </a>
        <button className="menu-icon lg:hidden z-50" onClick={handleShowNavbar}>
          {showNavbar ? (
            <X size={28} className="text-white" />
          ) : (
            <Menu size={28} className="text-white" />
          )}
        </button>
        <div
          className={`nav-elements navbar bg-[rgba(0,0,0,0.9)] fixed inset-0 z-40 h-screen w-screen transform transition-transform duration-300 ease-in-out lg:relative lg:right-auto lg:top-auto lg:h-auto lg:w-auto lg:translate-x-0 lg:bg-transparent ${
            showNavbar ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <ul className="mt-16 flex flex-col space-y-8 px-6 py-6 lg:mt-0 lg:flex-row lg:space-x-8 lg:space-y-0 lg:px-0 text-center">
            {navLinks.map(({ title, link, isRoute }, index) => (
              <li key={index} className="group">
                {isRoute ? (
                  <Link
                    to={link}
                    className="relative p-2 text-lg font-medium transition-all duration-300 ease-in-out hover:text-blue-600 lg:text-base"
                    onClick={() => setShowNavbar(false)}
                  >
                    {title}
                    <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-blue-600 transition-all duration-300 ease-in-out group-hover:w-full"></span>
                  </Link>
                ) : (
                  <a
                    href={link}
                    className="relative p-2 text-lg font-medium transition-all duration-300 ease-in-out hover:text-blue-600 lg:text-base"
                    onClick={() => setShowNavbar(false)}
                  >
                    {title}
                    <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-blue-600 transition-all duration-300 ease-in-out group-hover:w-full"></span>
                  </a>
                )}
              </li>
            ))}
            <div className="mt-4 flex justify-center space-x-4 lg:mt-0 lg:justify-end">
              <Link to={'mailto:alikhan9327224@gmail.com'} target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-600">
                <FaEnvelope size={24} />
              </Link>
              <Link to="https://www.linkedin.com/in/ali-khan-972758316?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-600">
                <FaLinkedin size={24} />
              </Link>
              <Link to="tel:+923429327224" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-600">
                <FaPhone size={24} />
              </Link>
            </div>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
