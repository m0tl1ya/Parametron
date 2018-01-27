import { combineReducers } from 'redux';
import parameters from './parameters';
import {
  getModulesError,
  loadModules,
  modules,
} from './modules';

import headerInfo from './headerInfo'
import idManager from './idManager'

const rootReducer = combineReducers({
  parameters,
  getModulesError,
  loadModules,
  modules,
  headerInfo,
  idManager,
});

export default rootReducer;
