import './App.css';
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
