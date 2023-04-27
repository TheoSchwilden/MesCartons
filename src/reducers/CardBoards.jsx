import {
  ADD_CARDBOARD_SUCCESS, CLEAR_SUCCESS_MSG,
  DELETE_CARDBOARD_SUCCESS, EDIT_CARDBOARD_SUCCESS, SET_CARDBOARDS,
  SET_CARDBOARD_ID_FOR_EDIT, SET_PROJECT_ID, SET_ROOMTYPE, SET_UNIQUE_CARDBOARD_ID, UNSET_PROJECT,
} from '../actions/CardBoards';

const cardboardUniqueId = JSON.parse(localStorage.getItem('cardboardUniqueId'));
const projectId = JSON.parse(localStorage.getItem('projectId'));

const initialState = {
  cardboardsList: [],
  roomsType: [],
  cardboardIdForEdit: null,
  cardboardUniqueId: cardboardUniqueId || null,
  projectId: projectId || null,
  addSuccessMsg: null,
  loader: true,
};

function reducer(state = initialState, action = {}) {
  const { type, payload } = action;

  switch (type) {
    case SET_CARDBOARDS: {
      const { cardboards } = payload;
      return {
        ...state,
        cardboardsList: cardboards,
        loader: false,
      };
    }
    case SET_ROOMTYPE: {
      const { roomsType } = payload;
      return {
        ...state,
        roomsType,
      };
    }
    case SET_PROJECT_ID: {
      const { projectId } = payload;
      return {
        ...state,
        projectId,
      };
    }
    case ADD_CARDBOARD_SUCCESS: {
      const { newCardBoard } = payload;
      return {
        ...state,
        cardboardsList: [...state.cardboardsList, newCardBoard],
        addSuccessMsg: 'Votre carton a bien été ajouté !',
      };
    }
    case SET_CARDBOARD_ID_FOR_EDIT: {
      const { cardboardIdForEdit } = payload;
      return {
        ...state,
        cardboardIdForEdit,
      };
    }
    case EDIT_CARDBOARD_SUCCESS: {
      const { editedCardBoard } = payload;
      const updatedCardboardsList = state.cardboardsList.map((cardboard) => {
        if (cardboard.id === state.cardboardIdForEdit) {
          return {
            ...cardboard,
            ...editedCardBoard,
          };
        }
        return cardboard;
      });
      return {
        ...state,
        cardboardsList: updatedCardboardsList,
      };
    }
    case DELETE_CARDBOARD_SUCCESS: {
      const { deletedCardBoard } = payload;
      const updatedCardboardsList = state.cardboardsList.filter(
        (cardboard) => cardboard.id !== deletedCardBoard,
      );
      return {
        ...state,
        cardboardsList: updatedCardboardsList,
      };
    }
    case CLEAR_SUCCESS_MSG:
      return {
        ...state,
        addSuccessMsg: '',
      };
    case SET_UNIQUE_CARDBOARD_ID: {
      const { cardboardUniqueId } = payload;
      return {
        ...state,
        cardboardUniqueId,
      };
    }
    case UNSET_PROJECT:
      return {
        ...state,
        projectId: null,
        cardboardsList: [],
        roomsType: [],
      };
    default:
      return state;
  }
}

export default reducer;
