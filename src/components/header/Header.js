import React from 'react'
// import Button from "../button/Button"

const Header = () => {
  const ifVisible = false;

  return (
    <div className="header">
  
    <div className="topbar">
      <div className="topbar-left">
      <div className="topbar-logo">
        <span className="icon-logo" />
        <span className="text-logo">Prototype</span>
      </div>
      <div className="topbar-title">Process Creator</div>
      <div className="topbar-pilot-ui"></div>

      </div>

      <div className="topbar-right">
      </div>
    </div>

      { ifVisible && <div className="logo">
        <span className="icon-logo" />
        <a href="/" className="nav-trigger"><span></span></a>
      </div>}

    </div>
  )

}
export default Header