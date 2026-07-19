import './Contact.scss';

import {
    FaGithub,
    FaLinkedin,
    FaInstagram,
    FaDiscord,
    FaXTwitter,
    FaEnvelope,
    FaArrowUpRightFromSquare,
} from 'react-icons/fa6';

const contacts = [
    {
        name: 'GitHub',
        icon: <FaGithub />,
        value: '@Tristan-GPT',
        href: 'https://github.com/Tristan-GPT/Tristan-GPT/discussions',
    },
    {
        name: 'LinkedIn',
        icon: <FaLinkedin />,
        value: 'Tristan Jacob',
        href: 'https://linkedin.com/in/tristanjacob21',
    },
    {
        name: 'Email',
        icon: <FaEnvelope />,
        value: 'tristangpt.pro@gmail.com',
        href: 'mailto:tristangpt.pro@gmail.com',
    },
    {
        name: 'Instagram',
        icon: <FaInstagram />,
        value: '@tristanjcb',
        href: 'https://instagram.com/tristanjcb',
    },
    {
        name: 'Discord',
        icon: <FaDiscord />,
        value: 'juste_tristan',
        href: 'https://discord.com/users/705425854825496656',
    },
    {
        name: 'X',
        icon: <FaXTwitter />,
        value: '@TristanJ_Pro',
        href: 'https://x.com/TristanJ_Pro',
    },
];

export function Contact() {
    return (
        <section className="contact">
            <div className="contact__hero">
                <span className="contact__subtitle">LET'S CONNECT</span>

                <h1>
                    Let's build
                    <br />
                    something amazing.
                </h1>

                <p>
                    Whether you have an idea, a collaboration, or just want to
                    say hello, I'm always happy to connect.
                </p>
            </div>

            <div className="contact__grid">
                {contacts.map(contact => (
                    <a
                        key={contact.name}
                        href={contact.href}
                        target="_blank"
                        rel="noreferrer"
                        className="contact__card"
                    >
                        <div className="contact__icon">{contact.icon}</div>

                        <div className="contact__content">
                            <h3>{contact.name}</h3>
                            <span>{contact.value}</span>
                        </div>

                        <FaArrowUpRightFromSquare className="contact__arrow" />
                    </a>
                ))}
            </div>
        </section>
    );
}
