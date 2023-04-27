/* eslint-disable react/no-unescaped-entities */

import { useDispatch, useSelector } from 'react-redux';
import './style.scss';
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

import Loader from '../../Loader/Loader';
import {
  addProjectRoom, clearErrorDeleteMsg,
  deleteProjectAddedRoom, fetchProjectAddedRoom,
  fetchProjectRoomTypes,
} from '../../../actions/Project';

function CreateProject() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProjectRoomTypes());
  }, []);

  useEffect(() => {
    dispatch(fetchProjectAddedRoom());
  }, []);

  const projectRoomTypes = useSelector((state) => state.Project.projectRoomTypes);

  const projectAddRoomList = useSelector((state) => state.Project.projectAddRoomList);

  const errorDeleteMsg = useSelector((state) => state.Project.errorMsg);

  const loading = useSelector((state) => state.Project.loader);

  const [addRoomNameValue, setAddRoomNameValue] = useState('');
  const [addRoomTypeValue, setAddRoomTypeValue] = useState('');

  const [showErrorMsg, setShowErrorMsg] = useState(false);

  const handleAddingRoomSubmit = (e) => {
    e.preventDefault();
    dispatch(addProjectRoom(addRoomNameValue, parseInt(addRoomTypeValue, 10)));
    setAddRoomNameValue('');
  };

  const handleDeleteRoom = (roomId) => {
    dispatch(deleteProjectAddedRoom(roomId));
  };

  useEffect(() => {
    if (errorDeleteMsg) {
      setShowErrorMsg(true);
      setTimeout(() => {
        dispatch(clearErrorDeleteMsg());
      }, 4000);
    }
  });

  if (loading) {
    return <Loader />;
  }

  return (
    <section className="">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto mt-12  md: lg:py-0">
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-white dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-orange-400 md:text-2xl dark:text-orange-400">
              Ajouter vos pièces !
            </h1>
            <form className="space-y-4 md:space-y-6" onSubmit={handleAddingRoomSubmit}>
              <div>
                <input onChange={(e) => setAddRoomNameValue(e.target.value)} value={addRoomNameValue} type="roomName" name="roomName" id="roomName" className="bg-gray-50 border border-gray-300 text-gray-800 sm:text-sm rounded-lg focus:ring-orange-400 focus:border-orange-400 block w-full p-2.5 dark:bg-gray-50 dark:border-gray-300 dark:placeholder-gray-500 dark:text-gray-500 dark:focus:ring-orange-500 dark:focus:border-orange-400" placeholder="Nom de la pièce (facultatif)" required="" />
              </div>
              <div className="relative max-w-xs mx-auto mt-12">
                <svg xmlns="http://www.w3.org/2000/svg" className="absolute top-0 bottom-0 w-6 h-6 my-auto text-gray-400 right-2.5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
                <select onChange={(e) => setAddRoomTypeValue(e.target.value)} className="w-full p-2.5 text-gray-500 bg-white border rounded-md shadow-sm outline-none appearance-none focus:border-orange-400">
                  <option value="1">Type de pièce (autre par defaut)</option>
                  {projectRoomTypes.map((room) => (
                    <option className="selectRoom" key={room.id} value={room.id}>{room.type}</option>
                  ))}
                </select>
              </div>
              {showErrorMsg && <p className="text-red-500">{errorDeleteMsg}</p>}
              {projectAddRoomList.map((addedRoom) => (
                <ul className="flex justify-center gap-2" key={addedRoom.id}>
                  <li className="">{addedRoom.roomName}</li>
                  <FontAwesomeIcon className="cursor-pointer" icon={faXmark} onClick={() => handleDeleteRoom(addedRoom.id)} />
                </ul>
              ))}
              <button type="submit" className="w-full text-white bg-orange-400 hover:bg-orange-400 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-orange-400 dark:hover:bg-orange-400 dark:focus:ring-primary-800">Valider</button>
            </form>
          </div>
        </div>
        <div className="mt-5">
          <a href="/">
            <button type="button" className="w-full cursor-pointer text-white bg-orange-400 hover:bg-orange-400 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-orange-400 dark:hover:bg-orange-400 dark:focus:ring-primary-800">C'est parti !</button>
          </a>
        </div>
      </div>
    </section>
  );
}

export default CreateProject;
