import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router';
import IntroductionPage from 'screens/main';
import PortfolioPage from 'screens/scenes';
import GalleryPage from 'screens/scenes';
import MainPage from 'screens/main';

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/portfolio" element={<PortfolioPage />} />
      <Route path="/graphics" element={<GalleryPage />} />
    </Routes>
  );
}

export default App;
