import React from 'react';
import AppRouter from './routes/AppRouter';

import EditJobProvider from './context/EditJob';

import { ThemeProvider } from '@mindlab-vojo/component-library'

function App() {
  return (
    <ThemeProvider>
      <EditJobProvider>
        <AppRouter  />
      </EditJobProvider>
    </ThemeProvider>
  );
}

export default App;
