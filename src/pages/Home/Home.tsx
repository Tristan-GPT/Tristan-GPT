

import Navbar from '../../components/Navbar/Navbar';
import { Lanyard } from '../../utils/Lanyard';
import { useTranslation } from 'react-i18next';
import './Home.scss';

function Home() {
  const { t } = useTranslation();
  return (
    <>
      <Navbar />
      <div className="home fadeInUp">
  <h1 className="home-title" dangerouslySetInnerHTML={{__html: t('intro.text')}} />
        <div className="home-icons" style={{display:'flex',gap:'1.2rem',flexWrap:'wrap',justifyContent:'center',marginBottom:'2rem'}}>
          <a href="mailto:tristangpt.pro@gmail.com"><img src="/mail.svg" alt={t('navbar.mail')} className="images" style={{width:'32px',height:'32px'}} /></a>
          <a href="https://www.discord.com/users/705425854825496656"><img src="/discord.png" alt={t('navbar.discord')} className="images" style={{width:'32px',height:'32px'}} /></a>
          <a href="https://github.com/Tristan-GPT"><img src="/github.png" alt={t('navbar.github')} className="images" style={{width:'32px',height:'32px'}} /></a>
          <a href="https://www.instagram.com/tristan.gpt/"><img src="/instagram.png" alt={t('navbar.instagram')} className="images" style={{width:'32px',height:'32px'}} /></a>
          <a href="https://www.youtube.com/@tristan_gpt" target="_blank" rel="noopener noreferrer">
            <img src="/youtube.png" alt={t('navbar.youtube')} className="images youtube" style={{height:'32px',width:'auto',display:'inline-block',verticalAlign:'middle'}} />
          </a>
        </div>
        <div style={{display:'flex',justifyContent:'center'}}>
          <Lanyard />
        </div>
      </div>
    </>
  );
}

export default Home;
