import {
  ADD_PROJECT_ROOM_SUCCESS, CLEAR_ERROR_DELETE_MSG, DELETE_PROJECT_ADDED_ROOM_SUCCESS,
  RESET_PROJECT_FORM_ERROR,
  SET_ERROR_DELETE_MSG,
  SET_PROJECT_ADDED_ROOM, SET_PROJECT_ARRIVAL_ADDRESS_SUCCESS, SET_PROJECT_CARDBOARDS_SUCCESS,
  SET_PROJECT_FORM_ERROR, SET_PROJECT_ROOM_TYPES, SET_PROJECT_SUCCESS,
} from '../actions/Project';

const projectId = JSON.parse(localStorage.getItem('projectId'));

const initialState = {
  projectId: projectId || null,
  projectRoomTypes: [],
  projectAddRoomList: [],
  arrivalAddress: [],
  cardboardsForThisProjectList: [],
  loader: true,
  errorMsg: '',
  error: null,
};

function reducer(state = initialState, action = {}) {
  const { type, payload } = action;

  switch (type) {
    case SET_PROJECT_SUCCESS: {
      const { projectId } = payload;
      return {
        ...state,
        projectId,
      };
    }
    case SET_PROJECT_ROOM_TYPES: {
      const { projectRoomTypes } = payload;
      return {
        ...state,
        projectRoomTypes,
      };
    }
    case SET_PROJECT_ADDED_ROOM: {
      const { addedRoomList } = payload;
      return {
        ...state,
        projectAddRoomList: addedRoomList,
        loader: false,
      };
    }
    case ADD_PROJECT_ROOM_SUCCESS: {
      const { newRoom } = payload;
      return {
        ...state,
        projectAddRoomList: [...state.projectAddRoomList, newRoom],
      };
    }
    case DELETE_PROJECT_ADDED_ROOM_SUCCESS: {
      const { deletedProjectRoom } = payload;
      const updatedProjectAddedRoomList = state.projectAddRoomList.filter(
        (room) => room.id !== deletedProjectRoom,
      );
      return {
        ...state,
        projectAddRoomList: updatedProjectAddedRoomList,
      };
    }
    case SET_ERROR_DELETE_MSG: {
      return {
        ...state,
        errorMsg: 'Il y a déja un carton dans cette pièces merci de le supprimer',
      };
    }
    case CLEAR_ERROR_DELETE_MSG: {
      return {
        ...state,
        errorMsg: '',
      };
    }
    case SET_PROJECT_FORM_ERROR: {
      const { error } = payload;
      return {
        ...state,
        error,
      };
    }
    case RESET_PROJECT_FORM_ERROR: {
      return {
        ...state,
        error: '',
      };
    }
    case SET_PROJECT_ARRIVAL_ADDRESS_SUCCESS: {
      const { arrivalAddress } = payload;
      return {
        ...state,
        arrivalAddress,
        loader: true,
      };
    }
    case SET_PROJECT_CARDBOARDS_SUCCESS: {
      const { cardboards } = payload;
      return {
        ...state,
        cardboardsForThisProjectList: cardboards,
        loader: false,
      };
    }
    default:
      return state;
  }
}

export default reducer;
