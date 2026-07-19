import './Card.scss';
import { FaDiscord, FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

export function Card() {
    return (
        <main className="container">
            <img src="/pfp.png" alt="Profile" className="pfp" />

            <h1>
                Tristan Jacob
                <br />
                <span className="gradient">Full Stack Developer</span>
            </h1>

            <p className="subtitle">
                I build modern, performant and scalable web applications using
                React, TypeScript, Node.js and modern cloud technologies.
            </p>

            <div className="buttons">
                <a href="/projects" className="button primary">
                    View Projects
                </a>

                <a href="/contact" className="button secondary">
                    Contact Me
                </a>
            </div>

            <div className="socials">
                <a
                    href="https://github.com/Tristan-GPT"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FaGithub />
                </a>

                <a
                    href="https://discord.gg/users/705425854825496656"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FaDiscord />
                </a>

                <a
                    href="https://instagram.com/tristanjcb"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FaInstagram />
                </a>

                <a
                    href="https://x.com/TristanJ_Pro"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FaXTwitter />
                </a>

                <a
                    href="https://linkedin.com/in/tristanjacob21"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FaLinkedin />
                </a>
            </div>
        </main>
    );
}
