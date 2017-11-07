export const CREATE_PROJECT = 'CREATE_PROJECT'
export const SAVE_PROJECT = 'SAVE_PROJECT'
export const DISCARD_PROJECT = 'DISCARD_PROJECT'

export const createProject = initialValues => ({
  type: CREATE_PROJECT,
  payload: initialValues,
});
