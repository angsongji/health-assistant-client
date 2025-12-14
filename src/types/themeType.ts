import { lightThemeConfig, darkThemeConfig } from '../theme';
import type { ThemeConfig } from 'antd';

export type ThemeMode = 'light' | 'dark';

export const themeMap: Record<ThemeMode | string, ThemeConfig> = {
    light: lightThemeConfig,
    dark: darkThemeConfig,
};

export const themeModeListName: Record<ThemeMode | string, string> = {
    light: 'Light',
    dark: 'Dark',
};