import db from '../lib/db'

export const LOAD_DATA = 'LOAD_DATA';


export const addParameter = text => ({
  type: ADD_PARAMETER,
  text,
});
