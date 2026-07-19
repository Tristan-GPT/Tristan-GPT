import './Projects.scss';
import { FaArrowUpRightFromSquare } from 'react-icons/fa6';

const projects = [
    {
        title: 'Portfolio',
        description:
            'My personal website built with React, TypeScript and SCSS.',
        image: '/banner-ws.png',
        technologies: ['React', 'TypeScript', 'SCSS', 'ViteJS'],
        url: 'https://tristangpt.tech',
    },
    {
        title: 'Kairo',
        description:
            'Modern multi-features & community based modules discord bot.',
        image: '/Kairo.png',
        technologies: [
            'NodeJS',
            'TypeScript',
            'Discord.js',
            'React',
            'SCSS',
            'NextJS',
            'MongoDB',
        ],
        url: '/projects',
    },
    {
        title: 'Thrust FX',
        description:
            'Open source high-performance modular audio processing & effects platform.',
        image: '/ThrustFX.png',
        technologies: [
            'C++',
            'Qt',
            'NodeJS',
            'React',
            'SCSS',
            'NextJS',
            'PostgreSQL',
            'Turbo',
            'Vercel',
            'PNPM',
        ],
        url: 'https://github.com/Thrust-FX/Thrust-FX',
    },
];

export function Projects() {
    return (
        <section className="projects">
            <div className="projects__hero">
                <span>FEATURED PROJECTS</span>

                <h1>Projects I've built.</h1>

                <p>
                    A selection of personal and professional projects focused on
                    performance, clean architecture and user experience.
                </p>
            </div>

            <div className="projects__grid">
                {projects.map(project => (
                    <article key={project.title} className="project-card">
                        <img src={project.image} alt={project.title} />

                        <div className="project-card__content">
                            <h2>{project.title}</h2>

                            <p>{project.description}</p>

                            <div className="project-card__tags">
                                {project.technologies.map(tech => (
                                    <span key={tech}>{tech}</span>
                                ))}
                            </div>

                            <a
                                href={project.url}
                                target="_blank"
                                rel="noreferrer"
                            >
                                View project
                                <FaArrowUpRightFromSquare />
                            </a>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
}
