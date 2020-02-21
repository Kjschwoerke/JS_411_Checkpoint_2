import React from 'react';
import Navigation from './components/Navigation'
import './App.css'
import Router from './Router'
import Home from './components/Home'
import { BrowserRouter } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Router />
    </BrowserRouter>
  );
}

export default App;
