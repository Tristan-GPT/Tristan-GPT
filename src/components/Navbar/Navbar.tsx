import { useState } from 'react';
import './Navbar.css';

// @ts-expect-error aaaa
function Navbar({ onMenuToggle }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    onMenuToggle(!isOpen);
  };

  return (
    <nav className="navbar">
      <ul className={isOpen ? 'nav-menu open' : 'nav-menu'}>
        <li><a href="/">Home</a></li>
        <li><a href="/about">About Me</a></li>
        <li><a href="/projects">Projects</a></li>
        <li><a href="/sponsors">Sponsors</a></li>
        <li><a href="/contact">Contact</a></li>
        <li className='manager'><a href="https://manager.tristangpt.vercel.app" className='manager'>Log In</a></li>
      </ul>
      <div className="menu-icon" onClick={toggleMenu}>
        <img src={isOpen ? '/navbar-mobile.png' : '/navbar-mobile.png'} alt="Menu Icon" />
      </div>
    </nav>
  );
}

export default Navbar;
