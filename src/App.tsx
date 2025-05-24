import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Dashboard from './pages/Dashboard';
import SkillsAnalysis from './pages/SkillsAnalysis';
import IndustryTrends from './pages/IndustryTrends';
import LocationInsights from './pages/LocationInsights';
import About from './pages/About';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/skills" element={<SkillsAnalysis />} />
          <Route path="/industries" element={<IndustryTrends />} />
          <Route path="/locations" element={<LocationInsights />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;