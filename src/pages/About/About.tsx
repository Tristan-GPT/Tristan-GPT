import Navbar from '../../components/Navbar/Navbar';
import './About.scss';
import { useTranslation } from 'react-i18next';

function About() {
  const { t } = useTranslation();
  
  return <>
    <Navbar></Navbar>
    <div className={`container`}>
      <h1 className='title'>{t('about.title')}</h1>
      <p>{t('about.text')}</p>
    </div>
  </>;
}

export default About;
