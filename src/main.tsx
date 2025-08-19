import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/App/App.tsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import './main.scss';
import './styles/global.scss';
import './styles/variables.scss';
import './i18n';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
