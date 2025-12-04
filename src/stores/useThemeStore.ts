// stores/useThemeStore.ts
import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { ThemeMode } from '../types/themeType';



interface ThemeStore {
  mode: ThemeMode | string;
//   toggleTheme: () => void;
  setThemeMode: (mode: string) => void;
}

export const useThemeStore = create<ThemeStore>()(
  persist(
    (set) => ({
      mode: (typeof window !== 'undefined' && window.matchMedia?.('(prefers-color-scheme: dark)').matches) ? 'dark' : 'light',
    //   toggleTheme: () => {
    //     const newMode = get().mode === 'light' ? 'dark' : 'light';
    //     set({ mode: newMode });
    //   },
      setThemeMode: (mode: string) => set({ mode }),
    }),
    {
      name: 'health-assistant-theme-mode',
      partialize: (state) => ({ mode: state.mode }), // chỉ lưu mode
    }
  )
);
