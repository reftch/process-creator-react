import React from 'react'
import Header from './components/header/Header'
import Sidebar from './components/sidebar/Sidebar'
import Workspaces from './content/workspaces/Workspaces';
import EditWorkspace from './content/workspaces/EditWorkspace';
import Settings from './content/settings/Settings';
import About from './content/about/About';
import Info from './content/info/Info';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

const App = () => {

  const links = [
    { title: 'Workspaces', path: '/workspaces', exact: true, icon: 'bi-box-seam', visible: true, main: Workspaces },
    { title: 'Edit Workspace', path: '/workspaces/edit', icon: '', visible: false, main: EditWorkspace },
    { title: 'Settings', path: '/settings', icon: 'bi-gear-fill', visible: true, main: Settings },
    { title: 'System Info', path: '/info', icon: 'bi-info-circle', visible: true, main: Info },
    { title: 'About', path: '/about', icon: 'bi-question-circle', visible: true, main: About },
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
                  exact={route.exact}
                  children={<route.main />}
                />
              ))}
              <Route path="/">
                <Redirect to={{ pathname: "/workspaces" }} />
              </Route>
            </Switch>
          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;
