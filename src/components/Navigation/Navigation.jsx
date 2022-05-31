import React from 'react';
import { NavLink, Link } from 'react-router-dom';

import './Navigation.scss';

export default function Navigation() {
  return (
    <section className="app-nav">
      <nav className="left-menu">
        <NavLink to="/company-details">Company</NavLink>
        <NavLink to="/employee-details">Employee</NavLink>
      </nav>
      <nav className="right-menu">
        <Link to="/">Logout</Link>
      </nav>
    </section>
  );
}
