import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client';
import App from './App.tsx'
import { MantineProvider, localStorageColorSchemeManager, createTheme } from '@mantine/core';
import '@mantine/core/styles.css';

const colorSchemeManager = localStorageColorSchemeManager({
  key: 'lens-lab-color-scheme',
});

const theme = createTheme({
  fontFamily: 'Open Sans, sans-serif',
  primaryColor: 'grape',
  headings: {
    fontFamily: 'Outfit, sans-serif',
    fontWeight: '600',
  },
});

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <MantineProvider
      defaultColorScheme='auto'
      colorSchemeManager={colorSchemeManager}
      theme={theme}
      classNamesPrefix='ll'
    >
      <App />
    </MantineProvider>
  </StrictMode>
);
