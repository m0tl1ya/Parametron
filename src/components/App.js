import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// import Layout from './Layout';

import ConfigProject from './ConfigProject';
import ViewProjects from '../containers/ViewProjects';
import ViewModules from '../containers/ViewModules';
import CreateModule from '../containers/CreateModule';
import EditModule from '../containers/EditModule';
import CreateProject from '../containers/CreateProject';
import NavBar from './NavBar';


const App = () => (
  <BrowserRouter>
    <div>
      <NavBar />
      <Switch>
        <Route exact path="/" component={ViewProjects} />
        <Route path="/project-list" component={ViewProjects} />
        <Route path="/module-list" component={ViewModules} />
        <Route path="/create-project" component={CreateProject} />
        <Route path="/config-project" component={ConfigProject} />
        <Route path="/create-module" component={CreateModule} />
        <Route path="/edit-module" component={EditModule} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default App;
