// src/AppRoutes.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Page404 from '../pages/404';
import LoginPage from '../pages/pageLogin';
import Home from  "../pages/home"
import DashboardListAspirant from '../pages/dashboardListaspirant';
import DashboardListAspirantRegister from '../pages/registerAspirante';
import DashboarEmpleados from '../pages/dashboardempleados';
import NotificationsPage from "../pages/notificaciones";
import CreateNotificationPage from '../pages/crearnotifi';
import Dashboard from '../pages/dashboard';
import DashboardUsuarios from '../pages/dashboardUsers';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="*" element={<Page404 />} />
      <Route path="/" element={<Home />} />
      <Route path='/dashboard' element={<Dashboard/>}/>

      <Route path='/dashboard/list-aspirant' element={<DashboardListAspirant/>}/>
      <Route path='/dashboard/list-empleados' element={<DashboarEmpleados/>}/>
      <Route path='/dashboard/DashboardJefes' element={<DashboarEmpleados/>}/>


      <Route path='/register' element={<DashboardListAspirantRegister/>}/>

      <Route path='/notificaciones' element={<NotificationsPage/>}/>
      <Route path='/creaaenotificaciones' element={<CreateNotificationPage/>}/>
      <Route path='/dashboard/usuarios' element={<DashboardUsuarios/>}/>







    </Routes>
  );
};

export default AppRoutes;