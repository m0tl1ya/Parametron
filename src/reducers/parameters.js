import { ADD_PARAMETER, DELETE_PARAMETER, EDIT_PARAMETER, EDIT_PARAMETER_TYPE } from '../actions/configModuleActions';

const initialState = [
  // {
  //   id: 0,
  //   text: '',
  //   type: '',
  // },
];

const initialParameterType = 'Number';

function parameters(state = initialState, action) {
  switch (action.type) {
    case ADD_PARAMETER:
      // console.log('ADD_PARAMETER ADD_PARAMETER ADD_PARAMETER')
      // return Object.assign({}, state, {
      //   id: state.reduce((maxId, parameter) => Math.max(parameter.id, maxId), -1) + 1,
      //   text: action.text,
      // });
      return [
        ...state,
        {
          id: state.reduce((maxId, parameter) => Math.max(parameter.id, maxId), -1) + 1,
          text: action.text,
          type: initialParameterType,
        },
      ];
      // return Object.assign({}, state, {
      //   text: action.filter
      // })
    case DELETE_PARAMETER:
      return state.filter(parameter =>
        parameter.id !== action.id);

    case EDIT_PARAMETER:
      return state.map(parameter =>
        parameter.id === action.id ?
        { ...parameter, text: action.text } :
        parameter);

    case EDIT_PARAMETER_TYPE:
      return state.map(parameter =>
        parameter.id === action.id ?
        { ...parameter, type: action.parameterType } :
        parameter);
    default:
      return state;
  }
}

export default parameters;

// const initialState = [
//   {
//     title: 'Training-Settings',
//     paramters: [],
//     paramterType: [],
//     description: 'This module provides hyperparameter of training.',
//   },
// ];
