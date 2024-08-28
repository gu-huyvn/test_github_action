import { ThemeProvider as _ThemeProvider } from '@mui/material/styles';
import { RefineThemes } from '@refinedev/mui';
import React, { createContext, PropsWithChildren } from 'react';

type ColorModeContextType = {
  mode: string;
  setMode: () => void;
};

export const ColorModeContext = createContext<ColorModeContextType>(
  {} as ColorModeContextType
);

export const ThemeProvider: React.FC<PropsWithChildren> = ({ children }) => {
  return <_ThemeProvider theme={RefineThemes.Blue}>{children}</_ThemeProvider>;
};
