import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

import { useAuth } from '../../utils/AuthProvider';

import './Navigation.scss';

export default function Navigation() {
  let auth = useAuth();
  let navigate = useNavigate();

  function handleLogout() {
    auth.signout(() => {
      navigate('/');
    });
  }

  return (
    <section className="app-nav">
      <nav className="left-menu">
        <NavLink to="/company">Company</NavLink>
        <NavLink to="/employee">Employee</NavLink>
      </nav>
      { (auth.user) &&
        <nav className="right-menu">
          <button onClick={handleLogout}>Logout</button>
        </nav>
      }
    </section>
  );
}
