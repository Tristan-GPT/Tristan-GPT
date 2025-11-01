import Navbar from '../../components/Navbar/Navbar';
import './About.scss';
import { useTranslation } from 'react-i18next';

function About() {
  const { t } = useTranslation();

  return <>
    <Navbar />
    <div className={`about container`}>
      <h1 className='about-title'>{t('about.title')}</h1>
      <p className='about-text'>{t('about.text')}</p>
    </div>
  </>;
}

export default About;
