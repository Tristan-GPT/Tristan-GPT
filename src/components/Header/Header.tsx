import { useState } from 'react';
import './Header.scss';

import { FaGithub, FaBars, FaTimes } from 'react-icons/fa';

export function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className="header">
            <nav className="navbar">
                <a href="/" className="navbar__logo">
                    Tristan<span className="padname">Jacob</span>
                </a>

                <div className={`navbar__links ${menuOpen ? 'active' : ''}`}>
                    <a href="/">Home</a>
                    <a href="/projects">Projects</a>
                    <a href="/sponsors">Sponsors</a>
                    <a href="/partners">Partners</a>
                    <a href="/about">About</a>
                    <a href="/contact">Contact</a>
                </div>

                <div className="navbar__actions">
                    <a
                        href="https://github.com/Tristan-GPT"
                        target="_blank"
                        rel="noreferrer"
                        className="navbar__theme"
                    >
                        <FaGithub />
                    </a>

                    <button
                        className="navbar__burger"
                        onClick={() => setMenuOpen(!menuOpen)}
                        aria-label="Menu"
                    >
                        {menuOpen ? <FaTimes /> : <FaBars />}
                    </button>
                </div>
            </nav>
        </header>
    );
}
