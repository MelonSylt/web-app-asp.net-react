import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './Components/App/App.jsx'
import Header from './Components/Header/Header.jsx'
import './index.css'
import Bootstrap from 'bootstrap/dist/css/bootstrap.min.css';
import Body from './Components/Body/Body.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
    
        <Header />
        
       
       <App />
        
        

  </React.StrictMode>,
)
