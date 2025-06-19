import { FC, useEffect, useState } from 'react';
import { Navigate, Outlet, useNavigate } from 'react-router';
import { httpClient, logout } from '../../service/http-client';

const ProtectedRoute: FC = () => {
  const navigate = useNavigate();
  const [authenticated, setAuthenticated] = useState<boolean | null>(null);

  useEffect(() => {
    httpClient.interceptors.response.use(undefined, logout(navigate));
    const accessToken = localStorage.getItem('token');
    setAuthenticated(!!accessToken);
  }, [navigate]);

  return authenticated !== null && (authenticated ? <Outlet /> : <Navigate to="/" />);
};

export default ProtectedRoute;
