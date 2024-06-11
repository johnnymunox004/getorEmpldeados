import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import useAuthStore from '../store/useAuthStore';
import { Link } from 'react-router-dom';

const LoginPage = () => {
  const [user, setUser] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [isRegistering, setIsRegistering] = useState(false);
  const [showMissingFields, setShowMissingFields] = useState(false);
  const navigate = useNavigate();
  const setToken = useAuthStore((state) => state.setToken);

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');
    setShowMissingFields(false); // Reset the missing fields notification
    if (!user || !password) {
      setShowMissingFields(true); // Mostrar la notificación de campos faltantes
      return;
    }

    try {
      const response = await axios.post('https://back-gestor-empleados.onrender.com/api/auth/login', { user, password });
      const { token } = response.data;
      
      // Guardar el token en el almacenamiento local y en Zustand
      setToken(token);
      
      // Redirigir a la dashboard
      navigate('/dashboard');
    } catch (error) {
      if (error.response && error.response.status === 401) {
        setError('Invalid username or password');
      } else {
        setError('An error occurred. Please try again.');
      }
    }
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    setError('');
    setShowMissingFields(false); // Reset the missing fields notification

    if (!user || !name || !email || !password || !confirmPassword) {
      setShowMissingFields(true); // Mostrar la notificación de campos faltantes
      return;
    }

    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    try {
      await axios.post('http://localhost:666/api/auth/register', { user, password, email });
      setError('Registration successful, please log in.');
      setIsRegistering(false);
    } catch (error) {
      setError('An error occurred during registration. Please try again.');
    }
  };

  return (
    <div className="flex h-40 bg-indigo-700 w-80 mt-14  ">
      <div className="w-full max-w-xs m-auto bg-indigo-100 rounded p-5">
        <header>
          <img className="w-20 mx-auto mb-5" src="https://img.icons8.com/fluent/344/year-of-tiger.png" alt="logo" />
        </header>
        <h2 className="text-2xl font-bold text-center mb-4">{isRegistering ? 'Register' : 'Login'}</h2>
        <form onSubmit={isRegistering ? handleRegister : handleLogin}>
          <div className="mb-4">
            <label className="block mb-2 text-indigo-500" htmlFor="username">Username</label>
            <input 
              className="w-full p-2 text-indigo-700 border-b-2 border-indigo-500 outline-none focus:bg-gray-300" 
              type="text" 
              id="username"
              value={user} 
              onChange={(e) => setUser(e.target.value)} 
              required 
            />
          </div>
          {isRegistering && (
            <>
              <div className="mb-4">
                <label className="block mb-2 text-indigo-500" htmlFor="name">Name</label>
                <input 
                  className="w-full p-2 text-indigo-700 border-b-2 border-indigo-500 outline-none focus:bg-gray-300" 
                  type="text" 
                  id="name"
                  value={name} 
                  onChange={(e) => setName(e.target.value)} 
                  required 
                />
              </div>
              <div className="mb-4">
                <label className="block mb-2 text-indigo-500" htmlFor="email">Email</label>
                <input 
                  className="w-full p-2 text-indigo-700 border-b-2 border-indigo-500 outline-none focus:bg-gray-300" 
                  type="email" 
                  id="email"
                  value={email} 
                  onChange={(e) => setEmail(e.target.value)} 
                  required 
                />
              </div>
            </>
          )}
          <div className="mb-4">
            <label className="block mb-2 text-indigo-500" htmlFor="password">Password</label>
            <input 
              className="w-full p-2 text-indigo-700 border-b-2 border-indigo-500 outline-none focus:bg-gray-300" 
              type="password" 
              id="password"
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
              required 
            />
          </div>
          {isRegistering && (
            <div className="mb-4">
              <label className="block mb-2 text-indigo-500" htmlFor="confirmPassword">Confirm Password</label>
              <input 
                className="w-full p-2 text-indigo-700 border-b-2 border-indigo-500 outline-none focus:bg-gray-300" 
                type="password" 
                id="confirmPassword"
                value={confirmPassword} 
                onChange={(e) => setConfirmPassword(e.target.value)} 
                required 
              />
            </div>
          )}
          {showMissingFields && (
            <div className="mb-4 text-red-500">Please complete all fields.</div>
          )}
          {error && <p className="text-red-500 mb-4">{error}</p>}
          <div className="mb-4">
            <button 
              type="submit" 
              className="w-full bg-indigo-700 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded"
            >
              {isRegistering ? 'Register' : 'Login'}
            </button>
          </div>
        </form>
        <footer>
          <div className="flex justify-between">
            <Link className="text-indigo-700 hover:text-pink-700 text-sm" to="#">Forgot Password?</Link>
            <Link className="text-indigo-700 hover:text-pink-700 text-sm" to="#" onClick={() => setIsRegistering(!isRegistering)}>
              {isRegistering ? 'Login' : 'Create Account'}
            </Link>
          </div>
        </footer>
        <div className="bg-gray-200 p-4 rounded-lg mt-4">
          <Link to='/' className="text-2xl flex justify-center">
            Inicio
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
