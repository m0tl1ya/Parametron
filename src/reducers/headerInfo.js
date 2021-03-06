import {
  EDIT_TITLE,
  EDIT_DESCRIPTION,
  DISCARD_HEADER_INFO,
  GET_HEADER_INFO,
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

    case GET_HEADER_INFO:
      return {
        title: action.title,
        description: action.description,
      };

    default:
      return state;
  }
}

export default headerInfo;
