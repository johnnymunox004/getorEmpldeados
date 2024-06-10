import { create } from 'zustand';
import axios from 'axios';

const useAspirantesStore = create((set) => ({
  aspirantes: [],
  loading: false,
  error: null,

  fetchAspirantes: async () => {
    set({ loading: true });
    try {
      const token = localStorage.getItem('token');
      const response = await axios.get("https://back-gestor-empleados.onrender.com/api/aspirantes", {
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`,
        },
      });
      set({ aspirantes: response.data, loading: false });
    } catch (error) {
      set({ error: error.message, loading: false });
    }
  },

  createAspirante: async (newAspirante) => {
    set({ loading: true });
    try {
      const token = localStorage.getItem('token');
      await axios.post("https://back-gestor-empleados.onrender.com/api/aspirantes", newAspirante, {
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`,
        },
      });
      set((state) => ({ aspirantes: [...state.aspirantes, newAspirante], loading: false }));
    } catch (error) {
      set({ error: error.message, loading: false });
    }
  },

  updateAspirante: async (id, updatedAspirante) => {
    set({ loading: true });
    try {
      const token = localStorage.getItem('token');
      await axios.put(`https://back-gestor-empleados.onrender.com/api/aspirantes/${id}`, updatedAspirante, {
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`,
        },
      });
      set((state) => ({
        aspirantes: state.aspirantes.map((aspirante) =>
          aspirante._id === id ? updatedAspirante : aspirante
        ),
        loading: false,
      }));
    } catch (error) {
      set({ error: error.message, loading: false });
    }
  },

  deleteAspirante: async (id) => {
    set({ loading: true });
    try {
      const token = localStorage.getItem('token');
      await axios.delete(`https://back-gestor-empleados.onrender.com/api/aspirantes/${id}`, {
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`,
        },
      });
      set((state) => ({
        aspirantes: state.aspirantes.filter((aspirante) => aspirante._id !== id),
        loading: false,
      }));
    } catch (error) {
      set({ error: error.message, loading: false });
    }
  },
}));

export default useAspirantesStore;
