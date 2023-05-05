export const FETCH_ITEMS = 'FETCH_ITEMS';
export const SET_ITEMS = 'SET_ITEMS';
export const SET_CARDBOARD_INFO = 'SET_CARDBOARD_INFO';
export const ADD_ITEM = 'ADD_ITEM';
export const ADD_ITEM_SUCCESS = 'ADD_ITEM_SUCCESS';
export const EDIT_ITEM_NAME = 'EDIT_ITEM_NAME';
export const SET_ITEM_ID = 'SET_ITEM_ID';
export const EDIT_ITEM_NAME_SUCCESS = 'EDIT_ITEM_NAME_SUCCESS';
export const ADD_ITEM_QUANTITY = 'ADD_QUANTITY_ITEM';
export const ITEM_QUANTITY_SUCCESS = 'ITEM_QUANTITY_SUCCESS';
export const SUBSTRACT_ITEM_QUANTITY = 'SUBSTRACT_ITEM_QUANTITY';
export const DELETE_ITEM = 'DELETE_ITEM';
export const DELETE_ITEM_SUCCESS = 'DELETE_ITEM_SUCCESS';
export const SET_FRAGILITY = 'SET_FRAGILITY';
export const SET_FRAGILITY_SUCCESS = 'SET_FRAGILITY_SUCCESS';
export const SET_MOBILITY = 'SET_MOBILITY';
export const SET_MOBILITY_SUCCESS = 'SET_MOBILITY_SUCCESS';
export const SET_WEIGHT = 'SET_WEIGHT';
export const SET_WEIGHT_SUCCESS = 'SET_WEIGHT_SUCCESS';
export const SET_SELECT_STATUS = 'SET_SELECT_STATUS';
export const SET_SELECT_STATUS_SUCCESS = 'SET_SELECT_STATUS_SUCCESS';
export const SET_LOADING = 'SET_LOADING';

export function setLoading(loading) {
  return {
    type: SET_LOADING,
    payload: { loading },
  };
}

export function setSelectStatusSuccess(newStatus) {
  return {
    type: SET_SELECT_STATUS_SUCCESS,
    payload: { newStatus },
  };
}

export function setSelectStatus(status) {
  return {
    type: SET_SELECT_STATUS,
    payload: { status },
  };
}

export function setWeightSuccess(weight) {
  return {
    type: SET_WEIGHT_SUCCESS,
    payload: { weight },
  };
}

export function setWeight(isHeavy) {
  return {
    type: SET_WEIGHT,
    payload: { isHeavy },
  };
}

export function setMobilitySuccess(mobility) {
  return {
    type: SET_MOBILITY_SUCCESS,
    payload: { mobility },
  };
}

export function setMobility(isMobile) {
  return {
    type: SET_MOBILITY,
    payload: { isMobile },
  };
}

export function setFragilitySuccess(fragility) {
  return {
    type: SET_FRAGILITY_SUCCESS,
    payload: { fragility },
  };
}

export function setFragility(isFragile) {
  return {
    type: SET_FRAGILITY,
    payload: { isFragile },
  };
}

export function deleteItemSuccess(deletedItem) {
  return {
    type: DELETE_ITEM_SUCCESS,
    payload: { deletedItem },
  };
}

export function deleteItem(itemId) {
  return {
    type: DELETE_ITEM,
    payload: { itemId },
  };
}

export function substractItemQuantity() {
  return {
    type: SUBSTRACT_ITEM_QUANTITY,
  };
}

export function itemQuantitySuccess(newQuantity) {
  return {
    type: ITEM_QUANTITY_SUCCESS,
    payload: { newQuantity },
  };
}

export function addItemQuantity() {
  return {
    type: ADD_ITEM_QUANTITY,
  };
}

export function editItemNameSuccess(editedItemName) {
  return {
    type: EDIT_ITEM_NAME_SUCCESS,
    payload: { editedItemName },
  };
}

export function setItemId(itemId) {
  return {
    type: SET_ITEM_ID,
    payload: { itemId },
  };
}

export function editItem(editedItem) {
  return {
    type: EDIT_ITEM_NAME,
    payload: { editedItem },
  };
}

export function addItemSuccess(newItem) {
  return {
    type: ADD_ITEM_SUCCESS,
    payload: { newItem },
  };
}

export function fetchItems() {
  return {
    type: FETCH_ITEMS,
  };
}

export function setItems(items) {
  return {
    type: SET_ITEMS,
    payload: { items },
  };
}

export function setCardboardInfo(cardBoardInfo) {
  return {
    type: SET_CARDBOARD_INFO,
    payload: { cardBoardInfo },
  };
}

export function addItem(addInputValue) {
  return {
    type: ADD_ITEM,
    payload: { addInputValue },
  };
}
