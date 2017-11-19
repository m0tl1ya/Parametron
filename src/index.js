import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import './index.css';
import App from './components/App';
import reducer from './reducers';
import registerServiceWorker from './registerServiceWorker';
import ConfigParameter from './containers/ConfigParameter';
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

const store = createStore(reducer);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
