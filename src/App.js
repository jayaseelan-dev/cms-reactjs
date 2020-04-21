import React from 'react';
import './App.css';
import { BrowserRouter, Link, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className="app">
      {/* HEADER CONTENT */}
      <header className="app-header">
        <h4>Corporate Management System</h4>
        <h5>Jayaseelan S</h5>
      </header>

      {/* BODY CONTENT */}
      <section className="app-body">
        <BrowserRouter>
          <section className="sidebar">
            <Link to="/dashboard-details">Dashboard</Link>
            <Link to="/company-details">Company</Link>
            <Link to="/employee-details">Employee</Link>
          </section>

          <section className="content">
            <Switch>
              <Route path="/dashboard-details">
                <Dashboard />
              </Route>
              <Route path="/company-details">
                <Company />
              </Route>
              <Route path="/employee-details">
                <Employee />
              </Route>
              <Route path="/">
                <h2>Click on any menu</h2>
              </Route>
            </Switch>
          </section>
        </BrowserRouter>
      </section>
      
    </div>
  );
}

function Company() {
  return (
    <div>
      <h2>Company</h2>
    </div>
  );
}

function Employee() {
  return (
    <div>
      <h2>Employee</h2>
    </div>
  );
}

function Dashboard() {
  return (
    <div>
      <h2>Dashboard</h2>
    </div>
  );
}

export default App;
