export const INITIALIZE_FORM = 'INITIALIZE_FORM';

export const initializeForm = initialValues => ({
  type: INITIALIZE_FORM,
  payload: initialValues,
});
