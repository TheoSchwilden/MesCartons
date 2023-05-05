/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useEffect, useState } from 'react';
import './SignUpPage.scss';

import { NavLink, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  resetErrorMsg, resetSuccessMsg, setLoadingSignUp, signUp,
} from '../../actions/user';
import LoaderSignUp from '../Loader/LoaderSignUp';

function SignUpPage() {
  const [firstname, setFirstName] = useState('');
  const [lastname, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [plainPassword, setPlainPassword] = useState('');
  const dispatch = useDispatch();

  const loading = useSelector((state) => state.user.loader);
  const successMsg = useSelector((state) => state.user.message);
  const errorMsg = useSelector((state) => state.user.error);
  const errorArray = errorMsg ? errorMsg.split('.').map((e) => e.trim()) : [];

  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(setLoadingSignUp());
    dispatch(signUp(email, password, plainPassword, firstname, lastname));
  };

  useEffect(() => {
    if (successMsg) {
      setTimeout(() => {
        navigate('/connexion');
        dispatch(resetSuccessMsg());
      }, 3500);
    }
  }, [successMsg, navigate, dispatch]);

  useEffect(() => {
    if (errorMsg) {
      dispatch(resetErrorMsg());
    }
  }, []);

  return (
    <main className="w-full flex">
      <div className="relative flex-1 hidden items-center justify-center h-screen bg-orange-500 lg:flex">
        <div className="relative z-10 w-full max-w-md">
          <div className=" mt-16 space-y-3">
            <h3 className="text-white text-3xl font-bold">Bienvenue sur mes cartons !</h3>
            <p className="text-white">
              Crée votre compte pour avoir accès à la gestion de vos cartons
              pour un déménagement en toute sérénité 😎
            </p>
          </div>
        </div>
        <div
          className="absolute inset-0 my-auto h-[500px]"
        />
      </div>
      <div className="flex-1 flex items-center justify-center h-screen">
        <div className="w-full max-w-md space-y-8 px-6  bg-white text-gray-600 sm:px-8 p-8 mx-3">
          <div className="">
            <div className="mt-5 space-y-2">
              <h3 className="text-gray-800 text-2xl font-bold sm:text-3xl">Inscription</h3>
              <p className="">
                Vous avez déja un compte?
                {' '}
                <NavLink to="/connexion" className="allo font-medium text-orange-500 hover:text-orange-400">
                  Connexion
                </NavLink>
              </p>
            </div>
          </div>
          <div className="relative">
            <span className="block w-full h-px bg-gray-300" />
            <p className="inline-block w-fit text-sm bg-white px-2 absolute -top-2 inset-x-0 mx-auto">Ou inscrivez vous !</p>
          </div>
          <form
            onSubmit={handleSubmit}
            className="space-y-5"
          >
            <div>
              <label className="font-medium">
                Prénom
              </label>
              <input
                type="text"
                required
                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-orange-500 shadow-sm rounded-lg"
                onChange={(e) => setFirstName(e.target.value)}
              />
            </div>
            <div>
              <label className="font-medium">
                Nom
              </label>
              <input
                type="text"
                required
                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-orange-500 shadow-sm rounded-lg"
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
            <div>
              <label className="font-medium">
                Email
              </label>
              <input
                type="email"
                required
                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-orange-500 shadow-sm rounded-lg"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <label className="font-medium">
                Mot de passe
              </label>
              <input
                type="password"
                required
                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-orange-500 shadow-sm rounded-lg"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div>
              <label className="font-medium">
                Répéter le mot de passe
              </label>
              <input
                type="password"
                required
                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-orange-500 shadow-sm rounded-lg"
                onChange={(e) => setPlainPassword(e.target.value)}
              />
            </div>
            {errorArray.map((error, index) => (
              // eslint-disable-next-line react/no-array-index-key
              <p className="text-red-500 text-center" key={index}>{error}</p>
            ))}
            {successMsg && <p className="text-green-500 text-center">{successMsg}</p>}
            <button
              type="submit"
              className="flex justify-center items-center gap-8 w-full px-4 py-2 text-white font-medium bg-orange-500 hover:bg-orange-500 active:bg-orange-500 rounded-lg duration-150"
            >
              Créer votre compte
              {loading ? <LoaderSignUp /> : null}
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}

export default SignUpPage;
