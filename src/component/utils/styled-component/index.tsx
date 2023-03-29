import React from 'react';
import { ThemeProvider } from 'styled-components';

import { colors } from '@/component/utils/color';

interface StyledProps {
  children: React.ReactNode;
}

const theme = {
  colors: colors,
};

const StyledProvider = ({ children }: StyledProps) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export { StyledProvider, theme };
