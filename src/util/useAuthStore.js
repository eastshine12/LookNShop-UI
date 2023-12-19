/* eslint-disable no-unused-vars */
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const useAuthStore = create(
  persist(
    (set, get) => ({
      user: null,
      setUser: (data) => set({ user: data }),
      logout: () => set({ user: null }),
    }),
    {
      name: 'auth-storage',
      getStorage: () => localStorage,
    },
  ),
);

export default useAuthStore;
