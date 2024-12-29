import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomeScreen from './components/HomeScreen';
import PlayerSelectionScreen from './components/PlayerSelectionScreen';
import MainGameScreen from './components/MainGameScreen';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/player-selection" element={<PlayerSelectionScreen />} />
        <Route path="/main-game" element={<MainGameScreen />} />
      </Routes>
    </Router>
  );
};

export default App;
