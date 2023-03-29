import '@/styles/globals.css';

import type { AppProps } from 'next/app';
import { StyledProvider } from '@/component/utils/styled-component';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <StyledProvider>
      <Component {...pageProps} />;
    </StyledProvider>
  );
}
