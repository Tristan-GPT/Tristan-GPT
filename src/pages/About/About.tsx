import './About.scss';

import {
    FaGraduationCap,
    FaCode,
    FaRocket,
    FaLightbulb,
} from 'react-icons/fa6';

const education = [
    {
        year: '2025 - 2028',
        title: 'Professional Baccalauréat "MELEC"',
        school: 'Saint-Joseph La Salle High School',
        description: 'Electrical and Connected Systems',
    },
    {
        year: '2022 - 2025',
        title: 'National Diploma of the Brevet',
        school: 'Middle School',
        description: 'General studies.',
    },
];

export function About() {
    return (
        <section className="about">
            <div className="about__hero">
                <img src="/pfp.png" alt="Tristan" />
                <div className="about__content">
                    <h1>Hi, I'm Tristan</h1>

                    <p>
                        Passionate full-stack developer specialized in creating
                        modern, fast and intuitive digital experiences. I enjoy
                        building clean interfaces while focusing on performance
                        and user experience.
                    </p>

                    <div className="about__infos">
                        <div>
                            <strong>First name</strong>
                            <span>Tristan</span>
                        </div>

                        <div>
                            <strong>Last name</strong>
                            <span>Jacob</span>
                        </div>

                        <div>
                            <strong>Country</strong>
                            <span>France</span>
                        </div>

                        <div>
                            <strong>Age</strong>
                            <span>16 years</span>
                        </div>
                    </div>
                </div>
            </div>

            <section className="about__story">
                <h2>My story</h2>

                <p>
                    I started programming by creating Discord bot and small
                    python apps. Since then, my passion has evolved into modern
                    web development where I enjoy designing elegant interfaces,
                    developing APIs and building complete applications.
                </p>
            </section>

            <section className="about__education">
                <h2>
                    <FaGraduationCap />
                    Education
                </h2>

                {education.map(item => (
                    <div key={item.title} className="education-card">
                        <span>{item.year}</span>

                        <h3>{item.title}</h3>

                        <h4>{item.school}</h4>

                        <p>{item.description}</p>
                    </div>
                ))}
            </section>

            <section className="about__motivation">
                <h2>What drives me</h2>

                <div className="cards">
                    <div className="card">
                        <FaCode />
                        <h3>Clean Code</h3>
                        <p>
                            I love writing maintainable and scalable software.
                        </p>
                    </div>

                    <div className="card">
                        <FaRocket />
                        <h3>Performance</h3>
                        <p>Fast applications provide the best experience.</p>
                    </div>

                    <div className="card">
                        <FaLightbulb />
                        <h3>Creativity</h3>
                        <p>
                            Every project is an opportunity to create something
                            unique.
                        </p>
                    </div>
                </div>
            </section>
        </section>
    );
}
