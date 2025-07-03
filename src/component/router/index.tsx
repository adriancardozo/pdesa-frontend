import { BrowserRouter, Route, Routes } from 'react-router';
import LoginPage from '../../page/login';
import { CssBaseline } from '@mui/material';
import HomePage from '../../page/home';
import ProtectedRoute from '../protected-route';
import PublicRoute from '../public-route';
import RegisterPurchaserPage from '../../page/register-purchaser';

const Router = () => {
  return (
    <>
      <CssBaseline />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PublicRoute />}>
            <Route path="/" element={<LoginPage />} />
          </Route>
          <Route path="/register" element={<PublicRoute />}>
            <Route path="/register" element={<RegisterPurchaserPage />} />
          </Route>
          <Route path="/home" element={<ProtectedRoute />}>
            <Route path="/home" element={<HomePage />} />
          </Route>
          <Route path="/results" element={<ProtectedRoute />}>
            <Route path="/results" element={<HomePage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Router;
