import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = (props) => (
  <nav className='column is-2 menu'>
    <p className="menu-label">Menu</p>
    <ul className="menu-list">
      <li>
        <NavLink to='/products' className={({ isActive }) => isActive ? 'active-link' : undefined}>
          Products
        </NavLink>
      </li>
      <li>
        <NavLink to='/about' className={({ isActive }) => isActive ? 'active-link' : undefined}>
          About
        </NavLink>
      </li>
    </ul>
    {props.children}
  </nav>
);

export default NavBar;
