import db from '../lib/db';

export const GET_PROJECTS_ERROR = 'GET_PROJECTS_ERROR';
export const LOAD_PROJECTS = 'LOAD_PROJECTS';
export const FETCH_PROJECTS_SUCCESS = 'FETCH_PROJECTS_SUCCESS';
export const FETCH_PROJECTS = 'FETCH_PROJECTS';


export const getProjectsError = status => ({
  type: 'GET_PROJECTS_ERROR',
  hasError: status,
});

export const loadProjects = status => ({
  type: 'LOAD_PROJECTS',
  isLoading: status,
});

export const fetchProjectsSuccess = projects => ({
  type: 'FETCH_PROJECTS_SUCCESS',
  projects,
});

export function fetchProjects() {
  return (dispatch) => {
    dispatch(loadProjects(true));

    db.table('projects')
      .toArray()
      .then((projects) => {
        dispatch(loadProjects(false));

        return projects;
      })
      .then(projects => dispatch(fetchProjectsSuccess(projects)))
      .catch(() => dispatch(getProjectsError(true)));
  };
}
