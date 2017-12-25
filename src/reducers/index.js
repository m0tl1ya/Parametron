import { combineReducers } from 'redux';
import parameters from './parameters';
import {
  getModulesError,
  loadModules,
  modules,
} from './modules';

const rootReducer = combineReducers({
  parameters,
  getModulesError,
  loadModules,
  modules,
});

export default rootReducer;
