import React from 'react';
import { Outlet } from 'react-router-dom';

import Header from './components/Header/Header';
import Navigation from './components/Navigation/Navigation';

import './App.scss';

function App() {
  return (
    <div className="app">
      <Header />
      <Navigation />
      <section className="app-content">
        <Outlet />
      </section>
    </div>
  );
}

export default App;
