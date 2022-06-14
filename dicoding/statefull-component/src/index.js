import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import CountApp from './pages/CountApp';
import ContactApp from './pages/ContactApp'

const root = ReactDOM.createRoot(document.getElementById('root'));

function Main () {
    return (
        <ContactApp />
    )
}

root.render(<Main />);