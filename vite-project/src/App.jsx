import { useState } from 'react'
import React from 'react';
// import './App.css'

//import { Link } from 'reac-router-dom';
import { BrowserRouter, Routes, Route, Link  } from 'react-router-dom';
// import './Global.module.css'
import Home from './pages/Home'
import Portfolio from './pages/Portfolio'
import Contacts from './pages/Contacts'
import About from './pages/About'
import NoPage from './pages/NoPage'
import Test from './pages/Test'
import UndergroundNews from './pages/UndergroundNews';
import Resume from './pages/Resume';
import Statistica from './pages/Statistica';
import NewsPage from './pages/NewsPage';
import EarthPage from './pages/EarthPage';
import EightiesPage from './pages/EightiesPage';
import AnatomyPage from './pages/AnatomyPage';
import RetroGamePage from './pages/RetroGamePage';
import TiktokClone from './pages/TiktokClone';
import MoviePage from './pages/MoviePage';
import PropertyPage from './pages/PropertySite/PropertyPage';
import OrganizationPage from './pages/ActivistSite/OrganizationPage';
import VPN from './pages/VPN/VPNPage';
import SimpleNewSite from './pages/SimpleNewsSite';
import PokiToki from './pages/PokiToki/PokiToki';
import Arcade from './pages/Arcade/Arcade';
import MovieSite from './pages/MovieSite';
import CelticPage from './pages/EthnicSites/CelticPage';
import BlogPostPage from './pages/EthnicSites/BlogPostPage';
import BrutalistPage from './pages/EthnicSites/BrutalistPage';
import TeutonicPage from './pages/EthnicSites/TeutonicPage';
import OdysseyPage from './pages/Odyssey/OdysseyPage';
import MedievalPage from './pages/MedievalPage';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home/>} />
          <Route path='*' element={<NoPage/>}/>
          <Route path='/Home' element={<Home/>} />
          <Route path='/Portfolio' element={<Portfolio/>}/>
          <Route path='/Contacts' element={<Contacts/>}/>
          <Route path='/About' element={<About/>}/>
          <Route path='/UndergroundNews' element={<UndergroundNews/>}/>
          <Route path='/Resume' element={<Resume/>}/>
          <Route path='/Test' element={<Test/>}/>
          <Route path='/Statistica' element={<Statistica/>}/>
          <Route path='/News' element={<NewsPage/>}/>
          <Route path='/Earth' element={<EarthPage/>}/>
          <Route path='/Man' element={<AnatomyPage/>}/>
          <Route path='/Eighties' element={<EightiesPage/>}/>
          <Route path='/Retro' element={<RetroGamePage/>}/>
          <Route path='/Tiktok' element={<TiktokClone/>}/>
          <Route path='/Movies' element={<MoviePage/>}/>
          <Route path='/Property' element={<PropertyPage/>}/>
          <Route path='/Org' element={<OrganizationPage/>}/>
          <Route path='/VPN' element={<VPN />}/>
          <Route path='/SimpleNews' element={<SimpleNewSite />}/>
          <Route path='/PokiToki' element={<PokiToki />}/>
          <Route path='/Arcade' element={<Arcade/>}/>
          <Route path='/MoviesSecond' element={<MovieSite />}/>
          <Route path='/Celtic' element={<CelticPage />}/>
          <Route path='/Germanic' element={<TeutonicPage />}/>
          <Route path='/Anglo' element={<CelticPage />}/>
          <Route path='/Brutalist' element={<BrutalistPage />}/>
          <Route path='/Odyssey' element={<OdysseyPage/>}/>
          <Route path='/Medieval' element={<MedievalPage/>}/>

          <Route path="/blog/:slug" element={<BlogPostPage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
