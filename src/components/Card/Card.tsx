import './Card.scss';

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
                <a
                    href="https://github.com/Tristan-GPT"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="button primary"
                >
                    View Projects
                </a>

                <a
                    href="https://www.linkedin.com/in/tristanjacob21"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="button secondary"
                >
                    Contact Me
                </a>
            </div>

            <img src="/banner.png" alt="Banner" className="banner" />
            <div className="socials">
                <a
                    href="https://github.com/Tristan-GPT"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <img src="/github.png" alt="GitHub" />
                </a>

                <a
                    href="https://discord.gg/users/705425854825496656"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <img src="/discord.png" alt="Discord" />
                </a>

                <a
                    href="https://instagram.com/tristanjcb"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <img src="/instagram.png" alt="Instagram" />
                </a>

                <a
                    href="https://x.com/TristanJ_Pro"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <img src="/x.png" alt="X" />
                </a>

                <a
                    href="https://linkedin.com/in/tristanjacob21"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <img src="/linkedin.png" alt="LinkedIn" />
                </a>
            </div>
        </main>
    );
}
