import {
  GET_MODULES_ERROR,
  LOAD_MODULES,
  FETCH_MODULES_SUCCESS,
} from '../actions/moduleListActions';


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

// export const editModule = (state = false, action) => {
//   switch (action.type) {
//     case EDIT_MODULE:
//       return action.isEditing;
//     default:
//       return state;
//   }
// };

export const modules = (state = [], action) => {
  switch (action.type) {
    case FETCH_MODULES_SUCCESS:
      return action.modules;
    default:
      return state;
  }
};

export default modules;
