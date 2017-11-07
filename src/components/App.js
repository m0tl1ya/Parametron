import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
import NavBar from './NavBar';

class App extends Component {
  constructor() {
    super();
    this.state = {
      open: false
    };
  }

  handleToggle() {
    this.setState({
      open: !this.state.open
    })
  }

  render() {
    return (
      <div className="App">
        <NavBar
          onToggle={() => this.handleToggle()}
          open = {this.state.open}
        />
      </div>
    );
  }
}

export default App;
