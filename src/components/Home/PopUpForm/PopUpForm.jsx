/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import PropTypes from 'prop-types';

import './style.scss';

import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { addCarboard } from '../../../actions/CardBoards';

function PopUpForm({ isFormCardOpen, setIsFormCardOpen }) {
  const [cardboardName, setCardboardName] = useState('');
  const [destinationRoomId, setDestinationRoomId] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  const roomTypes = useSelector((state) => state.CardBoards.roomsType);

  const dispatch = useDispatch();

  const handleClosePopUpForm = () => {
    setIsFormCardOpen(false);
    setErrorMsg('');
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!destinationRoomId) {
      setErrorMsg('Aucune pièces choisi');
      return;
    }
    setErrorMsg('');
    dispatch(addCarboard(cardboardName, parseInt(destinationRoomId, 10)));
    setCardboardName('');
    setIsFormCardOpen(false);
  };

  return (isFormCardOpen) ? (
    <div className="fixed inset-0 z-10 overflow-y-auto">
      <div className="fixed inset-0 w-full h-full bg-black opacity-40" onClick={handleClosePopUpForm} />
      <div className="flex items-center min-h-screen px-4 py-8">
        <div className="relative w-full max-w-lg p-4 mx-auto bg-white rounded-md shadow-lg">
          <div className="flex justify-end">
            <button
              type="button"
              className="p-2 text-gray-400 rounded-md hover:bg-gray-100"
              onClick={handleClosePopUpForm}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 mx-auto" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
          <div className="max-w-sm mx-auto py-3 space-y-3 text-center">
            <h4 className="text-lg font-medium text-gray-800">
              Ajoute un carton !
            </h4>
            <form onSubmit={handleSubmit}>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Nom du carton (facultatif)"
                  className="w-full pl-3 pr-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-orange-500 shadow-sm rounded-lg"
                  onChange={(e) => setCardboardName(e.target.value)}
                />
              </div>
              <div className="relative max-w-xs mx-auto mt-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="absolute top-0 bottom-0 w-6 h-6 my-auto text-gray-400 right-2.5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
                <select
                  className="w-full p-2.5 text-gray-500 bg-white border rounded-md shadow-sm outline-none appearance-none focus:border-orange-500"
                  onChange={(e) => setDestinationRoomId(e.target.value)}
                >
                  <option value="-1">Choisi une pièce</option>
                  {roomTypes.map((roomType) => (
                    <option key={roomType.id} value={roomType.id}>{roomType.roomName}</option>
                  ))}
                </select>
              </div>
              {errorMsg && <p className="mt-3 text-red-500">{errorMsg}</p>}
              <button type="submit" className="block w-48 mx-auto mt-3 py-3 px-4 font-medium text-sm text-center text-white bg-orange-500 hover:bg-orange-600 active:bg-orange-500 rounded-lg ring-offset-2 ring-orange-500 focus:ring-2">
                Ajouter !
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  ) : '';
}

PopUpForm.propTypes = {
  isFormCardOpen: PropTypes.bool.isRequired,
  setIsFormCardOpen: PropTypes.func.isRequired,
};

export default PopUpForm;
