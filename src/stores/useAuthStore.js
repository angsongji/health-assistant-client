import { create } from 'zustand';

const useAuthStore = create((set) => ({
  user: null,
  isAuthenticated: false,
  isLoading: false,

  login: async (userData) => {
    // Giả lập login
    set({ isLoading: true });
    try {
      // const res = await axiosClient.post('/login', userData);
      // Giả sử thành công
      localStorage.setItem('accessToken', 'mock-token');
      set({ user: userData, isAuthenticated: true, isLoading: false });
    } catch (error) {
      set({ isLoading: false });
      throw error;
    }
  },

  logout: () => {
    localStorage.removeItem('accessToken');
    set({ user: null, isAuthenticated: false });
  },
}));

export default useAuthStore;