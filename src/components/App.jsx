import { RequireAuth, useIsAuthenticated } from 'react-auth-kit';
import {
  Navigate, Route, Routes, useLocation,
} from 'react-router-dom';

import './App.scss';

import { useEffect } from 'react';
import Home from './Home/Home';
import Header from './Header/Header';
import AboutUs from './AboutUs/AboutUs';
import Contact from './Contact/Contact';
import Error404 from './Error404/Error404';
import CardBoard from './CardBoard/CardBoard';
import LoginForm from './LoginForm/LoginForm';
import SignUpPage from './SignUpPage/SignUpPage';
import AddingRoomForm from './CreateProject/AddingRoomForm/AddingRoomForm';
import CreateProject from './CreateProject/CreateProject';
import TermsOfService from './TermsOfService/TermsOfService';
import MyAccount from './MyAccount/MyAccount';

function App() {
  const location = useLocation();
  const isAuthenticated = useIsAuthenticated();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, [location]);

  return (
    <div className="App">

      {isAuthenticated() && <Header />}

      <Routes>
        <Route path="/inscription" element={isAuthenticated() ? <Navigate to="/" /> : <SignUpPage />} />
        <Route path="/connexion" element={isAuthenticated() ? <Navigate to="/" /> : <LoginForm />} />
        <Route path="/creer-mon-demenagement" element={<RequireAuth loginPath="/inscription"><CreateProject /></RequireAuth>} />
        <Route path="/creer-mon-demenagement-pieces" element={<RequireAuth loginPath="/inscription"><AddingRoomForm /></RequireAuth>} />
        <Route path="/" element={<RequireAuth loginPath="/inscription"><Home /></RequireAuth>} />
        <Route path="/mon-carton/:id" element={<RequireAuth loginPath="/inscription"><CardBoard /></RequireAuth>} />
        <Route path="/mon-compte" element={<RequireAuth loginPath="/inscription"><MyAccount /></RequireAuth>} />
        <Route path="/a-propos" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/mentions-legales" element={<TermsOfService />} />
        <Route path="*" element={<Error404 />} />
      </Routes>

    </div>
  );
}

export default App;
