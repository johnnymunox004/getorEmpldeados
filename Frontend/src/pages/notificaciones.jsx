import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const NotificationsPage = () => {
  const [notifications, setNotifications] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchNotifications = async () => {
      try {
        const response = await axios.get('http://localhost:1500/api/notifi');
        setNotifications(response.data);
      } catch (error) {
        setError('Se produjo un error al obtener notificaciones.');
      }
    };

    fetchNotifications();
  }, []);

  const deleteNotification = async (id) => {
    try {
      await axios.delete(`http://localhost:1500/api/notifi/${id}`);
      setNotifications(notifications.filter(notification => notification._id !== id));
    } catch (error) {
      setError('Se produjo un error al eliminar la notificación.');
    }
  };

  return (
    <div className="notifications-page bg-white rounded-lg p-6 w-96">
      <h2 className="text-2xl font-bold mb-4">Notificaciones</h2>
      {error && <p className="text-red-500">{error}</p>}
      <div className="space-y-4">
        {notifications.length > 0 ? (
          notifications.map((notification, index) => (
            <div key={index} className="notification-item p-4 border border-gray-300 rounded-md shadow-sm">
              <h3 className="text-lg font-bold">{notification.action}</h3>
              <p>{notification.solicitud}</p>
              <p className="text-gray-500">Enviado por: {notification.quien}</p>
              <button onClick={() => deleteNotification(notification._id)} className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-md mt-2">Eliminar</button>
            </div>
          ))
        ) : (
          <p className="text-gray-500">No hay notificaciones disponibles.</p>
        )}
      </div>
      <div className="footer-dashboard bg-gray-200 p-4 rounded-lg mt-4">
        <Link to='/dashboard/list-empleados' className="text-2xl flex justify-center">
          Dashboard
        </Link>
      </div>
    </div>
  );
};

export default NotificationsPage;
