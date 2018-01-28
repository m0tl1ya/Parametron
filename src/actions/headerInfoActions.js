export const EDIT_TITLE = 'EDIT_TITLE';
export const EDIT_DESCRIPTION = 'EDIT_DESCRIPTION';
export const DISCARD_HEADER_INFO = 'DISCARD_HEADER_INFO';
export const GET_HEADER_INFO = 'GET_HEADER_INFO';


export const editTitle = text => ({
  type: EDIT_TITLE,
  text,
});

export const editDescription = text => ({
  type: EDIT_DESCRIPTION,
  text,
});

export const discardHeaderInfo = () => ({
  type: DISCARD_HEADER_INFO,
});

export const getHeaderInfo = (title, description) => ({
  type: GET_HEADER_INFO,
  title,
  description,
});
