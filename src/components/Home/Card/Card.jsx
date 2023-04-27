/* eslint-disable no-nested-ternary */
/* eslint-disable react/no-unescaped-entities */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faXmark } from '@fortawesome/free-solid-svg-icons';

import './style.scss';

import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteCardBoard, setCardBoardIdForEdit, setUniqueCardBoardId } from '../../../actions/CardBoards';
import boxclose from '../../../assets/icons/png/boxclose.png';

function Card({
  id, name, label, items, fragility, mobility, weight, status, setIsEditFormCardOpen,
}) {
  const dispatch = useDispatch();

  const handleOpenEditCardForm = (carboardId) => {
    setIsEditFormCardOpen(true);
    dispatch(setCardBoardIdForEdit(carboardId));
    // window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleDeleteCardBoardOnClick = () => {
    dispatch(deleteCardBoard(id));
  };

  const handleSetIdCarboard = (cardboardId) => {
    dispatch(setUniqueCardBoardId(cardboardId));
  };

  return (
    <div className="relative mx-auto w-full duration-300 ease-in-out transition-transform transform hover:-translate-y-2 w-full">
      <div className="card flex flex-col justify-between shadow p-4 rounded-lg bg-white">
        <div className="mt-4 flex justify-between  items-center">
          <div className="flex items-center gap-3">
            <img src={boxclose} className="w-10" alt="" />
            <h2 className="font-medium text-base md:text-lg text-black line-clamp-1" title="New York">
              {label}
            </h2>
          </div>
          <div className="flex gap-2 text-xl">
            <button type="button">
              <FontAwesomeIcon icon={faEdit} onClick={() => { handleOpenEditCardForm(id); }} />
            </button>
            <button type="button">
              <FontAwesomeIcon icon={faXmark} onClick={() => handleDeleteCardBoardOnClick(id)} />
            </button>
          </div>
        </div>
        <div>
          <h2 className="text-center text-2xl mt-3 font-semibold">{name}</h2>
        </div>
        <div>
          <ul className="flex flex-col gap-3 text-xl mt-5">
            {items.slice(0, 3).map((item) => (
              <li key={item.id} className="item">{item.itemName}</li>
            ))}
          </ul>
        </div>
        <div className="mt-5 flex justify-center">
          {fragility && <span className="bg-red-100 text-red-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-red-600 dark:text-white">Fragile</span>}
          {weight && <span className="bg-yellow-100 text-yellow-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-orange-500 dark:text-white">Lourd</span>}
          {mobility && <span className="bg-green-100 text-green-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-green-500 dark:text-white">Retournable</span>}
        </div>

        <div className="grid grid-cols-2 mt-8">
          <div className="flex items-center">
            <div className="relative">
              <div className={`rounded-full w-6 h-6 md:w-8 md:h-8 ${
                status === 1 ? 'bg-red-500' : status === 11 ? 'bg-orange-500' : 'bg-green-500'
              }`}
              />

              <span className="absolute top-0 right-0 inline-block w-3 h-3 bg-primary-red rounded-full" />
            </div>

            <p className="ml-2 text-gray-800 line-clamp-1">
              {status === 1 && 'En cours'}
              {status === 11 && 'Emballé'}
              {status === 21 && 'Déménager'}
              {status === 31 && 'Déballer'}
            </p>
          </div>
          <div className="flex justify-end">
            <p className="inline-block font-semibold text-primary whitespace-nowrap leading-tight rounded-xl">
              {items.length}
              {' '}
              items
            </p>
          </div>
        </div>
        <div className="flex justify-center mt-3">
          <a href={`mon-carton/${id}`}>
            <button
              type="button"
              className="px-4 py-2 text-white bg-orange-500 rounded-lg duration-150 hover:bg-orange-500 active:shadow-lg"
              onClick={() => handleSetIdCarboard(id)}
            >
              Ouvrir
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}

Card.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  fragility: PropTypes.bool.isRequired,
  mobility: PropTypes.bool.isRequired,
  weight: PropTypes.bool.isRequired,
  status: PropTypes.number.isRequired,
  // eslint-disable-next-line react/require-default-props
  id: PropTypes.number,
  setIsEditFormCardOpen: PropTypes.func.isRequired,

  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      itemName: PropTypes.string.isRequired,
    }),
  ).isRequired,

};

export default Card;
