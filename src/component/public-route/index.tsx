import { FC, useEffect, useState } from 'react';
import { Navigate, Outlet, useNavigate } from 'react-router';
import { AUTH_SERVICE } from '../../service/auth.service';
import { Role } from '../../enum/role.enum';
import { httpClient, logout } from '../../service/http-client';

const PublicRoute: FC = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState<{ authenticated: boolean | null; role: Role | null }>({
    authenticated: null,
    role: null,
  });

  useEffect(() => {
    httpClient.interceptors.response.use(undefined, logout(navigate));
    const accessToken = localStorage.getItem('token');
    if (accessToken) {
      AUTH_SERVICE.profile().then(({ data }) => setUser({ authenticated: true, role: data.role }));
    } else {
      setUser({ authenticated: false, role: null });
    }
  }, [navigate]);

  return (
    user.authenticated !== null &&
    (user.authenticated ? (
      <Navigate to={user.role === Role.purchaser ? '/home' : '/admin/home'} />
    ) : (
      <Outlet />
    ))
  );
};

export default PublicRoute;
