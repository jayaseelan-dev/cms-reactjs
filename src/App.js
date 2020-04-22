import React from 'react';
import { BrowserRouter, Link, Switch, Route } from 'react-router-dom';

import './App.css';

import CompanyList from './Company/CompanyList';
import EmployeeList from './Employee/EmployeeList';
import DashboardDetails from './Dashboard/DashboardDetails';

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
                <DashboardDetails />
              </Route>
              <Route path="/company-details">
                <CompanyList />
              </Route>
              <Route path="/employee-details">
                <EmployeeList />
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

export default App;
