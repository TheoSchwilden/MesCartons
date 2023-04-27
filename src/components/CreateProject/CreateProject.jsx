/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/no-unescaped-entities */

import { useEffect, useState } from 'react';
import './style.scss';
import { useDispatch, useSelector } from 'react-redux';
import { resetProjectFormError, setProject } from '../../actions/Project';

function CreateProject() {
  const [movingAt, setMovingAt] = useState('');
  const [currentAdress, setCurrentAdress] = useState('');
  const [currentCity, setCurrentCity] = useState('');
  const [currentPostCode, setCurrentPostCode] = useState('');
  const [currentCountry, setCurrentCountry] = useState('');

  const [arrivalAdress, setArrivalAdress] = useState('');
  const [arrivalCity, setArrivalCity] = useState('');
  const [arrivalPostCode, setArrivalPostCode] = useState('');
  const [arrivalCountry, setArrivalCountry] = useState('');

  const startingAddress = {
    wording: currentAdress,
    city: currentCity,
    postalCode: currentPostCode,
    country: currentCountry,
  };

  const arrivalAddress = {
    wording: arrivalAdress,
    city: arrivalCity,
    postalCode: arrivalPostCode,
    country: arrivalCountry,
  };

  const dispatch = useDispatch();

  const handleProjectSubmit = (e) => {
    e.preventDefault();
    dispatch(setProject(movingAt, startingAddress, arrivalAddress));
  };

  const errorList = useSelector((state) => state.Project.error);
  const errorArray = errorList ? errorList.split('.').map((e) => e.trim()) : [];

  useEffect(() => {
    dispatch(resetProjectFormError());
  }, []);

  return (
    <section className="">
      <div className="flex flex-col items-center justify-center px-6 py-5 mt-12 mx-auto sm:mt-12 md:mt-12 lg:mt-12">
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-white dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-orange-400 md:text-2xl dark:text-orange-400">
              Creer votre déménagement !
            </h1>
            <form className="space-y-3 md:space-y-6" onSubmit={handleProjectSubmit}>
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Date du déménagement</label>
                <input onChange={(e) => setMovingAt(e.target.value)} type="date" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-orange-400 focus:border-orange-400 block w-full p-2.5 dark:bg-gray-50 dark:border-gray-300 dark:placeholder-gray-400 dark:text-gray-700 dark:focus:ring-orange-400 dark:focus:border-orange-400" placeholder="name@company.com" required="" />
              </div>
              <div>
                <label htmlFor="adresse" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Adresse de départ</label>
                <input onChange={(e) => setCurrentAdress(e.target.value)} type="text" name="adresse" id="adresse" placeholder="Adresse" className="bg-gray-50 mb-2 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-orange-400 focus:border-orange-400 block w-full p-2.5 dark:bg-gray-50 dark:border-gray-300 dark:placeholder-gray-400 dark:text-gray-700 dark:focus:ring-blue-500 dark:focus:border-orange-400" required="" />
                <input onChange={(e) => setCurrentCity(e.target.value)} type="text" name="Ville" id="Ville" placeholder="Ville" className="bg-gray-50 mb-2 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-orange-400 focus:border-orange-400 block w-full p-2.5 dark:bg-gray-50 dark:border-gray-300 dark:placeholder-gray-400 dark:text-gray-700 dark:focus:ring-blue-500 dark:focus:border-orange-400" required="" />
                <input onChange={(e) => setCurrentPostCode(e.target.value)} type="number" name="CodePostal" id="CodePostal" placeholder="Code Postal" className="bg-gray-50 mb-2 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-orange-400 focus:border-orange-400 block w-full p-2.5 dark:bg-gray-50 dark:border-gray-300 dark:placeholder-gray-400 dark:text-gray-700 dark:focus:ring-blue-500 dark:focus:border-orange-400" required="" />
                <input onChange={(e) => setCurrentCountry(e.target.value)} type="text" name="Pays" id="Pays" placeholder="Pays" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-orange-400 focus:border-orange-400 block w-full p-2.5 dark:bg-gray-50 dark:border-gray-300 dark:placeholder-gray-400 dark:text-gray-700 dark:focus:ring-blue-500 dark:focus:border-orange-400" required="" />
              </div>
              <div>
                <label htmlFor="adresse" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Adresse d'arrivée</label>
                <input onChange={(e) => setArrivalAdress(e.target.value)} type="text" name="adresse" id="adresse" placeholder="Adresse" className="bg-gray-50 mb-2 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-orange-400 focus:border-orange-400 block w-full p-2.5 dark:bg-gray-50 dark:border-gray-300 dark:placeholder-gray-400 dark:text-gray-700 dark:focus:ring-blue-500 dark:focus:border-orange-400" required="" />
                <input onChange={(e) => setArrivalCity(e.target.value)} type="text" name="Ville" id="Ville" placeholder="Ville" className="bg-gray-50 mb-2 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-orange-400 focus:border-orange-400 block w-full p-2.5 dark:bg-gray-50 dark:border-gray-300 dark:placeholder-gray-400 dark:text-gray-700 dark:focus:ring-blue-500 dark:focus:border-orange-400" required="" />
                <input onChange={(e) => setArrivalPostCode(e.target.value)} type="number" name="CodePostal" id="CodePostal" placeholder="Code Postal" className="bg-gray-50 mb-2 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-orange-400 focus:border-orange-400 block w-full p-2.5 dark:bg-gray-50 dark:border-gray-300 dark:placeholder-gray-400 dark:text-gray-700 dark:focus:ring-blue-500 dark:focus:border-orange-400" required="" />
                <input onChange={(e) => setArrivalCountry(e.target.value)} type="text" name="Pays" id="Pays" placeholder="Pays" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-orange-400 focus:border-orange-400 block w-full p-2.5 dark:bg-gray-50 dark:border-gray-300 dark:placeholder-gray-400 dark:text-gray-700 dark:focus:ring-blue-500 dark:focus:border-orange-400" required="" />
              </div>
              {errorArray.map((error, index) => (
                // eslint-disable-next-line react/no-array-index-key
                <div key={index} className="text-sm mb-0 mt-0">
                  <p className="text-red-500">{error}</p>
                </div>
              ))}
              <button type="submit" className="w-full text-white bg-orange-400 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Continuer</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CreateProject;
