import {
  ADD_PARAMETER,
  DELETE_PARAMETER,
  EDIT_PARAMETER,
  EDIT_PARAMETER_TYPE,
  DISCARD_PARAMETERS,
  GET_PARAMETERS,
} from '../actions/createModuleActions';


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

    case DISCARD_PARAMETERS:
      return state.filter(parameter =>
        parameter.id === -1);
    case GET_PARAMETERS:
      // return action.array;
      // console.log(GET_PARAMETERS);
      // console.log(action.array);
      // return state.filter(parameter =>
      //   parameter.id !== -1);
      state = [...action.array];
      return state

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
