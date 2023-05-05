import {
  RESET_ERROR_MSG, RESET_SUCCESS_MSG,
  RESET_USER, SAVE_TOKEN, SAVE_USER, SET_LOADING_SIGNUP, SIGN_UP_FAILURE,
  SIGN_UP_SUCCESS,
} from '../actions/user';

const userData = JSON.parse(localStorage.getItem('userData'));

const token = JSON.parse(localStorage.getItem('token'));

const initialState = {
  message: null,
  error: null,
  userId: userData ? userData.id : null,
  userName: userData ? userData.firstname : null,
  userEmail: userData ? userData.email : null,
  token: token || null,
  loader: false,
};

function reducer(state = initialState, action = {}) {
  const { type } = action;

  switch (type) {
    case SIGN_UP_SUCCESS: {
      const { data } = action.payload;
      return {
        ...state,
        user: data.user.firstname,
        error: '',
        message: 'Inscription réussie, merci de confirmer votre email',
        loader: false,
      };
    }
    case SIGN_UP_FAILURE: {
      const { error } = action.payload;
      return {
        ...state,
        user: null,
        error,
        loader: false,
      };
    }
    case RESET_SUCCESS_MSG:
      return {
        ...state,
        message: '',
      };
    case RESET_ERROR_MSG:
      return {
        ...state,
        error: '',
      };
    case SAVE_USER:
      return {
        ...state,
        userId: action.payload.userData.id,
        userName: action.payload.userData.firstname,
        userEmail: action.payload.userData.email,
      };
    case SAVE_TOKEN:
      return {
        ...state,
        token: action.payload.token,
      };
    case RESET_USER:
      return {
        ...state,
        userId: null,
        userName: null,
        token: null,
      };
    case SET_LOADING_SIGNUP:
      return {
        ...state,
        loader: true,
      };
    default:
      return state;
  }
}

export default reducer;
