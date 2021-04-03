import React from 'react'
import { NavLink } from "react-router-dom";

const Sidebar = ({links}) => {

  const navigation = links
    .filter(link => link.visible)
    .map((link) =>
      <NavLink key={link.title} to={link.path} activeClassName="sidebar-active" strict>
        <span className={link.icon}></span>
        <span className="sidebar-title">{link.title}</span>
      </NavLink>
  );

  return (
    <div className="side-nav">
      <div className="logo">
        <span className="icon-logo" />
        <span className="title">React</span>
      </div>

      <div className="sidebar">
        {navigation}
      </div>
    </div>
  )
}

export default Sidebar