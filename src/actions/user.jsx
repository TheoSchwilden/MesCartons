export const SIGN_UP = 'SIGN_UP';
export const SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS';
export const SIGN_UP_FAILURE = 'SIGN_UP_FAILURE';
export const RESET_SUCCESS_MSG = 'RESET_SUCCESS_MSG';
export const RESET_ERROR_MSG = 'RESET_ERROR_MSG';
export const SAVE_USER = 'SAVE_USER';
export const RESET_USER = 'RESET_USER';
export const SAVE_TOKEN = 'SAVE_TOKEN';

export function saveToken(token) {
  localStorage.setItem('token', JSON.stringify(token));
  return {
    type: SAVE_TOKEN,
    payload: { token },
  };
}

export function signUp(email, password, plainPassword, firstname, lastname) {
  return {
    type: SIGN_UP,
    payload: {
      firstname, lastname, email, password, plainPassword,
    },
  };
}

export function signUpSuccess(data) {
  return {
    type: SIGN_UP_SUCCESS,
    payload: { data },
  };
}

export function signUpFailure(error) {
  return {
    type: SIGN_UP_FAILURE,
    payload: { error },
  };
}

export function resetSuccessMsg() {
  return {
    type: RESET_SUCCESS_MSG,
  };
}

export function resetErrorMsg() {
  return {
    type: RESET_ERROR_MSG,
  };
}

export function saveUser(userData) {
  localStorage.setItem('userData', JSON.stringify(userData));
  return {
    type: SAVE_USER,
    payload: { userData },
  };
}

export function resetUser() {
  localStorage.removeItem('userData');
  localStorage.removeItem('token');
  localStorage.removeItem('cardboardUniqueId');
  localStorage.removeItem('projectId');
  return {
    type: RESET_USER,
  };
}
