import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import './styles/navbar.css'
import './styles/home.css'
import './styles/skills.css'
import './styles/education.css'
import './styles/projects.css'
import './styles/contact.css'


ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
)
