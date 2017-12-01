export const ADD_PARAMETER = 'ADD_PARAMETER';
export const DELETE_PARAMETER = 'DELETE_PARAMETER';
export const EDIT_PARAMETER = 'EDIT_PARAMETER';
export const EDIT_PARAMETER_TYPE = 'EDIT_PARAMETER_TYPE';
export const DISCARD_PARAMETERS = 'DISCARD_PARAMETERS';

export const addParameter = text => ({
  type: ADD_PARAMETER,
  text,
});

export const deleteParameter = id => ({
  type: DELETE_PARAMETER,
  id,
});


export const editParameter = (id, text) => ({
  type: EDIT_PARAMETER,
  id,
  text,
});

export const editParameterType = (id, parameterType) => ({
  type: EDIT_PARAMETER_TYPE,
  id,
  parameterType,
});

export const discardParameters = () => ({
  type: DISCARD_PARAMETERS,
});
