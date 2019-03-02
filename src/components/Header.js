import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <header>
    <h1>Budget App</h1>
    <NavLink to="/" activeClassName="is-active" exact={true}>Go Home</NavLink>
    <NavLink to="/create" activeClassName="is-active">Create expense page</NavLink>
    <NavLink to="/help" activeClassName="is-active">Help Page</NavLink>
  </header>
);

export default Header;