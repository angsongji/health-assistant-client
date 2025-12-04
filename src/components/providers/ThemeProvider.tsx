import { ThemeProvider as MuiThemeProvider, StyledEngineProvider, CssBaseline } from '@mui/material';
import { useThemeStore } from '../../stores/useThemeStore';
import { useMemo } from 'react';
import { themeMap } from '../../types/themeType';





/**
 * Theme Provider - sử dụng Zustand store
 */
export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const mode = useThemeStore((state) => state.mode);

  const theme = useMemo(() => themeMap[mode], [mode]);
  
  return (
    <StyledEngineProvider injectFirst>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </MuiThemeProvider>
    </StyledEngineProvider>
  );
};

