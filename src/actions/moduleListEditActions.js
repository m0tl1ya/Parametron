export const EDIT_MODULE = 'EDIT_MODULE';
export const SELECT_MODULE = 'SELECT_MODULE';
export const UNTICK_MODULE = 'UNTICK_MODULE';
export const RESET_SELECTED = 'RESET_SELECTED';

export const editModule = id => ({
  type: 'EDIT_MODULE',
  id,
});

export const selectModule = id => ({
  type: 'SELECT_MODULE',
  id,
});

export const untickModule = id => ({
  type: 'UNTICK_MODULE',
  id,
});

export const resetSelected = () => ({
  type: 'RESET_SELECTED',
});
