import React from 'react';
import { BrowserRouter, NavLink, Switch, Route, Redirect } from 'react-router-dom';

import './App.css';

import CompanyList from './Company/CompanyList';
import EmployeeList from './Employee/EmployeeList';
import DashboardDetails from './Dashboard/DashboardDetails';
import SignUp from './UserAccount/SignUp';
import Login from './UserAccount/Login';

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
          <Switch>
            <Route exact path='/' component={()=>(<Redirect to='/login'/>)}/>
            <Route path="/login" component={Login} />
            <Route path="/sign-up" component={SignUp} />
          </Switch>
        </BrowserRouter>
        {/* <BrowserRouter>
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
            </Switch>
          </section>
        </BrowserRouter> */}
      </section>
    </div>
  );
}

export default App;
