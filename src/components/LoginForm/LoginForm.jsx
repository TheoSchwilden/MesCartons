/* eslint-disable react/no-unescaped-entities */
/* eslint-disable jsx-a11y/label-has-associated-control */
import './style.scss';
import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useSignIn } from 'react-auth-kit';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { saveToken, saveUser } from '../../actions/user';

function LoginForm() {
  // We handle authorization locally with React-auth Kit
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const signIn = useSignIn();
  const navigate = useNavigate();

  const dispatch = useDispatch();

  // handleSignIn async function to make the api request when submitting

  const handleSignIn = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('https://mes-cartons-nazca.site/mes-cartons/public/api/login_check', {
        username: email,
        password,
      });

      signIn({
        token: res.data.token,
        expiresIn: 3600,
        tokenType: 'Bearer',
        authState: { username: email },
      });
      dispatch(saveUser(res.data.data));
      dispatch(saveToken(res.data.token));
      navigate('/');
    } catch (error) {
      if (error.response.status === 401) {
        setError('Votre email ou votre mot de passe est incorrect');
      } else {
        setError('Une erreur est survenue');
      }
    }
  };

  return (
    <main className="w-full h-screen flex flex-col items-center justify-center sm:px-4">
      <div className="w-full space-y-6 text-gray-600 sm:max-w-md">
        <div className="text-center">
          <div className="mt-5 space-y-2">
            <h3 className="text-gray-800 text-2xl font-bold sm:text-3xl">Connexion à votre compte</h3>
            <p className="">
              Vous n'avez pas encore de compte ?
              {' '}
              <NavLink to="/inscription" className="font-medium text-orange-500 hover:text-orange-500">
                Inscription
              </NavLink>
            </p>
          </div>
        </div>
        <div className="bg-white mx-3 shadow p-4 py-6 space-y-8 sm:p-6 sm:rounded-lg">
          <form
            onSubmit={handleSignIn}
            className="space-y-5"
          >
            <div>
              <label className="font-medium">
                Email
              </label>
              <input
                type="email"
                required
                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-orange-600 shadow-sm rounded-lg"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <label className="font-medium">
                Password
              </label>
              <input
                type="password"
                required
                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-orange-600 shadow-sm rounded-lg"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            {error && <p className="text-red-500">{error}</p>}
            <button
              type="submit"
              className="w-full px-4 py-2 text-white font-medium bg-orange-500 hover:bg-orange-400 active:bg-orange-400 rounded-lg duration-150"
            >
              Connexion
            </button>
          </form>
        </div>
        <div className="text-center">
          <a href="1" className="hover:text-orange-500">Mot de passe oublié ?</a>
        </div>
      </div>
    </main>
  );
}

export default LoginForm;
