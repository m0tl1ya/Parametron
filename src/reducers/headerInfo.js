import {
  EDIT_TITLE,
  EDIT_DESCRIPTION,
  DISCARD_HEADER_INFO,
} from '../actions/headerInfoActions';


const initialState = [
  {
    title: '',
    description: '',
  },
];


function headerInfo(state = initialState, action) {
  switch (action.type) {
    case EDIT_TITLE:
      return {
        title: action.text,
        description: state.description,
      };

    case EDIT_DESCRIPTION:
      return {
        title: state.title,
        description: action.text,
      };

    case DISCARD_HEADER_INFO:
      return initialState;

    // case DISCARD_PARAMETERS:
    //   return state.filter(parameter =>
    //     parameter.id === -1);
    // case GET_PARAMETERS:
    //   state = [...action.array];
    //   return state

    default:
      return state;
  }
}

export default headerInfo;

// const initialState = [
//   {
//     title: 'Training-Settings',
//     paramters: [],
//     paramterType: [],
//     description: 'This module provides hyperparameter of training.',
//   },
// ];
