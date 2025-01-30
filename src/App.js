import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import LandingPage from "./pages/LandingPage";
import Documentation from "./pages/Documentation";
import CodeIDE from "./pages/CodeIDE";

function App() {
  return (
    <div className="app-container">
      {/* Futuristic background behind everything */}
      <div className="futuristic-bg"></div>
            
      {/* Top Navbar */}
      <Navbar title="TaiScript" />

      {/* Main Content (Routes) */}
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/documentation" element={<Documentation />} />
        <Route path="/codeide" element={<CodeIDE/>}/>
      </Routes>
    </div>
  );
}

export default App;
