import db from '../lib/db';

export const GET_MODULES_ERROR = 'GET_MODULES_ERROR';
export const LOAD_MODULES = 'LOAD_MODULES';
export const FETCH_MODULES_SUCCESS = 'FETCH_MODULES_SUCCESS';
export const FETCH_MODULES = 'FETCH_MODULES';


export const getModulesError = status => ({
  type: 'GET_MODULES_ERROR',
  hasError: status,
});

export const loadModules = status => ({
  type: 'LOAD_MODULES',
  isLoading: status,
});

export const fetchModulesSuccess = modules => ({
  type: 'FETCH_MODULES_SUCCESS',
  modules,
});


export function fetchModules() {
  return (dispatch) => {
    dispatch(loadModules(true));

    db.table('modules')
      .toArray()
      .then((modules) => {
        dispatch(loadModules(false));

        return modules;
      })
      .then(modules => dispatch(fetchModulesSuccess(modules)))
      .catch(() => dispatch(getModulesError(true)));
  };
}
