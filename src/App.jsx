import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AddGamePage from './pages/AddGamePage';
import EditGamePage from './pages/EditGamePage';
import './index.css';  // Ensure this path is correct
import NavBar from './components/NavBar';


function App() {
  return (
    <main class name="app">
      <NavBar></NavBar>
     
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/add" element={<AddGamePage />} />
      <Route path="/edit/:id" element={<EditGamePage />} />

    </Routes>
    </main>
  );
}

export default App;
