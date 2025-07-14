import { ButtonGroup } from '@mui/material';
import { FC, ReactNode } from 'react';

export type NavButtonGroupProps = {
  children: ReactNode;
};

const NavButtonGroup: FC<NavButtonGroupProps> = ({ children }) => {
  return (
    <ButtonGroup variant="contained" color="secondary">
      {children}
    </ButtonGroup>
  );
};

export default NavButtonGroup;
