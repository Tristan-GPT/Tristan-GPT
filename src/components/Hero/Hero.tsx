import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import './Hero.scss';

export default function Hero() {
  const { t } = useTranslation();

  return (
    <section className="hero container">
      <motion.div
        className="hero-inner"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
      >
        <h1 className="hero-title">{t('hero.title')}</h1>
        <p className="hero-subtitle">{t('hero.subtitle')}</p>

        <div className="hero-ctas">
          <a className="btn primary" href="/projects">{t('hero.cta_projects')}</a>
          <a className="btn ghost" href="/about">{t('hero.cta_about')}</a>
        </div>
        <div className="hero-socials">
          <a href="https://github.com/Tristan-GPT" aria-label="GitHub" target="_blank" rel="noreferrer"><img src="/github.png" alt="GitHub"/></a>
          <a href="https://www.instagram.com/tristanjcb/" aria-label="Instagram" target="_blank" rel="noreferrer"><img src="/instagram.png" alt="Instagram"/></a>
          <a href="https://x.com/TristanGpt_" aria-label="X" target="_blank" rel="noreferrer"><img src="/x.png" alt="X"/></a>
          <a href="https://www.youtube.com/@LEXKESS_Music" aria-label="YouTube" target="_blank" rel="noreferrer"><img src="/youtube.png" alt="YouTube" className="youtube-icon"/></a>
          <a href="https://open.spotify.com/intl-fr/artist/4tPQ4WRIozeNceVL03wdJU?si=A_NbwDqgRO-sxK0vqss_YA" aria-label="Spotify" target="_blank" rel="noreferrer"><img src="/spotify.png" alt="Spotify"/></a>
          <a href="mailto:tristangpt@miralys.xyz" aria-label="Email"><img src="/mail.svg" alt="Email"/></a>
        </div>
      </motion.div>
    </section>
  );
}
