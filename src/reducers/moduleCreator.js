import {ADD_PARAM, DELETE_PARAM, SAVE_MODULE};

const initialState = [
  {
    title: 'Training-Settings',
    paramters: [],
    paramterType: [],
    description: 'This module provides hyperparameter of training.',
  }
];


function moduleCreator(state = initialState, action) {
  switch (action.type) {
    case ADD_PARAM:

      break;
    case DELETE_PARAM:
    case SAVE_MODULE:
    default:
      return state;

  }
}
