import { BrowserRouter, Route, Routes } from 'react-router';
import LoginPage from '../../page/login';
import { CssBaseline } from '@mui/material';
import HomePage from '../../page/home';
import ProtectedRoute from '../protected-route';
import PublicRoute from '../public-route';
import RegisterPurchaserPage from '../../page/register-purchaser';
import { Role } from '../../enum/role.enum';
import AdminHomePage from '../../page/admin-home';
import AdminUsersPage from '../../page/admin-users';
import AdminUserRegisterPage from '../../page/admin-user-register';
import ProductPage from '../../page/product';
import PurchasesPage from '../../page/purchases';
import FavoritesPage from '../../page/favorites';
import AdminProductPage from '../../page/admin-product';
import AdminUserFavoritesPage from '../../page/admin-user-favorites';
import AdminUserPurchasesPage from '../../page/admin-user-purchases';

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
          <Route path="/home" element={<ProtectedRoute roles={[Role.purchaser]} />}>
            <Route path="/home" element={<HomePage />} />
          </Route>
          <Route path="/results" element={<ProtectedRoute roles={[Role.purchaser]} />}>
            <Route path="/results" element={<HomePage />} />
          </Route>
          <Route path="/product" element={<ProtectedRoute roles={[Role.purchaser]} />}>
            <Route path="/product/:ml_id" element={<ProductPage />} />
          </Route>
          <Route path="/favorite" element={<ProtectedRoute roles={[Role.purchaser]} />}>
            <Route path="/favorite" element={<FavoritesPage />} />
          </Route>
          <Route path="/purchase" element={<ProtectedRoute roles={[Role.purchaser]} />}>
            <Route path="/purchase" element={<PurchasesPage />} />
          </Route>
          <Route path="/admin/home" element={<ProtectedRoute roles={[Role.administrator]} />}>
            <Route path="/admin/home" element={<AdminHomePage />} />
          </Route>
          <Route path="/admin/user" element={<ProtectedRoute roles={[Role.administrator]} />}>
            <Route path="/admin/user" element={<AdminUsersPage />} />
          </Route>
          <Route path="/admin/user/register" element={<ProtectedRoute roles={[Role.administrator]} />}>
            <Route path="/admin/user/register" element={<AdminUserRegisterPage />} />
          </Route>
          <Route
            path="/admin/user/:user_id/favorite"
            element={<ProtectedRoute roles={[Role.administrator]} />}
          >
            <Route path="/admin/user/:user_id/favorite" element={<AdminUserFavoritesPage />} />
          </Route>
          <Route
            path="/admin/user/:user_id/purchase"
            element={<ProtectedRoute roles={[Role.administrator]} />}
          >
            <Route path="/admin/user/:user_id/purchase" element={<AdminUserPurchasesPage />} />
          </Route>
          <Route path="/admin/product" element={<ProtectedRoute roles={[Role.administrator]} />}>
            <Route path="/admin/product/:ml_id" element={<AdminProductPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Router;
