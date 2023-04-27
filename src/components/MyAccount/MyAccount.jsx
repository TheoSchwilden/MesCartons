/* eslint-disable react/no-unescaped-entities */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './style.scss';
import {
  faAt, faBoxOpen, faLocationDot, faUserAlt,
} from '@fortawesome/free-solid-svg-icons';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchProjectByUser } from '../../actions/Project';
import Loader from '../Loader/Loader';

function MyAccount() {
  const userName = useSelector((state) => state.user.userName);
  const userEmail = useSelector((state) => state.user.userEmail);
  const cardboards = useSelector((state) => state.Project.cardboardsForThisProjectList);
  const arrivalAddress = useSelector((state) => state.Project.arrivalAddress);
  const loading = useSelector((state) => state.Project.loader);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProjectByUser());
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="MyAccount">
      <div className="container-myAccount">
        <div className="header-myAccount">
          <h1 className="title-myAccount">Mon compte</h1>
        </div>
        <div className="user-info">
          <div className="info-wrapper">
            <p className="info-label">
              <span className="icon"><FontAwesomeIcon icon={faUserAlt} /></span>
              Nom de l'utilisateur
              {' '}
            </p>
            <p className="info-text">{userName}</p>
          </div>
        </div>
        <div className="user-info">
          <div className="info-wrapper">
            <p className="info-label">
              <span className="icon"><FontAwesomeIcon icon={faAt} /></span>
              {' '}
              Adresse email
            </p>
            <p className="info-text">{userEmail}</p>
          </div>
        </div>
        <div className="user-info">
          <div className="info-wrapper">
            <p className="info-label">
              <span className="icon"><FontAwesomeIcon icon={faLocationDot} /></span>
              {' '}
              Adresse de destination
            </p>
            <p className="info-text">
              {arrivalAddress.wording}
              {' '}
              {arrivalAddress.postalCode}
              {' '}
              {arrivalAddress.city}
            </p>
          </div>
        </div>
        <div className="user-info">
          <div className="info-wrapper">
            <p className="info-label">
              <span className="icon"><FontAwesomeIcon icon={faBoxOpen} /></span>
              {' '}
              Nombre de cartons
            </p>
            <p className="info-text">{cardboards.length}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyAccount;
