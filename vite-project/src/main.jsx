import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
import App from './App.jsx'
import 'cesium/Build/Cesium/Widgets/widgets.css';

import * as Cesium from 'cesium';
window.Cesium = Cesium;

// Inject Google Ads script only in production
if (import.meta.env.PROD) {
  const script = document.createElement('script');
  script.async = true;
  script.src = "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2971100969055280";
  script.crossOrigin = "anonymous";
  document.head.appendChild(script);
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
