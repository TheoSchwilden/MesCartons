import axios from 'axios';

import {
  itemQuantitySuccess,
  addItemSuccess,
  ADD_ITEM, ADD_ITEM_QUANTITY, editItemNameSuccess, EDIT_ITEM_NAME,
  FETCH_ITEMS, setCardboardInfo, setItems, SUBSTRACT_ITEM_QUANTITY,
  DELETE_ITEM, deleteItemSuccess, SET_FRAGILITY, setFragilitySuccess,
  SET_MOBILITY, setMobilitySuccess, SET_WEIGHT, setWeightSuccess,
  SET_SELECT_STATUS, setSelectStatusSuccess,
} from '../actions/Items';

const items = (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_ITEMS: {
      const state = store.getState();
      const { token } = state.user;
      const { cardboardUniqueId } = state.CardBoards;
      axios
        .get(`https://mes-cartons-nazca.site/mes-cartons/public/api/cardboards/${cardboardUniqueId}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          store.dispatch(setItems(response.data.items));
          store.dispatch(setCardboardInfo(response.data));
          next(action);
        })
        .catch((error) => {
          console.log(error);
          next(action);
        });
      break;
    }
    case ADD_ITEM: {
      const state = store.getState();
      const { token } = state.user;
      const { cardboardUniqueId } = state.CardBoards;
      const { addInputValue } = action.payload;
      axios.post(
        `https://mes-cartons-nazca.site/mes-cartons/public/api/cardboards/${cardboardUniqueId}/items`,
        {
          itemName: addInputValue,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      )
        .then((response) => {
          store.dispatch(addItemSuccess(response.data.item));
          next(action);
        })
        .catch((error) => {
          console.log(error);
          next(action);
        });
      break;
    }
    case EDIT_ITEM_NAME: {
      const state = store.getState();
      const { token } = state.user;
      const { itemId } = state.items;
      const { editedItem } = action.payload;
      axios.patch(
        `https://mes-cartons-nazca.site/mes-cartons/public/api/cardboarditems/${itemId}`,
        {
          itemName: editedItem,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      )
        .then((response) => {
          store.dispatch(editItemNameSuccess(response.data.item));
          next(action);
        })
        .catch((error) => {
          console.log(error);
          next(action);
        });
      break;
    }
    case ADD_ITEM_QUANTITY: {
      const state = store.getState();
      const { token } = state.user;
      const { itemId } = state.items;
      axios.patch(
        `https://mes-cartons-nazca.site/mes-cartons/public/api/cardboarditems/${itemId}/addonequantity`,
        {
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      )
        .then((response) => {
          store.dispatch(itemQuantitySuccess(response.data.item));
        })
        .catch((error) => {
          console.log(error);
        });
      break;
    }
    case SUBSTRACT_ITEM_QUANTITY: {
      const state = store.getState();
      const { token } = state.user;
      const { itemId } = state.items;
      axios.patch(
        `https://mes-cartons-nazca.site/mes-cartons/public/api/cardboarditems/${itemId}/removeonequantity`,
        {
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      )
        .then((response) => {
          store.dispatch(itemQuantitySuccess(response.data.item));
        })
        .catch((error) => {
          console.log(error);
        });
      break;
    }
    case DELETE_ITEM: {
      const state = store.getState();
      const { token } = state.user;
      const { itemId } = state.items;
      axios.delete(`https://mes-cartons-nazca.site/mes-cartons/public/api/cardboarditems/${itemId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        // eslint-disable-next-line no-unused-vars
        .then((response) => {
          store.dispatch(deleteItemSuccess(itemId));
          next(action);
        })
        .catch((error) => {
          console.log(error);
          next(action);
        });
      break;
    }
    case SET_FRAGILITY: {
      const state = store.getState();
      const { token } = state.user;
      const { cardBoardInfo } = state.items;
      const { isFragile } = action.payload;
      axios.patch(
        `https://mes-cartons-nazca.site/mes-cartons/public/api/cardboards/${cardBoardInfo.id}`,
        {
          fragility: isFragile,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      ).then((response) => {
        store.dispatch(setFragilitySuccess(response.data.cardboard));
        next(action);
      }).catch((error) => {
        next(action);
        console.log(error);
      });
      break;
    }
    case SET_MOBILITY: {
      const state = store.getState();
      const { token } = state.user;
      const { cardBoardInfo } = state.items;
      const { isMobile } = action.payload;
      axios.patch(
        `https://mes-cartons-nazca.site/mes-cartons/public/api/cardboards/${cardBoardInfo.id}`,
        {
          mobility: isMobile,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      ).then((response) => {
        store.dispatch(setMobilitySuccess(response.data.cardboard));
        next(action);
      }).catch((error) => {
        next(action);
        console.log(error);
      });
      break;
    }
    case SET_WEIGHT: {
      const state = store.getState();
      const { token } = state.user;
      const { cardBoardInfo } = state.items;
      const { isHeavy } = action.payload;
      axios.patch(
        `https://mes-cartons-nazca.site/mes-cartons/public/api/cardboards/${cardBoardInfo.id}`,
        {
          weight: isHeavy,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      ).then((response) => {
        store.dispatch(setWeightSuccess(response.data.cardboard));
        next(action);
      }).catch((error) => {
        next(action);
        console.log(error);
      });
      break;
    }
    case SET_SELECT_STATUS: {
      const state = store.getState();
      const { token } = state.user;
      const { cardBoardInfo } = state.items;
      const { status } = action.payload;
      axios.patch(
        `https://mes-cartons-nazca.site/mes-cartons/public/api/cardboards/${cardBoardInfo.id}`,
        {
          status,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      ).then((response) => {
        store.dispatch(setSelectStatusSuccess(response.data.cardboard));
        next(action);
      }).catch((error) => {
        next(action);
        console.log(error);
      });
      break;
    }
    default:
      next(action);
  }
};

export default items;
