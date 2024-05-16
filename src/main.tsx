import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import AppContainers from "./containers/AppContainers.tsx";


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <AppContainers/>
  </React.StrictMode>,
)
