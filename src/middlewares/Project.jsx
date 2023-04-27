import axios from 'axios';
import {
  ADD_PROJECT_ROOM,
  DELETE_PROJECT_ADDED_ROOM,
  FETCH_PROJECT_ADDED_ROOM,
  FETCH_PROJECT_BY_USER,
  FETCH_PROJECT_ROOM_TYPES, SET_PROJECT, addProjectRoomSuccess,
  deleteProjectAddedRoomSuccess, setErrorDeleteMsg, setProjectAddedRoom,
  setProjectArrivalAddressSuccess,
  setProjectCardboardsSuccess,
  setProjectFormError,
  setProjectRoomTypes, setProjectSuccess,
} from '../actions/Project';

const Project = (store) => (next) => (action) => {
  switch (action.type) {
    case SET_PROJECT: {
      const state = store.getState();
      const { token, userId } = state.user;
      const { movingAt, startingAddress, arrivalAddress } = action.payload;
      axios.post(
        `https://mes-cartons-nazca.site/mes-cartons/public/api/user/${userId}/projects`,
        {
          movingAt,
          startingAddress,
          arrivalAddress,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      ).then((response) => {
        store.dispatch(setProjectSuccess(response.data.project.id));
        window.location.href = '/creer-mon-demenagement-pieces';
        next(action);
      }).catch((error) => {
        console.log(error);
        store.dispatch(setProjectFormError(error.response.data.detail));
        next(action);
      });
      break;
    }
    case FETCH_PROJECT_ROOM_TYPES: {
      const state = store.getState();
      const { token } = state.user;
      axios.get(
        'https://mes-cartons-nazca.site/mes-cartons/public/api/roomtypes',
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      ).then((response) => {
        store.dispatch(setProjectRoomTypes(response.data));
        next(action);
      }).catch((error) => {
        console.log(error);
        next(action);
      });
      break;
    }
    case ADD_PROJECT_ROOM: {
      const state = store.getState();
      const { token } = state.user;
      const { projectId } = state.CardBoards;
      const { roomNameDTO, roomTypeId } = action.payload;
      axios.post(
        `https://mes-cartons-nazca.site/mes-cartons/public/api/projects/${projectId}/rooms`,
        {
          roomNameDTO,
          roomTypeId,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      ).then((response) => {
        store.dispatch(addProjectRoomSuccess(response.data.room));
        next(action);
      }).catch((error) => {
        console.log(error);
        next(action);
      });
      break;
    }
    case FETCH_PROJECT_ADDED_ROOM: {
      const state = store.getState();
      const { token, userId } = state.user;
      axios.get(
        `https://mes-cartons-nazca.site/mes-cartons/public/api/users/${userId}/projects/last`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      ).then((response) => {
        store.dispatch(setProjectAddedRoom(response.data.rooms));
        next(action);
      }).catch((error) => {
        console.log(error);
      });
      break;
    }
    case DELETE_PROJECT_ADDED_ROOM: {
      const state = store.getState();
      const { token } = state.user;
      const { projectRoomId } = action.payload;
      axios.delete(
        `https://mes-cartons-nazca.site/mes-cartons/public/api/projectrooms/${projectRoomId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      // eslint-disable-next-line no-unused-vars
      ).then((response) => {
        store.dispatch(deleteProjectAddedRoomSuccess(projectRoomId));
        next(action);
      }).catch((error) => {
        console.log(error);
        if (error.response.status === 500) {
          store.dispatch(setErrorDeleteMsg());
        }
        next(action);
      });
      break;
    }
    case FETCH_PROJECT_BY_USER: {
      const state = store.getState();
      const { token } = state.user;
      const { projectId } = state.CardBoards;
      axios.get(
        `https://mes-cartons-nazca.site/mes-cartons/public/api/projects/${projectId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      ).then((response) => {
        store.dispatch(setProjectArrivalAddressSuccess(response.data.arrivalAddress));
        store.dispatch(setProjectCardboardsSuccess(response.data.cardboards));
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

export default Project;
