import {
  SET_ITEMS,
  SET_CARDBOARD_INFO, ADD_ITEM_SUCCESS,
  SET_ITEM_ID, EDIT_ITEM_NAME_SUCCESS, ITEM_QUANTITY_SUCCESS,
  DELETE_ITEM_SUCCESS, SET_FRAGILITY_SUCCESS, SET_MOBILITY_SUCCESS,
  SET_WEIGHT_SUCCESS, SET_SELECT_STATUS_SUCCESS, SET_LOADING,
} from '../actions/Items';

const initialState = {
  itemList: [],
  cardBoardInfo: [],
  itemId: null,
  loader: true,
};

function reducer(state = initialState, action = {}) {
  const { type, payload } = action;

  switch (type) {
    case SET_ITEMS: {
      const { items } = payload;
      return {
        ...state,
        itemList: items,
        loader: false,
      };
    }

    case SET_CARDBOARD_INFO: {
      const { cardBoardInfo } = payload;
      return {
        ...state,
        cardBoardInfo,
        loader: false,
      };
    }

    case ADD_ITEM_SUCCESS: {
      const { newItem } = payload;
      return {
        ...state,
        itemList: [...state.itemList, newItem],
      };
    }
    case SET_ITEM_ID: {
      const { itemId } = payload;
      return {
        ...state,
        itemId,
      };
    }
    case EDIT_ITEM_NAME_SUCCESS: {
      const { editedItemName } = payload;
      const updatedItemList = state.itemList.map((item) => {
        if (item.id === state.itemId) {
          return {
            ...item,
            ...editedItemName,
          };
        }
        return item;
      });
      return {
        ...state,
        itemList: updatedItemList,
      };
    }
    case ITEM_QUANTITY_SUCCESS: {
      const { newQuantity } = payload;
      const updatedItemList = state.itemList.map((item) => {
        if (item.id === state.itemId) {
          return {
            ...item,
            ...newQuantity,
          };
        }
        return item;
      });
      return {
        ...state,
        itemList: updatedItemList,
      };
    }
    case DELETE_ITEM_SUCCESS: {
      const { deletedItem } = payload;
      const updatedItemList = state.itemList.filter(
        (item) => item.id !== deletedItem,
      );
      return {
        ...state,
        itemList: updatedItemList,
      };
    }
    case SET_FRAGILITY_SUCCESS: {
      const { fragility } = payload;
      return {
        ...state,
        cardBoardInfo: fragility,
      };
    }
    case SET_MOBILITY_SUCCESS: {
      const { mobility } = payload;
      return {
        ...state,
        cardBoardInfo: mobility,
      };
    }
    case SET_WEIGHT_SUCCESS: {
      const { weight } = payload;
      return {
        ...state,
        cardBoardInfo: weight,
      };
    }
    case SET_SELECT_STATUS_SUCCESS: {
      const { newStatus } = payload;
      return {
        ...state,
        cardBoardInfo: newStatus,
      };
    }
    case SET_LOADING: {
      const { loading } = payload;
      return {
        ...state,
        loader: loading,
      };
    }
    default:
      return state;
  }
}

export default reducer;
