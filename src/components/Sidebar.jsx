import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import './Sidebar.css';

export default props => {
  return (
    <Menu>
      <a className="menu-item" href="/home">
        Home
      </a>
      <a className="menu-item" href="/search">
        Search
      </a>
      {/* <a className="menu-item" href="/history">
        History
      </a>
      <a className="menu-item" href="/favorites">
        Favorites
      </a> */}
    </Menu>
  );
};