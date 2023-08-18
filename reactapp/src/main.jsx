import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './Components/App/App.jsx'
import Header from './Components/Header/Header.jsx'
import './index.css'
import Bootstrap from 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from './Components/App/CommercialCarousel.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
    
        <Header />
        <Carousel />
       
       <App />
        
        

  </React.StrictMode>,
)
