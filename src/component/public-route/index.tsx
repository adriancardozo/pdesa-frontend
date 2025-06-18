import { FC, useEffect, useState } from 'react';
import { Navigate, Outlet } from 'react-router';

const PublicRoute: FC = () => {
  const [authenticated, setAuthenticated] = useState<boolean | null>(null);

  useEffect(() => {
    const accessToken = localStorage.getItem('token');
    setAuthenticated(!!accessToken);
  }, []);

  return authenticated !== null && (authenticated ? <Navigate to="/home" /> : <Outlet />);
};

export default PublicRoute;
