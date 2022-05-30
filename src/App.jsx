import React from 'react';
import { Link, Outlet } from 'react-router-dom';

import './App.css';

function App() {
  return (
    <div className="app">
      {/* HEADER CONTENT */}
      <header className="app-header">
        <h4>Corporate Management System</h4>
        <h5>Jayaseelan S</h5>
      </header>
      <section className="app-nav">
        <nav className="left-menu">
          <Link to="/company-details">Company</Link>
          <Link to="/employee-details">Employee</Link>
        </nav>
        <nav className="right-menu">
          <Link to="/">Logout</Link>
        </nav>
      </section>
      {/* BODY CONTENT */}
      <section className="app-content">
        <Outlet />
      </section>
    </div>
  );
}

export default App;
