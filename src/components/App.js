import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
import { BrowserRouter, Route, Link } from 'react-router-dom'

import Layout from './Layout';
import ProjectTable from './ProjectTable';
import ConfigProject from './ConfigProject';
import ConfigModule from './ConfigModule';
import NavBar from './NavBar';

const App = ({ children }) => (
  <BrowserRouter>
    <div>
      <Route exact path="/" component={Layout} />
      <Route path="/ProjectTable" component={ProjectTable} />
      <Route path="/addproject" component={ConfigProject} />
      <Route path="/addmodule" component={ConfigModule} />
    </div>
  </BrowserRouter>
);

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
