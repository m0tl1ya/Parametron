import {
  GET_PROJECTS_ERROR,
  LOAD_PROJECTS,
  FETCH_PROJECTS_SUCCESS,
} from '../actions/projectListActions';


export const getProjectsError = (state = false, action) => {
  switch (action.type) {
    case GET_PROJECTS_ERROR:
      return action.hasError;
    default:
      return state;
  }
};

export const loadProjects = (state = false, action) => {
  switch (action.type) {
    case LOAD_PROJECTS:
      return action.isLoading;
    default:
      return state;
  }
};


export const projects = (state = [], action) => {
  switch (action.type) {
    case FETCH_PROJECTS_SUCCESS:
      return action.projects;
    default:
      return state;
  }
};

export default projects;
