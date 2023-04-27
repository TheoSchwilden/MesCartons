import { memo, useEffect, useState } from 'react';

import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useDispatch, useSelector } from 'react-redux';
import Cards from './Cards/Cards';
import PopUpForm from './PopUpForm/PopUpForm';
import './style.scss';
import PopUpEditForm from './PopUpEditForm/PopUpEditForm';
import { clearSuccessMsg } from '../../actions/CardBoards';

function Home() {
  const [isFormCardOpen, setIsFormCardOpen] = useState(false);
  const [isEditFormCardOpen, setIsEditFormCardOpen] = useState(false);
  const [showSuccessMsg, setShowSuccessMsg] = useState(false);

  const addSuccessMsg = useSelector((state) => state.CardBoards.addSuccessMsg);

  const cardboards = useSelector((state) => state.CardBoards.cardboardsList);

  const dispatch = useDispatch();

  useEffect(() => {
    if (addSuccessMsg) {
      setShowSuccessMsg(true);
      setTimeout(() => {
        dispatch(clearSuccessMsg());
      }, 3000);
    }
  });

  const handleOpenCardForm = () => {
    setIsFormCardOpen(!isFormCardOpen);
  };
  return (
    <div className="Home">
      <div className="add flex justify-center">
        {cardboards.length < 1 && (
          <button
            type="button"
            className="px-1 py-1 text-white mt-3 bg-orange-400 rounded  duration-150 hover:bg-orange-300 active:bg-orange-500"
            onClick={handleOpenCardForm}
          >
            <FontAwesomeIcon icon={faPlus} />
          </button>
        )}
        {cardboards.length < 1 && <p className="add-animation text-orange-400">Ajoute un carton ici !</p>}
      </div>
      {showSuccessMsg && <p className="text-green-500 ml-3 mb-3">{addSuccessMsg}</p>}
      <PopUpForm isFormCardOpen={isFormCardOpen} setIsFormCardOpen={setIsFormCardOpen} />
      <PopUpEditForm
        isEditFormCardOpen={isEditFormCardOpen}
        setIsEditFormCardOpen={setIsEditFormCardOpen}
      />
      <Cards
        isEditFormCardOpen={isEditFormCardOpen}
        setIsEditFormCardOpen={setIsEditFormCardOpen}
        setIsFormCardOpen={setIsFormCardOpen}
      />
    </div>
  );
}

export default memo(Home);
