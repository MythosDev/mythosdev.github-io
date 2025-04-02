import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
import App from './App.jsx'
import 'cesium/Build/Cesium/Widgets/widgets.css';

import * as Cesium from 'cesium';
window.Cesium = Cesium;

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
