import { useNavigate } from 'react-router-dom';
import './NotFound.scss';
import { useTranslation } from 'react-i18next';
function NotFound() {
    const navigate = useNavigate();
    const { t } = useTranslation();
    const handleGoHome = () => {
        navigate('/');
    };
    return (
        <><div className='container'>
            <h1>{t('notfound.title')}</h1>
            <p>{t('notfound.text')}</p>
            <button onClick={handleGoHome}>{t('navbar.home')}</button>
        </div></>
    );
}

export default NotFound;