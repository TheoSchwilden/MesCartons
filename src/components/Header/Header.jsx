/* eslint-disable react/no-array-index-key */
import { useState, useRef, useEffect } from 'react';
import { useSignOut } from 'react-auth-kit';
import { NavLink } from 'react-router-dom';

import { useSelector } from 'react-redux';
import packagelogo from '../../assets/icons/png/package.png';
import avatar from '../../assets/icons/png/man.png';

// Profile Dropdown
function ProfileDropDown(props) {
  const [state, setState] = useState(false);
  const profileRef = useRef();

  useEffect(() => {
    const handleDropDown = (e) => {
      if (!profileRef.current.contains(e.target)) setState(false);
    };
    document.addEventListener('click', handleDropDown);
  }, []);

  const signOut = useSignOut();

  const handleLogOut = () => {
    signOut();
  };

  const userName = useSelector((state) => state.user.userName);
  const userEmail = useSelector((state) => state.user.userEmail);

  return (
    // eslint-disable-next-line react/destructuring-assignment, react/prop-types
    <div className={`relative ${props.class}`}>
      <div className="flex items-center space-x-4">
        <button
          type="button"
          ref={profileRef}
          className="w-10 h-10 outline-none rounded-full ring-offset-2 ring-gray-200 ring-2 lg:focus:ring-orange-500"
          onClick={() => setState(!state)}
        >
          <img
            src={avatar}
            className="w-full h-full rounded-full"
            alt="avatar"
          />
        </button>
        <div className="lg:hidden">
          <span className="block text-white">{userName}</span>
          <span className="block text-sm text-white">{userEmail}</span>
        </div>
      </div>
      <ul className={`bg-orange-400 z-20 top-12 right-0 mt-5 space-y-5 lg:absolute lg:border lg:rounded-md lg:text-sm lg:w-52 lg:shadow-md lg:space-y-0 lg:mt-0 ${state ? '' : 'lg:hidden'}`}>
        <li>
          <NavLink to="/mon-compte" className="block text-white lg:hover:bg-orange-500 lg:p-2.5">
            Mon compte
          </NavLink>
        </li>
        <li>
          <NavLink to="/connexion" className="block text-white lg:hover:bg-orange-500 lg:p-2.5" onClick={handleLogOut}>
            Déconnexion
          </NavLink>
        </li>

      </ul>
    </div>
  );
}

export default function navBar() {
  const [menuState, setMenuState] = useState(false);

  // Replace javascript:void(0) path with your path
  const navigation = [
    { title: 'Accueil', path: '/' },
    { title: 'Mes pièces', path: '/creer-mon-demenagement-pieces' },
    { title: 'A propos', path: 'a-propos' },
    { title: 'Contact', path: 'contact' },
    { title: 'Mentions légales', path: 'mentions-legales' },
  ];
  return (
    <nav className="bg-orange-400 border-b">
      <div className="flex items-center space-x-8 py-3 px-4 max-w-screen-xl mx-auto md:px-4">
        <div className="flex-none lg:flex-initial">
          <NavLink to="/">
            <img
              src={packagelogo}
              width={40}
              height={40}
              alt="logo"
            />
          </NavLink>
        </div>
        <div className="flex-1 flex items-center justify-between">
          <div className={`bg-orange-400 absolute z-20  w-full top-16 left-0 p-4 border-b lg:z-0 lg:static lg:block lg:border-none ${menuState ? '' : 'hidden'}`}>
            <ul className="mt-12 space-y-5 lg:flex lg:space-x-6 lg:space-y-0 lg:mt-0">
              {
                                navigation.map((item, idx) => (
                                  <li key={idx} className="text-white hover:text-orange-700">
                                    <NavLink to={item.path}>
                                      {item.title}
                                    </NavLink>
                                  </li>
                                ))
                            }
            </ul>
            <ProfileDropDown
              class="mt-5 pt-5 border-t lg:hidden"
            />
          </div>
          <div className="flex-1 flex items-center justify-end space-x-2 sm:space-x-6">
            <form className="flex items-center space-x-2 border rounded-md p-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 flex-none text-white hover:text-orange-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input
                className="w-full outline-none p-2 rounded appearance-none placeholder-gray-500 text-gray-500 sm:w-auto"
                type="text"
                placeholder="Code du carton..."
              />
            </form>
            <ProfileDropDown
              class="hidden lg:block"
            />
            <button
              type="button"
              className="outline-none text-white hover:text-orange-700 block lg:hidden"
              onClick={() => setMenuState(!menuState)}
            >
              {
                                menuState ? (
                                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                  </svg>
                                ) : (
                                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                                  </svg>
                                )
                            }
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
