import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Home from './Components/Home';
import Login from './Components/Login/Login';
import { UserStorage } from './UserContext';
import User from './Components/User/User';
import ProtectedRoute from './Components/Helper/ProtectedRoute';
import Photo from './Components/Photo/Photo';
import UserProfile from './Components/User/UserProfile';
import NotFound from './Components/NotFound';

const App = () => {
  return (
    <div className='App'>
      {/* Wrapping routes */}
      <BrowserRouter>
        {/* Wrapping context */}
        <UserStorage>
          <Header />
          <main className='AppBody'>
            <Routes>
              <Route path='/social-dogs/' element={<Home />} />
              <Route path='social-dogs/login/*' element={<Login />} />
              <Route
                path='social-dogs/account/*'
                element={
                  <ProtectedRoute>
                    <User />
                  </ProtectedRoute>
                }
              />
              <Route path='social-dogs/photo/:id' element={<Photo />} />
              <Route
                path='social-dogs/profile/:user'
                element={<UserProfile />}
              />
              <Route path='*' element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </UserStorage>
      </BrowserRouter>
    </div>
  );
};

export default App;
