import {
  EDIT_MODULE,
} from '../actions/moduleListEditActions';


const initialState = {
  id: -1,
};


function idManager(state = initialState, action) {
  switch (action.type) {
    case EDIT_MODULE:
      return {
        id: action.id,
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
