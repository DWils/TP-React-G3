import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './main.css'
import {BrowserRouter} from "react-router-dom"

ReactDOM.createRoot(document.getElementById('root')).render(

  // Ajout du routeur "<BrowserRouter></BrowserRouter>" pour le routage
  <BrowserRouter>
    <App />
  </BrowserRouter>,

)