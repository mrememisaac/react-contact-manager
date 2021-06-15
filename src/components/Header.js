import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <h1>Contacts Manager</h1>
      <hr />
      <div className="links">
        <NavLink to="/" className="link" activeClassName="active" exact>
          Contacts
        </NavLink>
        <NavLink to="/add" className="link" activeClassName="active">
          New Contact
        </NavLink>
      </div>
    </header>
  );
};

export default Header;