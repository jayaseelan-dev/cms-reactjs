import React from 'react';
import { Outlet } from 'react-router-dom';

import Header from './components/Header/Header';
import Navigation from './components/Navigation/Navigation';

import { useAuth } from './utils/AuthProvider';

import './App.scss';

function App() {
  let auth = useAuth();

  return (
    <div className="app">
      <Header username={ auth.user }/>
      { auth.user && <Navigation /> }
      <section className="app-content">
        <Outlet />
      </section>
    </div>
  );
}

export default App;
