import {
  EDIT_MODULE,
  SELECT_MODULE,
  UNTICK_MODULE,
  RESET_SELECTED,
} from '../actions/moduleListEditActions';


const initialState = {
  editing: -100,
  selected: [],
};


function idManager(state = initialState, action) {
  switch (action.type) {
    case EDIT_MODULE:
      return {
        editing: action.id,
        selected: state.selected,
      };
    case SELECT_MODULE:
      return {
        editing: state.editing,
        selected: state.selected.concat(action.id),
      };
    case UNTICK_MODULE:
      return {
        editing: state.editing,
        selected: state.selected.filter(id =>
          id !== action.id),
      };
    case RESET_SELECTED:
      return {
        editing: state.editing,
        selected: [],
      };
    default:
      return state;
  }
}

export default idManager;
