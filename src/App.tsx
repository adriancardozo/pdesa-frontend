// import { useState } from 'react';
// import reactLogo from './assets/react.svg';
// import viteLogo from '/vite.svg';
import './App.css';
// import { Button, CssBaseline } from '@mui/material';
import { CssBaseline } from '@mui/material';
import Router from './component/router';

function App() {
  console.log(`Version: ${import.meta.env.VITE_SELF_VERSION ?? '-'}`);

  return (
    <>
      <CssBaseline />
      <Router />
    </>
  );
}

export default App;
