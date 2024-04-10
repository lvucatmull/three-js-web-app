import React from "react";
import "./App.css";
import MainPage from "screens/main";
import { Route, Routes } from "react-router";
import ThreeOrbitControl from "component/3DScenes/ThreeOrbitControl";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/threeOrbit" element={<ThreeOrbitControl />} />
      {/* <Route path="/selector" element={<Selector />} />
        <Route path="/unzip" element={<InstallUnzipPage />} />
        <Route path="/install" element={<InstallPage />} />
        <Route path="/installSelector" element={<InstallSelector />} />
        <Route path="/config" element={<InstallConfig />} />
        <Route path="/login" element={<Login />} />
        <Route path="/update" element={<UpdatePage />} />
        <Route path="/log" element={<LogView />} /> */}
    </Routes>
  );
}

export default App;
