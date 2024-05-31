// src/components/LoginPage.js
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import useAuthStore from '../store/useAuthStore.jsx';

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
      const response = await axios.post('http://localhost:1500/api/auth/login', { email, password });
      const { token } = response.data;
      
      // Guardar el token en el almacenamiento local y en Zustand
      setToken(token);
      
      // Redirigir a la dashboard
      navigate('/dashboard');
    } catch (error) {
      if (error.response && error.response.status === 401) {
        setError('Correo electrónico o contraseña incorrectos');
      } else {
        setError('Ocurrió un error. Por favor, inténtalo de nuevo.');
      }
    }
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    setError('');

    if (password !== confirmPassword) {
      setError('Las contraseñas no coinciden');
      return;
    }

    try {
      await axios.post('http://localhost:1500/api/auth/register', { user, name, email, password });
      setError('Registro exitoso, por favor inicia sesión.');
      setIsRegistering(false);
    } catch (error) {
      setError('Ocurrió un error durante el registro. Por favor, inténtalo de nuevo.');
    }
  };

  return (
    <div className="login-container">
      <h2>{isRegistering ? 'Registrar' : 'Iniciar sesión'}</h2>
      <form onSubmit={isRegistering ? handleRegister : handleLogin}>
        {isRegistering && (
          <>
            <div className="form-group">
              <label>Usuario:</label>
              <input 
                type="text" 
                value={user} 
                onChange={(e) => setUser(e.target.value)} 
                required 
              />
            </div>
            <div className="form-group">
              <label>Nombre:</label>
              <input 
                type="text" 
                value={name} 
                onChange={(e) => setName(e.target.value)} 
                required 
              />
            </div>
          </>
        )}
        <div className="form-group">
          <label>Email:</label>
          <input 
            type="email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            required 
          />
        </div>
        <div className="form-group">
          <label>Contraseña:</label>
          <input 
            type="password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            required 
          />
        </div>
        {isRegistering && (
          <div className="form-group">
            <label>Confirmar contraseña:</label>
            <input 
              type="password" 
              value={confirmPassword} 
              onChange={(e) => setConfirmPassword(e.target.value)} 
              required 
            />
          </div>
        )}
        {error && <p className="error">{error}</p>}
        <button type="submit" className="btn-login">{isRegistering ? 'Registrar' : 'Iniciar sesión'}</button>
      </form>
      <button onClick={() => setIsRegistering(!isRegistering)} className="btn-toggle">
        {isRegistering ? '¿Ya tienes una cuenta? Inicia sesión' : '¿No tienes una cuenta? Regístrate'}
      </button>
    </div>
  );
};

export default LoginPage;
