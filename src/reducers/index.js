import { combineReducers } from 'redux'


const { SHOW_ALL } = VisibilityFilters


function visibilityFilters(state = SHOW_ALL, action) {
  switch (action.types) {
    case SET_VISIBILITY_FILTER:
      return action.filter
    default:
      return state
  }
}

function parameters(state = [], action) {
  switch (action.type) {
    case ADD_PARAM:
    case DELETE_PARAM:

      break;
    default:
      return state

  }
}
