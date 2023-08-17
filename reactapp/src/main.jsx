import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Header from './Components/Header/Header.jsx'
import './index.css'
import Body from './Components/Body/Body.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
  <Header />
        <App />
        <Body />

        

  </React.StrictMode>,
)
