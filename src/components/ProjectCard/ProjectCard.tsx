import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import './ProjectCard.scss';

interface Props {
  title: string;
  description: string;
  tech?: string[];
  live?: string;
  repo?: string;
  image?: string;
}

export default function ProjectCard({ title, description, tech = [], live, repo, image }: Props) {
  const { t } = useTranslation();
  return (
    <motion.article
      className="project-card"
      whileHover={{ translateY: -6, boxShadow: '0 18px 40px rgba(10,12,40,0.45)' }}
      transition={{ type: 'spring', stiffness: 220 }}
    >
      {/* cover image (if provided) */}
      <div className="project-cover">
        <img src={image ?? '/placeholder.png'} alt={title} />
      </div>
      <div className="project-body">
        <h3 className="project-title">{title}</h3>
        <p className="project-desc">{description}</p>
        <div className="project-tech">
          {tech.map((techKey, i) => {
            // allow passing either 'react' or 'tech.react'
            const lookup = techKey.startsWith('tech.') ? techKey : `tech.${techKey}`;
            const defaultLabel = techKey.replace(/^tech\./, '').replace(/_/g, ' ');
            const label = t(lookup, { defaultValue: defaultLabel });
            return (
              <span key={i} className="tech-pill">{label}</span>
            );
          })}
        </div>
        <div className="project-actions">
          {live && <a className="btn small" href={live} target="_blank" rel="noreferrer">{t('common.view')}</a>}
          {repo && <a className="btn small ghost" href={repo} target="_blank" rel="noreferrer">{t('common.code')}</a>}
        </div>
      </div>
    </motion.article>
  );
}
