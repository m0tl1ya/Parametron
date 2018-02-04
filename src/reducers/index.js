import { combineReducers } from 'redux';
import parameters from './parameters';
import {
  getModulesError,
  loadModules,
  modules,
} from './modules';
import {
  getProjectsError,
  loadProjects,
  projects,
} from './projects';

import headerInfo from './headerInfo';
import idManager from './idManager';

const rootReducer = combineReducers({
  parameters,
  getModulesError,
  loadModules,
  getProjectsError,
  loadProjects,
  projects,
  modules,
  headerInfo,
  idManager,
});

export default rootReducer;
