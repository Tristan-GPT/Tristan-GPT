import { useNavigate } from 'react-router-dom';
import './NotFound.css';
function NotFound() {

    const navigate = useNavigate();
    
    const handleGoHome = () => {
        navigate('/');
    };

    return (
    <><h1>Error 404: Page Not Found</h1>
    <button onClick={handleGoHome}>Return to home</button>
    </>
    )
}

export default NotFound;