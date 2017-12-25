import React from 'react';
import ReactDOM from 'react-dom';
// import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux';
// import thunkMiddleware from 'redux-thunk'
// import { createLogger } from 'redux-logger'

import configureStore from './store/index'
import './index.css';
import App from './components/App';
// import rootReducer from './reducers';
import registerServiceWorker from './registerServiceWorker';


import db from './lib/db';

db.open();

const store = configureStore();

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
