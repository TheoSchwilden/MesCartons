import axios from 'axios';
import { SIGN_UP, signUpFailure, signUpSuccess } from '../actions/user';

const signUpMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case SIGN_UP: {
      const {
        email, password, firstname, lastname, plainPassword,
      } = action.payload;
      axios.post('https://mes-cartons-nazca.site/mes-cartons/public/api/register', {
        email,
        password,
        plainPassword,
        firstname,
        lastname,
      })
        .then((response) => {
          store.dispatch(signUpSuccess(response.data));
        })
        .catch((error) => {
          store.dispatch(signUpFailure(error.response.data.detail));
          console.log(error);
        });
      break;
    }
    default:
      next(action);
  }
};

export default signUpMiddleware;
