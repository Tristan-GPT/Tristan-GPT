
import { useState, useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import './Navbar.scss';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  
  const menuRef = useRef<HTMLDivElement | null>(null);
  const toggleRef = useRef<HTMLButtonElement | null>(null);
  const { t, i18n } = useTranslation();
  const changeLanguage = (lng: string) => i18n.changeLanguage(lng);
  const toggleMenu = () => {
    setIsOpen(prev => !prev);
  };

  // Lock scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
  }, [isOpen]);

  // close on outside click
  useEffect(() => {
    function onDoc(e: MouseEvent) {
      if (!menuRef.current) return;
      const target = e.target as Node;
      const clickedInsideMenu = menuRef.current.contains(target);
      const clickedToggle = toggleRef.current?.contains(target);
      if (isOpen && !clickedInsideMenu && !clickedToggle) setIsOpen(false);
    }
    document.addEventListener('click', onDoc);
    return () => document.removeEventListener('click', onDoc);
  }, [isOpen]);
  // Close menu on navigation
  const handleNavClick = () => {
    setIsOpen(false);
    document.body.style.overflow = '';
  };
  return (
    <nav className={`navbar ${isOpen ? 'menu-open' : ''}`} role="navigation" aria-label="Navigation principale">
      <div className={`navbar-left`}>

      </div>

      <div className="nav-center" ref={menuRef}>
        <ul id="main-nav" className={isOpen ? 'nav-menu open' : 'nav-menu'}>
          <li><NavLink to="/" onClick={handleNavClick} className={({isActive}) => isActive ? 'active' : ''}>{t('navbar.home')}</NavLink></li>
          <li><NavLink to="/projects" onClick={handleNavClick} className={({isActive}) => isActive ? 'active' : ''}>{t('navbar.projects')}</NavLink></li>
          <li><NavLink to="/music" onClick={handleNavClick} className={({isActive}) => isActive ? 'active' : ''}>{t('navbar.music')}</NavLink></li>
          <li><NavLink to="/about" onClick={handleNavClick} className={({isActive}) => isActive ? 'active' : ''}>{t('navbar.about')}</NavLink></li>
        </ul>
      </div>

      <div className="navbar-right">
        <div className="socials">
          <a href="https://github.com/Tristan-GPT" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><img src="/github.png" alt="GitHub"/></a>
          <a href="https://www.instagram.com/tristanjcb/" target="_blank" rel="noreferrer" aria-label="Instagram"><img src="/instagram.png" alt="Instagram"/></a>
          <a href="https://x.com/TristanGpt_" target="_blank" rel="noreferrer" aria-label="X"><img src="/x.png" alt="X"/></a>
          <a href="https://www.youtube.com/@LEXKESS_Music" target="_blank" rel="noreferrer" aria-label="YouTube"><img src="/youtube.png" alt="YouTube" className="youtube-icon"/></a>
          <a href="https://open.spotify.com/intl-fr/artist/4tPQ4WRIozeNceVL03wdJU?si=A_NbwDqgRO-sxK0vqss_YA" target="_blank" rel="noreferrer" aria-label="Spotify"><img src="/spotify.png" alt="Spotify"/></a>
          <a href="mailto:tristangpt@miralys.xyz" aria-label="Email"><img src="/mail.svg" alt="Mail"/></a>
        </div>

        <div className="lang-select">
          <label className="sr-only" htmlFor="nav-lang">{t('navbar.lang_select')}</label>
          <select id="nav-lang" value={i18n.language} onChange={e => changeLanguage(e.target.value)} aria-label={t('navbar.lang_select')}>
            <option value="en">{t('navbar.lang_en')}</option>
            <option value="fr">{t('navbar.lang_fr')}</option>
          </select>
        </div>

        <div className="menu-icon">
          <button ref={toggleRef} className="menu-button" onClick={toggleMenu} aria-expanded={isOpen} aria-controls="main-nav" aria-label={t('navbar.menu')}>
            <img src="/navbar-mobile.png" alt={t('navbar.menu')} />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div className="mobile-backdrop" initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} onClick={() => setIsOpen(false)} />
        )}
      </AnimatePresence>
    </nav>
  );
}

export default Navbar;
