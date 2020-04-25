import React from 'react';
import { BrowserRouter, NavLink, Switch, Route } from 'react-router-dom';

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
            <NavLink to="/dashboard-details" activeClassName="active">Dashboard</NavLink>
            <NavLink to="/company-details" activeClassName="active">Company</NavLink>
            <NavLink to="/employee-details" activeClassName="active">Employee</NavLink>
          </section>

          <section className="content">
            <Switch>
              <Route path="/dashboard-details" component={DashboardDetails}/>
              <Route path="/company-details" component={CompanyList}/>
              <Route path="/employee-details" component={EmployeeList}/>
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
