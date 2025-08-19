
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import './Navbar.scss';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { t, i18n } = useTranslation();
  const toggleMenu = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  };
  const changeLanguage = (lng: string) => i18n.changeLanguage(lng);
  // Close menu on navigation
  const handleNavClick = () => {
    setIsOpen(false);
    document.body.style.overflow = '';
  };
  return (
    <nav className="navbar dark-navbar">
      <div className={`navbar-brand ${isOpen ? 'mobile' : ''}`}>TRISTAN-GPT</div>
      <ul className={isOpen ? 'nav-menu open' : 'nav-menu'}>
        <li><a href="/" onClick={handleNavClick}>{t('navbar.home')}</a></li>
        <li><a href="/about" onClick={handleNavClick}>{t('navbar.about')}</a></li>
        <li><a href="/projects" onClick={handleNavClick}>{t('navbar.projects')}</a></li>
      </ul>
      <div className="navbar-icons">
        <a href="https://github.com/Tristan-GPT" target="_blank" rel="noopener noreferrer"><img src="/github.png" alt="GitHub" width={24} /></a>
        <a href="https://instagram.com/tristan.gpt" target="_blank" rel="noopener noreferrer"><img src="/instagram.png" alt="Instagram" width={24} /></a>
        <a href="https://discord.com/users/705425854825496656" target="_blank" rel="noopener noreferrer"><img src="/discord.png" alt="Discord" width={24} /></a>
        <a href="mailto:tristangpt@miralys.xyz"><img src="/mail.svg" alt="Mail" width={24} /></a>
        <a href="https://youtube.com/@tristan_gpt" target="_blank" rel="noopener noreferrer"><img src="/youtube.png" alt="YouTube" width={24} /></a>
      </div>
      <div className="navbar-lang-switch">
        <select
          value={i18n.language}
          onChange={e => changeLanguage(e.target.value)}
          className="lang-dropdown"
        >
          <option value="en">{t('navbar.lang_en')}</option>
          <option value="fr">{t('navbar.lang_fr')}</option>
        </select>
      </div>
      <div className="menu-icon" onClick={toggleMenu}>
        <img src="/navbar-mobile.png" alt="Menu Icon" />
      </div>
      {isOpen && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            background: 'rgba(24,26,32,0.95)',
            zIndex: 99,
          }}
          onClick={toggleMenu}
        />
      )}
    </nav>
  );
}

export default Navbar;
