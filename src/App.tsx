import { Route, Routes } from 'react-router';
import MainPage from 'screens/main';
import Playground from 'screens/playground';
import ResumePage from 'screens/resume';
import {
    default as GalleryPage,
    default as PortfolioPage,
} from 'screens/scenes';
import './App.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/resume" element={<ResumePage />} />
      <Route path="/playground" element={<Playground />} />
      <Route path="/portfolio" element={<PortfolioPage />} />
      <Route path="/graphics" element={<GalleryPage />} />
    </Routes>
  );
}

export default App;
