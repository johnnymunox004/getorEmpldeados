// src/components/LoginPage.js
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
  const navigate = useNavigate();
  const setToken = useAuthStore((state) => state.setToken);

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');

    try {
      const response = await axios.post('http://localhost:1500/api/auth/login', { user, password });
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
    <div className="authentication-modal bg-white rounded-lg p-6 w-96 ">
      <h2 className="text-2xl font-bold">{isRegistering ? 'Register' : 'Login'}</h2>
      <form onSubmit={isRegistering ? handleRegister : handleLogin} className="space-y-4">
        <div className="form-group">
          <label htmlFor="username" className="block text-sm font-medium">Username:</label>
          <input 
            type="text" 
            id="username"
            value={user} 
            onChange={(e) => setUser(e.target.value)} 
            required 
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-blue-500 focus:ring-blue-500"
          />
        </div>
        {isRegistering && (
          <div className="form-group">
            <label htmlFor="name" className="block text-sm font-medium">Name:</label>
            <input 
              type="text" 
              id="name"
              value={name} 
              onChange={(e) => setName(e.target.value)} 
              required 
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-blue-500 focus:ring-blue-500"
            />
            <label htmlFor="email" className="block text-sm font-medium">Email:</label>
            <input 
              type="email" 
              id="email"
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              required 
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-blue-500 focus:ring-blue-500"
            />
          </div>
        )}
        <div className="form-group">
          <label htmlFor="password" className="block text-sm font-medium">Password:</label>
          <input 
            type="password" 
            id="password"
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            required 
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-blue-500 focus:ring-blue-500"
          />
        </div>
        {isRegistering && (
          <div className="form-group">
            <label htmlFor="confirmPassword" className="block text-sm font-medium">Confirm Password:</label>
            <input 
              type="password" 
              id="confirmPassword"
              value={confirmPassword} 
              onChange={(e) => setConfirmPassword(e.target.value)} 
              required 
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-blue-500 focus:ring-blue-500"
            />
          </div>
        )}
        {error && <p className="text-red-500">{error}</p>}
        <button type="submit" className="w-full px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
          {isRegistering ? 'Register' : 'Login'}
        </button>
      </form>
      <div className="footer-dashboard  bg-gray-200 p-4 rounded-lg mt-4">
      <Link to='/' className="text-2xl  flex justify-center  ">
      Inicio
    </Link>
      </div>
    </div>
  );
};

export default LoginPage;