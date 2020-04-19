import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <h4>Corporate Management System</h4>
      </header>
      <section className="app-body">
        <section className="sidebar">
          <a href="#dashboard" class="active">Dashboard</a>
          <a href="#company">Company</a>
          <a href="#employee">Employee</a>
        </section>
        <section className="content">
          <h1>Welcome</h1>
        </section>
      </section>
      <footer className="app-footer">
        <h4>&copy; CMS - 2019</h4>
      </footer>
    </div>
  );
}

export default App;
