import axios from 'axios';

import {
  ADD_CARDBOARD, DELETE_CARDBOARD, EDIT_CARDBOARD, FETCH_CARDBOARDS,
  addCarboardSuccess, deleteCardBoardSuccess, editCardBoardSuccess,
  setCardBoards, setProjectId, setRoomType,
} from '../actions/CardBoards';

const CardBoards = (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_CARDBOARDS: {
      const state = store.getState();
      const { token, userId } = state.user;
      axios.get(`https://mes-cartons-nazca.site/mes-cartons/public/api/users/${userId}/projects/last`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((response) => {
          store.dispatch(setCardBoards(response.data.cardboards));
          store.dispatch(setRoomType(response.data.rooms));
          store.dispatch(setProjectId(response.data.id));
          next(action);
        })
        .catch((error) => {
          console.log(error);
          window.location.href = '/creer-mon-demenagement';
          next(action);
        });
      break;
    }
    case ADD_CARDBOARD: {
      const state = store.getState();
      const { token } = state.user;
      const { projectId } = state.CardBoards;
      const { cardboardName, destinationRoomId } = action.payload;
      axios.post(
        `https://mes-cartons-nazca.site/mes-cartons/public/api/projects/${projectId}/cardboards`,
        {
          cardboardName,
          destinationRoomId,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      ).then((response) => {
        store.dispatch(addCarboardSuccess(response.data.cardboard));
        next(action);
      }).catch((error) => {
        console.log(error);
        next(action);
      });
      break;
    }
    case EDIT_CARDBOARD: {
      const state = store.getState();
      const { token } = state.user;
      const { cardboardIdForEdit } = state.CardBoards;
      const { cardboardName, destinationRoomId } = action.payload;
      axios.patch(
        `https://mes-cartons-nazca.site/mes-cartons/public/api/cardboards/${cardboardIdForEdit}`,
        {
          name: cardboardName,
          destinationRoomId,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      ).then((response) => {
        store.dispatch(editCardBoardSuccess(response.data.cardboard));
        next(action);
      }).catch((error) => {
        console.log(error);
        next(action);
      });
      break;
    }
    case DELETE_CARDBOARD: {
      const state = store.getState();
      const { token } = state.user;
      const { cardboardId } = action.payload;
      axios.delete(
        `https://mes-cartons-nazca.site/mes-cartons/public/api/cardboards/${cardboardId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      // eslint-disable-next-line no-unused-vars
      ).then((response) => {
        store.dispatch(deleteCardBoardSuccess(cardboardId));
        next(action);
      }).catch((error) => {
        console.log(error);
        next(action);
      });
      break;
    }
    default:
      next(action);
  }
};

export default CardBoards;
