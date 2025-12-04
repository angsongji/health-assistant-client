import { lightTheme, darkTheme } from '../theme';
import type { Theme } from '@mui/material';


export type ThemeMode = 'light' | 'dark';

export const themeMap: Record<ThemeMode | string, Theme> = {
    light: lightTheme,
    dark: darkTheme,
    // happyNewYearTheme: happyNewYearTheme,
};

export const themeModeListName: Record<ThemeMode | string, string> = {
    light: 'Light',
    dark: 'Dark',
    // happyNewYearTheme: 'Happy New Year',
  };