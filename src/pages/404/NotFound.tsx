import { useNavigate } from 'react-router-dom';
import './NotFound.scss';
import { useTranslation } from 'react-i18next';
function NotFound() {
        const navigate = useNavigate();
        const { t } = useTranslation();
        const handleGoHome = () => navigate('/');
        return (
                <>
                    <div className='notfound container'>
                        <h1 className='notfound-title'>{t('notfound.title')}</h1>
                        <p className='notfound-text'>{t('notfound.text')}</p>
                        <div style={{textAlign:'center'}}>
                            <button className='btn' onClick={handleGoHome}>{t('navbar.home')}</button>
                        </div>
                    </div>
                </>
        );
}

export default NotFound;