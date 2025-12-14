import { ConfigProvider, theme as antdTheme } from 'antd';
import { useThemeStore } from '../../stores/useThemeStore';
import { useMemo } from 'react';
import { themeMap } from '../../types/themeType';

/**
 * Theme Provider - sử dụng Zustand store với Ant Design
 */
export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const mode = useThemeStore((state) => state.mode);

  const themeConfig = useMemo(() => {
    const config = themeMap[mode] || themeMap.light;
    // Apply dark algorithm if dark mode
    if (mode === 'dark') {
      return {
        ...config,
        algorithm: antdTheme.darkAlgorithm,
      };
    }
    return {
      ...config,
      algorithm: antdTheme.defaultAlgorithm,
    };
  }, [mode]);
  
  return (
    <ConfigProvider theme={themeConfig}>
      {children}
    </ConfigProvider>
  );
};
