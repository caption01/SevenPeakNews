import React from 'react';
import { ThemeProvider } from 'styled-components';

import { colors } from '@/component/utils/color';

interface StyledProps {
  children: React.ReactNode;
}

const sizes = {
  mobile: '425px',
  tablet: '768px',
  laptop: '1024px',
  desktop: '1440px',
};

export const devices = {
  mobile: `(min-width: ${sizes.mobile})`,
  tablet: `(min-width: ${sizes.tablet})`,
  laptop: `(min-width: ${sizes.laptop})`,
  desktop: `(min-width: ${sizes.desktop})`,
};

const theme = {
  colors: colors,
};

const StyledProvider = ({ children }: StyledProps) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export { StyledProvider, theme };
