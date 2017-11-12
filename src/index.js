import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App  from './components/App';
import registerServiceWorker from './registerServiceWorker';
// import {
//   BrowserRouter as Router,
//   Route
// } from 'react-router-dom'
//
// import Layout from './components/App';

//
//
//

//
// const App = () => (
//   <Router history={browserHistory} routes={routes} onUpdate={() => window.scrollTo(0, 0)} />
// );

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
