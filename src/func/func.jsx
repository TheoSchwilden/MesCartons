import {
  faBed, faBox, faBoxes, faChair, faCouch, faLaptop,
  faShower, faTshirt, faUtensils,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export function getRoomColor(roomName) {
  const lowerCaseRoomName = roomName.toLowerCase();

  if (lowerCaseRoomName.includes('salon') || lowerCaseRoomName.includes('séjour')) {
    return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300';
  } if (lowerCaseRoomName.includes('chambre')) {
    return 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300';
  } if (lowerCaseRoomName.includes('cuisine')) {
    return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300';
  } if (lowerCaseRoomName.includes('salle à manger')) {
    return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300';
  } if (lowerCaseRoomName.includes('salle de bain')) {
    return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300';
  } if (lowerCaseRoomName.includes('bureau')) {
    return 'bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-300';
  } if (lowerCaseRoomName.includes('buanderie')) {
    return 'bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-300';
  } if (lowerCaseRoomName.includes('salle de stockage')) {
    return 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-300';
  }

  return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300';
}

export function getRoomIcon(roomName) {
  const upperCaseRoomName = roomName.toUpperCase();
  if (upperCaseRoomName.includes('SALON/SÉJOUR')) {
    return <FontAwesomeIcon icon={faCouch} />;
  } if (upperCaseRoomName.includes('CHAMBRE')) {
    return <FontAwesomeIcon icon={faBed} />;
  } if (upperCaseRoomName.includes('CUISINE')) {
    return <FontAwesomeIcon icon={faUtensils} />;
  } if (upperCaseRoomName.includes('SALLE À MANGER')) {
    return <FontAwesomeIcon icon={faChair} />;
  } if (upperCaseRoomName.includes('SALLE DE BAIN')) {
    return <FontAwesomeIcon icon={faShower} />;
  } if (upperCaseRoomName.includes('BUREAU')) {
    return <FontAwesomeIcon icon={faLaptop} />;
  } if (upperCaseRoomName.includes('BUANDERIE')) {
    return <FontAwesomeIcon icon={faTshirt} />;
  } if (upperCaseRoomName.includes('SALLE DE STOCKAGE')) {
    return <FontAwesomeIcon icon={faBoxes} />;
  }
  return <FontAwesomeIcon icon={faBox} />;
}
