import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom'

// import Layout from './Layout';
import ProjectTable from './ProjectTable';
import ConfigProject from './ConfigProject';
import ViewModules from '../containers/ViewModules';
import ConfigModule from '../containers/ConfigModule';
import NavBar from './NavBar';


const App = () => (
  <BrowserRouter>
    <div>
      <NavBar />
      <Switch>
        <Route exact path="/" component={ProjectTable} />
        <Route path="/project-table" component={ProjectTable} />
        <Route path="/module-table" component={ViewModules} />
        <Route path="/config-project" component={ConfigProject} />
        <Route path="/config-module" component={ConfigModule} />
      </Switch>
    </div>
  </BrowserRouter>
);


// const App = ({ children }) => (
//   <BrowserRouter>
//     <div>
//       <Route exact path="/" component={Layout} >
//         <Route path="/ProjectTable" component={ProjectTable} />
//         <Route path="/addproject" component={ConfigProject} />
//         <Route path="/addmodule" component={ConfigModule} />
//       </Route>
//     </div>
//   </BrowserRouter>
// );

// const routes = (
//   <Route path="/" component={Layout}>
//     <Route path="/projects" component={ProjectTable} />
//     <Route path="/addproject" component={ConfigProject} />
//     <Route path="/addmodule" component={ConfigModule} />
//   </Route>
// );
export default App;

// class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       open: false
//     };
//   }
//
//   handleToggle() {
//     this.setState({
//       open: !this.state.open
//     })
//   }
//
//   render() {
//     return (
//       <div className="App">
//         <NavBar
//           onToggle={() => this.handleToggle()}
//           open = {this.state.open}
//         />
//       </div>
//     );
//   }
// }
//
// export default App;
