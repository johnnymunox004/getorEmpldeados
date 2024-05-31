import { create } from 'zustand';
import axios from 'axios';

const useAspiranteStore = create((set) => ({
  token: localStorage.getItem('token') || null,
  isLoggedIn: !!localStorage.getItem('token'),
  aspiranteList: [],
  message: "",
  loading: false,
  error: "",

  fetchAspiranteList: async () => {
    const token = localStorage.getItem('token');
    if (!token) {
      set({ message: "Token no disponible. Por favor, inicia sesión." });
      return;
    }

    try {
      set({ loading: true });
      const response = await axios.get('http://localhost:1500/api/aspirantes', {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
      });
      set({ aspiranteList: response.data, loading: false });
    } catch (error) {
      console.error('Error fetching AspiranteList:', error);
      set({ error: "Error al obtener la lista de aspirantes. Por favor, intenta de nuevo.", loading: false });
    }
  },

  createAspirante: async (newAspirante) => {
    const token = localStorage.getItem('token');
    if (!token) {
      set({ message: "Token no disponible. Por favor, inicia sesión." });
      return;
    }

    try {
      const response = await axios.post('http://localhost:1500/api/aspirantes', newAspirante, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
      });
      set((state) => ({
        aspiranteList: [...state.aspiranteList, response.data],
        message: "Aspirante creado con éxito"
      }));
    } catch (error) {
      console.error('Error creating aspirante:', error);
      set({ error: "Error al crear aspirante. Por favor, intenta de nuevo." });
    }
  },

  updateAspirante: async (id, updatedAspirante) => {
    const token = localStorage.getItem('token');
    if (!token) {
      set({ message: "Token no disponible. Por favor, inicia sesión." });
      return;
    }

    try {
      const response = await axios.put(`http://localhost:1500/api/aspirantes/${id}`, updatedAspirante, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
      });

      set((state) => ({
        aspiranteList: state.aspiranteList.map(aspirante => aspirante._id === id ? response.data : aspirante),
        message: "Aspirante actualizado con éxito"
      }));
    } catch (error) {
      console.error('Error updating aspirante:', error);
      set({ error: "Error al actualizar aspirante. Por favor, intenta de nuevo." });
    }
  },

  deleteAspirante: async (id) => {
    const token = localStorage.getItem('token');
    if (!token) {
      set({ message: "Token no disponible. Por favor, inicia sesión." });
      return;
    }

    try {
      await axios.delete(`http://localhost:1500/api/aspirantes/${id}`, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
      });

      set((state) => ({
        aspiranteList: state.aspiranteList.filter(aspirante => aspirante._id !== id),
        message: "Aspirante eliminado con éxito"
      }));
    } catch (error) {
      console.error('Error deleting aspirante:', error);
      set({ error: "Error al eliminar aspirante. Por favor, intenta de nuevo." });
    }
  },

  loginUser: async (email, password) => {
    try {
      const response = await axios.post('http://localhost:1500/api/login', { email, password });
      const newToken = response.data.token;
      localStorage.setItem('token', newToken);
      set({ token: newToken, isLoggedIn: true });
      await useAspiranteStore.getState().fetchAspiranteList(); // Llama fetchAspiranteList después de iniciar sesión
      set({ message: "Inicio de sesión exitoso" });
    } catch (error) {
      console.error('Error logging in:', error);
      set({ error: "Error al iniciar sesión. Por favor, verifica tus credenciales." });
    }
  },

  logoutUser: () => {
    localStorage.removeItem('token');
    set({ token: null, isLoggedIn: false, aspiranteList: [], message: "Sesión cerrada" });
  },
}));

export default useAspiranteStore;
