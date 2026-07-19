import './Footer.scss';

import { Mail, ArrowUpRight } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="footer__container">
                <div className="footer__top">
                    <div className="footer__brand">
                        <span className="footer__label">
                            Let's build together
                        </span>

                        <h2>
                            Open to freelance,
                            <br />
                            collaborations and ambitious projects.
                        </h2>

                        <p>
                            Whether you have an idea, a startup or a project in
                            mind, I'm always excited to create modern digital
                            experiences.
                        </p>

                        <a href="/contact" className="footer__button">
                            Contact me
                            <ArrowUpRight size={18} />
                        </a>
                    </div>

                    <div className="footer__links">
                        <div>
                            <h4>Navigation</h4>

                            <a href="/">Home</a>
                            <a href="/projects">Projects</a>
                            <a href="/sponsors">Sponsors</a>
                            <a href="/partners">Partners</a>
                            <a href="/about">About</a>
                        </div>

                        <div>
                            <h4>Connect</h4>

                            <a
                                href="https://github.com/Tristan-GPT"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <FaGithub size={16} />
                                Github
                            </a>

                            <a
                                href="https://linkedin.com/in/tristanjacob21"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <FaLinkedin size={16} />
                                LinkedIn
                            </a>

                            <a href="mailto:tristangpt.pro@gmail.com">
                                <Mail size={16} />
                                Email
                            </a>
                        </div>
                    </div>
                </div>

                <div className="footer__bottom">
                    <span>© {year} Tristan Jacob. All rights reserved.</span>

                    <span>React · TypeScript · Vite · SCSS</span>
                </div>
            </div>
        </footer>
    );
}
