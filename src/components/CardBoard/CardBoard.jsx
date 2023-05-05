/* eslint-disable jsx-a11y/label-has-associated-control */
import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPenToSquare, faTrash, faPaperPlane, faPlus, faMinus, faCheck,
} from '@fortawesome/free-solid-svg-icons';
import boxOpen from '../../assets/icons/png/boxopen.png';

import {
  addItem, addItemQuantity, deleteItem, editItem, fetchItems, setFragility, setItemId,
  setLoading,
  setMobility,
  setSelectStatus,
  setWeight,
  substractItemQuantity,
} from '../../actions/Items';
import './style.scss';
import Loader from '../Loader/Loader';

function CardBoard() {
  const items = useSelector((state) => state.items.itemList);

  const cardBoardInfo = useSelector((state) => state.items.cardBoardInfo);

  const loading = useSelector((state) => state.items.loader);

  const [editItemId, setEditItemId] = useState(null);

  const [isEditMode, setIsEditMode] = useState(false);
  const [itemEditName, setItemEditName] = useState('');

  const [addInputValue, setAddInputValue] = useState('');

  const itemEl = useRef('');

  useEffect(() => {
    if (itemEl.current) {
      itemEl.current.scroll({
        top: itemEl.current.scrollHeight,
        behavior: 'smooth',
      });
    }
  }, [items]);

  const dispatch = useDispatch();

  const handleEditClick = (id, editItemName) => {
    setIsEditMode(true);
    dispatch(setItemId(id));
    setEditItemId(id);
    setItemEditName(editItemName);
  };

  const handleSaveClick = () => {
    setIsEditMode(false);
    dispatch(editItem(itemEditName));
  };

  const handleEditNameChange = (event) => {
    setItemEditName(event.target.value);
  };

  const handleInputItemNameValue = (e) => {
    setAddInputValue(e.target.value);
  };

  const handleAddSubmit = (event) => {
    event.preventDefault();
    if (addInputValue.trim().length) {
      dispatch(addItem(addInputValue.trim()));
      setAddInputValue('');
    }
  };

  const handleMinusQuantityClick = (id) => {
    dispatch(setItemId(id));
    dispatch(substractItemQuantity());
  };

  const handlePlusQuantityClick = (id) => {
    dispatch(setItemId(id));
    dispatch(addItemQuantity());
  };

  const handleDeleteClick = (id) => {
    dispatch(setItemId(id));
    dispatch(deleteItem(id));
  };

  const handleFragilityCheckboxClick = (e) => {
    const isFragile = e.target.checked;
    dispatch(setFragility(isFragile));
  };

  const handleMobilityCheckboxClick = (e) => {
    const isMobile = e.target.checked;
    dispatch(setMobility(isMobile));
  };

  const handleWeightCheckboxClick = (e) => {
    const isHeavy = e.target.checked;
    dispatch(setWeight(isHeavy));
  };

  const handleEditStatusChange = (e) => {
    const status = e.target.value;
    dispatch(setSelectStatus(parseInt(status, 10)));
  };

  useEffect(() => {
    dispatch(setLoading(true));
    dispatch(fetchItems());
  }, []);

  if (loading) {
    return <Loader />;
  }
  return (

    <div className="relative mx-auto  w-full md:w-1/2 mx-auto mt-6 md:mt-12">
      <div className="custom shadow mx-2 p-4 rounded-lg bg-white overflow-auto" ref={itemEl}>
        <div className="mt-4">
          <div className="mt-4 mb-5 flex justify-between  items-center">
            <div className="flex items-center gap-3">
              <img src={boxOpen} className="w-10" alt="logo" />
              <h2 className="font-medium text-2xl md:text-2xl text-black line-clamp-1" title="New York">
                {cardBoardInfo.name}
              </h2>
            </div>
            <div className="flex gap-2 text-xl">
              <span className="bg-orange-400 text-white text-md font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-orange-400 dark:text-white">{cardBoardInfo.label}</span>
            </div>
          </div>
          <div>
            {items.map((item) => {
              if (isEditMode && item.id !== editItemId) {
                return null;
              }
              return (
                <div className="flex justify-between items-baseline mt-3" key={item.id}>
                  {isEditMode && item.id === editItemId ? (
                    <>
                      <input className="item-name-edit" type="text" value={itemEditName} onChange={handleEditNameChange} />
                      <div>
                        <FontAwesomeIcon className="mr-4" icon={faCheck} onClick={handleSaveClick} />
                        <FontAwesomeIcon className="delete-icon" icon={faTrash} />
                      </div>
                    </>
                  ) : (
                    <>
                      <p className="basis-1/2 text-xl">{item.itemName}</p>
                      <div className="flex gap-4">
                        <FontAwesomeIcon className="minus-icon cursor-pointer" icon={faMinus} onClick={() => handleMinusQuantityClick(item.id)} />
                        <FontAwesomeIcon className="plus-icon cursor-pointer" icon={faPlus} onClick={() => handlePlusQuantityClick(item.id)} />
                        <p>{item.quantity}</p>
                      </div>
                      <div>
                        <FontAwesomeIcon className="mr-4 text-xl cursor-pointer" icon={faPenToSquare} onClick={() => handleEditClick(item.id, item.itemName)} />
                        <FontAwesomeIcon className="text-xl cursor-pointer" icon={faTrash} onClick={() => handleDeleteClick(item.id)} />
                      </div>
                    </>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <form
        onSubmit={handleAddSubmit}
        className="max-w px-4 mx-auto mt-1"
      >
        <div className="flex items-baseline bg-white pr-4 relative">
          <input
            type="text"
            placeholder="Search"
            className="w-full py-3 pl-4 pr-4 text-gray-500 rounded-md outline-none bg-gray-50 focus:bg-white focus:border-orange-500"
            value={addInputValue}
            onChange={handleInputItemNameValue}
          />
          <FontAwesomeIcon icon={faPaperPlane} />
        </div>
      </form>
      <div className="state mt-4 flex flex-wrap justify-center gap-1 ml-4">
        <label className="relative inline-flex items-center mb-5 mr-2 cursor-pointer">
          <input type="checkbox" onChange={handleFragilityCheckboxClick} checked={cardBoardInfo.fragility} className="sr-only peer" />
          <div className="w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-red-500 dark:peer-focus:ring-red-500 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-red-600" />
          <span className="ml-3 text-sm font-medium text-gray-900 dark:text-white">FRAGILE</span>
        </label>
        <label className="relative inline-flex items-center mb-5 cursor-pointer">
          <input type="checkbox" onChange={handleWeightCheckboxClick} checked={cardBoardInfo.weight} className="sr-only peer" />
          <div className="w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-orange-500 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-orange-500" />
          <span className="ml-3 text-sm font-medium text-gray-900 dark:text-white">LOURD</span>
        </label>
        <label className="relative inline-flex items-center mb-5 cursor-pointer">
          <input type="checkbox" onChange={handleMobilityCheckboxClick} checked={cardBoardInfo.mobility} className="sr-only peer" />
          <div className="w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-green-500 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-green-600" />
          <span className="ml-3 text-sm font-medium text-gray-900 dark:text-white">RETOURNABLE</span>
        </label>
      </div>
      <div className="relative max-w-xs mx-auto">
        <svg xmlns="http://www.w3.org/2000/svg" className="absolute top-0 bottom-0 w-6 h-6 my-auto text-gray-400 right-2.5" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
        </svg>
        <select value={cardBoardInfo.status} onChange={handleEditStatusChange} className="w-full p-2.5 text-gray-500 bg-white border rounded-md shadow-sm outline-none appearance-none focus:border-orange-500">
          <option value="1">En cours</option>
          <option value="11">Emballé</option>
          <option value="21">Déménagé</option>
          <option value="31">Déballé</option>
        </select>
      </div>
      <div className="flex justify-center">
        <NavLink to="/">
          <button
            type="button"
            className="px-4 py-2 mt-3 text-orange-500 bg-white rounded-lg duration-150 hover:bg-orange-600 hover:text-white active:shadow-lg"
          >
            Accueil
          </button>
        </NavLink>
      </div>
    </div>

  );
}

export default CardBoard;
