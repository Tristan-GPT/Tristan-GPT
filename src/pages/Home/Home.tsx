

import Navbar from '../../components/Navbar/Navbar';
import { Lanyard } from '../../utils/Lanyard';
import './Home.scss';
import Hero from '../../components/Hero/Hero';
import ProjectCard from '../../components/ProjectCard/ProjectCard';
import Footer from '../../components/Footer/Footer';
import { useTranslation } from 'react-i18next';

function Home() {
  const { t } = useTranslation();

  // Contenu des projets tiré depuis i18n
  const sampleProjects = [
    {
      title: t('projects.miralys.name'),
      description: t('projects.miralys.desc'),
      image: '/miralys.png',
      tech: ['react', 'typescript', 'monorepo', 'dev', 'ceo'],
      repo: 'https://github.com/Tristan-GPT',
    },
    {
      title: t('projects.lexkess.name'),
      description: t('projects.lexkess.desc'),
      image: '/music-cover-1.png',
      tech: ['music', 'artist', 'production'],
    },
    {
      title: t('projects.portfolio.name'),
      description: t('projects.portfolio.desc'),
      image: '/nyancat.png',
      tech: ['react', 'typescript', 'framer_motion'],
      live: '/projects',
    },
  ];

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <section className="container projects-section" style={{ marginTop: '1.6rem' }}>
          <h2 style={{ textAlign: 'center', marginBottom: '1rem' }}>{t('home.projects_title')}</h2>
          <div className="projects-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(260px,1fr))', gap: '1rem' }}>
            {sampleProjects.map((p, i) => (
              <ProjectCard key={i} title={p.title} description={p.description} tech={p.tech} live={p.live} repo={p.repo} image={p.image} />
            ))}
          </div>
        </section>

        <section className="container" style={{ marginTop: '1.6rem', textAlign: 'center' }}>
          <h3>{t('home.networks_title')}</h3>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '1.2rem', marginTop: '0.8rem', flexWrap: 'wrap' }}>
            <a href="mailto:tristangpt@miralys.xyz" aria-label="Envoyer un mail"><img src="/mail.svg" alt="Mail" className="images" style={{ width: '32px', height: '32px' }} /></a>
            <a href="https://www.discord.com/users/705425854825496656" aria-label="Discord" target="_blank" rel="noreferrer"><img src="/discord.png" alt="Discord" className="images" style={{ width: '32px', height: '32px' }} /></a>
            <a href="https://github.com/Tristan-GPT" aria-label="GitHub" target="_blank" rel="noreferrer"><img src="/github.png" alt="GitHub" className="images" style={{ width: '32px', height: '32px' }} /></a>
            <a href="https://www.instagram.com/tristanjcb/" aria-label="Instagram" target="_blank" rel="noreferrer"><img src="/instagram.png" alt="Instagram" className="images" style={{ width: '32px', height: '32px', objectFit: 'contain' }} /></a>
            <a href="https://x.com/TristanGpt_" aria-label="X (Twitter)" target="_blank" rel="noreferrer"><img src="/x.png" alt="X" className="images" style={{ width: '32px', height: '32px', objectFit: 'contain' }} /></a>
            <a href="https://www.youtube.com/@LEXKESS_Music" aria-label="YouTube" target="_blank" rel="noreferrer"><img src="/youtube.png" alt="YouTube" className="images youtube-icon" style={{ height: '32px', width: 'auto' }} /></a>
            <a href="https://open.spotify.com/intl-fr/artist/4tPQ4WRIozeNceVL03wdJU?si=A_NbwDqgRO-sxK0vqss_YA" aria-label="Spotify" target="_blank" rel="noreferrer"><img src="/spotify.png" alt="Spotify" className="images" style={{ width: '32px', height: '32px', objectFit: 'contain' }} /></a>
          </div>
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: '1rem' }}>
            <Lanyard />
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}

export default Home;
