export const FETCH_CARDBOARDS = 'FETCH_CARDBOARDS';
export const SET_CARDBOARDS = 'SET_CARDBOARDS';
export const SET_ROOMTYPE = 'SET_ROOMTYPE';
export const ADD_CARDBOARD = 'ADD_CARDBOARDS';
export const ADD_CARDBOARD_SUCCESS = 'ADD_CARDBOARD_SUCCESS';
export const SET_CARDBOARD_ID_FOR_EDIT = 'SET_CARDBOARD_ID_FOR_EDIT';
export const EDIT_CARDBOARD = 'EDIT_CARDBOARD';
export const EDIT_CARDBOARD_SUCCESS = 'EDIT_CARDBOARD_SUCCESS';
export const DELETE_CARDBOARD = 'DELETE_CARDBOARD';
export const DELETE_CARDBOARD_SUCCESS = 'DELETE_CARDBOARD_SUCCESS';
export const CLEAR_SUCCESS_MSG = 'CLEAR_SUCCESS_MSG';
export const UNSET_PROJECT = 'UNSET_PROJECT';
export const SET_UNIQUE_CARDBOARD_ID = 'SET_UNIQUE_CARDBOARD_ID';

export function setUniqueCardBoardId(cardboardUniqueId) {
  localStorage.setItem('cardboardUniqueId', JSON.stringify(cardboardUniqueId));
  return {
    type: SET_UNIQUE_CARDBOARD_ID,
    payload: { cardboardUniqueId },
  };
}

export function unsetProject() {
  return {
    type: UNSET_PROJECT,
  };
}

export function clearSuccessMsg() {
  return {
    type: CLEAR_SUCCESS_MSG,
  };
}

export function deleteCardBoardSuccess(deletedCardBoard) {
  return {
    type: DELETE_CARDBOARD_SUCCESS,
    payload: { deletedCardBoard },
  };
}

export function deleteCardBoard(cardboardId) {
  return {
    type: DELETE_CARDBOARD,
    payload: { cardboardId },
  };
}

export function editCardBoardSuccess(editedCardBoard) {
  return {
    type: EDIT_CARDBOARD_SUCCESS,
    payload: { editedCardBoard },
  };
}

export function editCardBoard(cardboardName, destinationRoomId) {
  return {
    type: EDIT_CARDBOARD,
    payload: { cardboardName, destinationRoomId },
  };
}

export function setCardBoardIdForEdit(cardboardIdForEdit) {
  return {
    type: SET_CARDBOARD_ID_FOR_EDIT,
    payload: { cardboardIdForEdit },
  };
}

export function addCarboardSuccess(newCardBoard) {
  return {
    type: ADD_CARDBOARD_SUCCESS,
    payload: { newCardBoard },
  };
}

export const SET_PROJECT_ID = 'SET_PROJECT_ID';

export function setProjectId(projectId) {
  localStorage.setItem('projectId', JSON.stringify(projectId));
  return {
    type: SET_PROJECT_ID,
    payload: { projectId },
  };
}

export function addCarboard(cardboardName, destinationRoomId) {
  return {
    type: ADD_CARDBOARD,
    payload: { cardboardName, destinationRoomId },
  };
}

export function setRoomType(roomsType) {
  return {
    type: SET_ROOMTYPE,
    payload: { roomsType },
  };
}

export function setCardBoards(cardboards) {
  return {
    type: SET_CARDBOARDS,
    payload: { cardboards },
  };
}

export function fetchCardBoards() {
  return {
    type: FETCH_CARDBOARDS,
  };
}
