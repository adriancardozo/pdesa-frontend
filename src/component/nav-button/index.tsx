import { Button } from '@mui/material';
import { FC, ReactNode } from 'react';
import { useLocation, useNavigate } from 'react-router';

export type NavButtonProps = {
  path: string;
  children: ReactNode;
  disabled?: boolean;
};

const NavButton: FC<NavButtonProps> = ({ path, children, disabled }) => {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <Button onClick={() => navigate(path)} disabled={disabled || location.pathname === path}>
      {children}
    </Button>
  );
};

export default NavButton;
