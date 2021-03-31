// import { useState } from 'react'

import Header from './components/header/Header'
import Sidebar from './components/sidebar/Sidebar'
import Workspaces from './content/Workspaces';
import Settings from './content/Settings';
import About from './content/About';
import Info from './content/Info';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

const App = () => {
  
  const links = [
    { title: 'Workspaces', path: '/workspaces', icon: 'bi bi-box-seam', main: Workspaces },
    { title: 'Settings', path: '/settings', icon: 'bi bi-gear-fill', main: Settings },
    { title: 'System Info', path: '/info', icon: 'bi bi-info-circle', main: Info },
    { title: 'About', path: '/about', icon: 'bi bi-question-circle', main: About },
  ];

  return (
    <div className="wrapper">
      <Header></Header>
      <Router>
        <Sidebar links={links}></Sidebar>

        <div className="main-content">
          <div className="main">
          <Switch>
            {links.map((route, index) => (
              <Route
                key={index}
                path={route.path}
                children={<route.main />}
              />
            ))} 
            <Route path="/">
              <Redirect to={{pathname: "/workspaces"}} />
            </Route>
          </Switch> 
          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;
