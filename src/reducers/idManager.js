import {
  EDIT_MODULE,
  SELECT_MODULE,
  UNTICK_MODULE,
} from '../actions/moduleListEditActions';


const initialState = {
  id: -100,
  selected: [],
};


function idManager(state = initialState, action) {
  switch (action.type) {
    case EDIT_MODULE:
      return {
        id: action.id,
        selected: state.selected,
      };
    case SELECT_MODULE:
      return {
        id: state.id,
        selected: state.selected.concat(action.id),
      };
    case UNTICK_MODULE:
      return {
        id: state.id,
        selected: state.selected.filter(id =>
          id !== action.id),
      };
    default:
      return state;
  }
}

export default idManager;

// const initialState = [
//   {
//     title: 'Training-Settings',
//     paramters: [],
//     paramterType: [],
//     description: 'This module provides hyperparameter of training.',
//   },
// ];
