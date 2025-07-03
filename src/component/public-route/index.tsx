import { FC, useEffect, useState } from 'react';
import { Navigate, Outlet } from 'react-router';
import { AUTH_SERVICE } from '../../service/auth.service';
import { Role } from '../../enum/role.enum';

const PublicRoute: FC = () => {
  const [user, setUser] = useState<{ authenticated: boolean | null; role: Role | null }>({
    authenticated: null,
    role: null,
  });

  useEffect(() => {
    const accessToken = localStorage.getItem('token');
    if (accessToken) {
      AUTH_SERVICE.profile().then(({ data }) => setUser({ authenticated: true, role: data.role }));
    } else {
      setUser({ authenticated: false, role: null });
    }
  }, []);

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
