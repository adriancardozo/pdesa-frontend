import { FC, useEffect, useState } from 'react';
import { Navigate, Outlet, useNavigate } from 'react-router';
import { httpClient, logout } from '../../service/http-client';
import { Role } from '../../enum/role.enum';
import { AUTH_SERVICE } from '../../service/auth.service';

export type ProtectedRouteProps = {
  roles?: Array<Role>;
};

const ProtectedRoute: FC<ProtectedRouteProps> = ({ roles }) => {
  const navigate = useNavigate();
  const [authenticated, setAuthenticated] = useState<boolean | null>(null);

  useEffect(() => {
    httpClient.interceptors.response.use(undefined, logout(navigate));
    const accessToken = localStorage.getItem('token');
    if (accessToken) {
      AUTH_SERVICE.profile().then(({ data }) => setAuthenticated(roles?.includes(data.role) ?? true));
    } else {
      setAuthenticated(false);
    }
  }, [roles, navigate]);

  return authenticated !== null && (authenticated ? <Outlet /> : <Navigate to="/" />);
};

export default ProtectedRoute;
