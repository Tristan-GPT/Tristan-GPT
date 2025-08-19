import './Projects.scss';
import { useTranslation } from 'react-i18next';
import Navbar from '../../components/Navbar/Navbar';


const projects = [
  {
    nameKey: 'projects.miralys.name',
    image: '/miralys.png',
    descKey: 'projects.miralys.desc',
  },
  {
    nameKey: 'projects.ayden.name',
    image: '/ayden.png',
    descKey: 'projects.ayden.desc',
  },
  {
    nameKey: 'projects.kairo.name',
    image: '/kairo.png',
    descKey: 'projects.kairo.desc',
  },
  {
    nameKey: 'projects.tournament.name',
    image: '/miralys-tournament.png',
    descKey: 'projects.tournament.desc',
  },
  {
    nameKey: 'projects.kolba.name',
    image: '/Kolba.png',
    descKey: 'projects.kolba.desc',
  },
  {
    nameKey: 'projects.discordian.name',
    image: '/DIAN.png',
    descKey: 'projects.discordian.desc',
  },
];

function Projects() {
  const { t } = useTranslation();
  return <>
    <Navbar />
    <div className='container projects-container'>
      <h1 className='title'>{t('projects.title')}</h1>
      <p>{t('projects.text')}</p>
      <div className='projects-list'>
        {projects.map((project, idx) => (
          <div className='project-card' key={idx}>
            <img src={project.image} alt={t(project.nameKey)} className='project-image' />
            <div className='project-info'>
              <h2 className='project-name'>{t(project.nameKey)}</h2>
              <p className='project-desc'>{t(project.descKey)}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </>;
}

export default Projects;
