export const SET_PROJECT = 'SET_PROJECT';
export const SET_PROJECT_SUCCESS = 'SET_PROJECT_SUCCESS';
export const FETCH_PROJECT_ROOM_TYPES = 'FETCH_PROJECT_ROOM_TYPES';
export const SET_PROJECT_ROOM_TYPES = 'SET_PROJECT_ROOM_TYPES';
export const ADD_PROJECT_ROOM = 'ADD_PROJECT_ROOM';
export const ADD_PROJECT_ROOM_SUCCESS = 'ADD_PROJECT_ROOM_SUCCESS';
export const FETCH_PROJECT_ADDED_ROOM = 'FETCH_PROJECT_ADDED_ROOM';
export const SET_PROJECT_ADDED_ROOM = 'SET_PROJECT_ADDED_ROOM';
export const DELETE_PROJECT_ADDED_ROOM = 'DELETE_PROJECT_ADDED_ROOM';
export const DELETE_PROJECT_ADDED_ROOM_SUCCESS = 'DELETE_PROJECT_ADDED_ROOM_SUCCESS';
export const SET_ERROR_DELETE_MSG = 'SET_ERROR_DELETE_MSG';
export const CLEAR_ERROR_DELETE_MSG = 'CLEAR_ERROR_DELETE_MSG';
export const SET_PROJECT_FORM_ERROR = 'SET_PROJECT_FORM_ERROR';
export const RESET_PROJECT_FORM_ERROR = 'RESET_PROJECT_FORM_ERROR';
export const FETCH_PROJECT_BY_USER = 'FETCH_PROJECT_BY_USER';
export const SET_PROJECT_ARRIVAL_ADDRESS_SUCCESS = 'SET_PROJECT_ARRIVAL_ADDRESS_SUCCESS';
export const SET_PROJECT_CARDBOARDS_SUCCESS = 'SET_PROJECT_CARDBOARDS_SUCCESS';

export function setProjectCardboardsSuccess(cardboards) {
  return {
    type: SET_PROJECT_CARDBOARDS_SUCCESS,
    payload: { cardboards },
  };
}

export function setProjectArrivalAddressSuccess(arrivalAddress) {
  return {
    type: SET_PROJECT_ARRIVAL_ADDRESS_SUCCESS,
    payload: { arrivalAddress },
  };
}

export function fetchProjectByUser() {
  return {
    type: FETCH_PROJECT_BY_USER,
  };
}

export function resetProjectFormError() {
  return {
    type: RESET_PROJECT_FORM_ERROR,
  };
}

export function setProjectFormError(error) {
  return {
    type: SET_PROJECT_FORM_ERROR,
    payload: { error },
  };
}

export function clearErrorDeleteMsg() {
  return {
    type: CLEAR_ERROR_DELETE_MSG,
  };
}

export function setErrorDeleteMsg() {
  return {
    type: SET_ERROR_DELETE_MSG,
  };
}

export function deleteProjectAddedRoomSuccess(deletedProjectRoom) {
  return {
    type: DELETE_PROJECT_ADDED_ROOM_SUCCESS,
    payload: { deletedProjectRoom },
  };
}

export function deleteProjectAddedRoom(projectRoomId) {
  return {
    type: DELETE_PROJECT_ADDED_ROOM,
    payload: { projectRoomId },
  };
}

export function setProjectAddedRoom(addedRoomList) {
  return {
    type: SET_PROJECT_ADDED_ROOM,
    payload: { addedRoomList },
  };
}

export function fetchProjectAddedRoom() {
  return {
    type: FETCH_PROJECT_ADDED_ROOM,
  };
}

export function addProjectRoomSuccess(newRoom) {
  return {
    type: ADD_PROJECT_ROOM_SUCCESS,
    payload: { newRoom },
  };
}

export function addProjectRoom(roomNameDTO, roomTypeId) {
  return {
    type: ADD_PROJECT_ROOM,
    payload: { roomNameDTO, roomTypeId },
  };
}

export function setProjectRoomTypes(projectRoomTypes) {
  return {
    type: SET_PROJECT_ROOM_TYPES,
    payload: { projectRoomTypes },
  };
}

export function fetchProjectRoomTypes() {
  return {
    type: FETCH_PROJECT_ROOM_TYPES,
  };
}

export function setProjectSuccess(projectId) {
  localStorage.setItem('projectId', JSON.stringify(projectId));
  return {
    type: SET_PROJECT_SUCCESS,
    payload: { projectId },
  };
}

export function setProject(movingAt, startingAddress, arrivalAddress) {
  return {
    type: SET_PROJECT,
    payload: { movingAt, startingAddress, arrivalAddress },
  };
}
