import React from 'react';
import './App.css';

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <h4>Corporate Management System</h4>
        <h5>Jayaseelan S</h5>
      </header>
      <section className="app-body">
        <section className="sidebar">
          <a href="#dashboard">Dashboard</a>
          <a href="#company">Company</a>
          <a href="#employee">Employee</a>
        </section>
        <section className="content">
          <h1>Welcome</h1>
        </section>
      </section>
    </div>
  );
}

export default App;
