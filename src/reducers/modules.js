import {
  GET_MODULES_ERROR,
  LOAD_MODULES,
  FETCH_MODULES_SUCCESS,
} from '../actions/moduleListActions';

// import db from '../lib/db';

// const initModules = [];

// db.modules.toArray().then(function (module) {
//   console.log('ok');
//   console.log(module);
//   initModules.push(module);
// });
//
// console.log('initModules')
// console.log(initModules[0])

// const initialState = {
//   modules: initModules,
// };
//
// function modules(state = initialState, action) {
//   switch (action.type) {
//     case LOAD_MODULES:
//       return { modules: action.modules };
//
//     default:
//       return state;
//   }
// };

export const getModulesError = (state = false, action) => {
  switch (action.type) {
    case GET_MODULES_ERROR:
      return action.hasError;
    default:
      return state;
  }
};

export const loadModules = (state = false, action) => {
  switch (action.type) {
    case LOAD_MODULES:
      return action.isLoading;
    default:
      return state;
  }
};

export const modules = (state = [], action) => {
  switch (action.type) {
    case FETCH_MODULES_SUCCESS:
      return action.modules;
    default:
      return state;
  }
};

export default modules;
