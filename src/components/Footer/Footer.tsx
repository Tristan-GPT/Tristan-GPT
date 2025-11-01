import { useTranslation } from 'react-i18next';
import './Footer.scss';

export default function Footer(){
  const { t } = useTranslation();
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <div className="footer-left">© {new Date().getFullYear()} Tristan Jacob</div>
        <div className="footer-right">
          <a href="/about">{t('footer.about')}</a>
          <a href="/projects">{t('footer.projects')}</a>
          <a href="mailto:tristangpt@miralys.xyz">{t('footer.contact')}</a>
        </div>
      </div>
    </footer>
  );
}
