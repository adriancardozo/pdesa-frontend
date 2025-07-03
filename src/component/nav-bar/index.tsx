import { AppBar, IconButton, Toolbar, Typography } from '@mui/material';
import { FC, MouseEventHandler, useState } from 'react';
import { useNavigate } from 'react-router';
import { getStyles } from './style';
import LogoutIcon from '@mui/icons-material/Logout';

const NavBar: FC = () => {
  const [styles] = useState(getStyles());
  const navigate = useNavigate();

  const logout: MouseEventHandler<HTMLButtonElement> = () => {
    localStorage.clear();
    navigate('/');
  };

  return (
    <AppBar component="nav" position="relative">
      <Toolbar>
        <Typography variant="h6" component="div" sx={styles.title}>
          STC
        </Typography>
        <IconButton sx={styles.iconButton} onClick={logout}>
          <LogoutIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
