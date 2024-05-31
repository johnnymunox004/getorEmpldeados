// src/AppRoutes.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Page404 from '../pages/404';
import LoginPage from '../pages/pageLogin';
import { AspiranteList } from '../components/aspirantesList';


const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
     
      <Route path='/aspirante-list' element={<AspiranteList/>}  />
      <Route path="*" element={<Page404 />} />
    </Routes>
  );
};

export default AppRoutes;