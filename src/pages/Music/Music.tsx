import Navbar from '../../components/Navbar/Navbar';
import './Music.scss';
import Footer from '../../components/Footer/Footer';
import { useTranslation } from 'react-i18next';

export default function Music(){
  const { t } = useTranslation();
  // pull track objects from i18n (returnObjects needed to retrieve an array of objects)
  const tracks = t('music.tracks', { returnObjects: true }) as Array<{ name: string; desc: string; url?: string; image?: string }>;

  return (
    <>
      <Navbar />
      <main className="music container">
        <header className="music-header">
          <h1 className="music-title">{t('music.title')}</h1>
          <p className="music-desc">{t('music.description')}</p>
        </header>

        <section className="tracks">
          {tracks.map((track, idx) => (
            <article key={idx} className="track card">
              <img src={track.image ?? '/music-cover-placeholder.png'} alt={track.name} className="track-cover" />
              <div className="track-info">
                <h3>{track.name}</h3>
                <p className="muted">{track.desc}</p>
              </div>
              <div className="track-actions">
                <a className="btn small" href={track.url ?? '#'} target="_blank" rel="noreferrer">{t('music.listen')}</a>
              </div>
            </article>
          ))}
        </section>

      </main>
      <Footer />
    </>
  );
}
