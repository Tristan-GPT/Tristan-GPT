import './Header.scss';
import { FaGithub } from 'react-icons/fa';

export function Header() {
    return (
        <header className="header">
            <nav className="navbar">
                <a href="/" className="navbar__logo">
                    Tristan<span className="padname">Jacob</span>
                </a>

                <div className="navbar__links">
                    <a href="/">Home</a>
                    <a href="/projects">Projects</a>
                    <a href="/sponsors">Sponsors</a>
                    <a href="/partners">Partners</a>
                    <a href="/about">About</a>
                    <a href="/contact">Contact</a>
                </div>

                <button
                    className="navbar__theme"
                    aria-label="Theme"
                    rel="noreferrer"
                >
                    <a
                        href="https://www.github.com/Tristan-GPT"
                        className="navbar__theme"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <FaGithub />
                    </a>
                </button>
            </nav>
        </header>
    );
}
