import { AppBar, Grid2, IconButton, Toolbar, Typography } from '@mui/material';
import { FC, MouseEventHandler, useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { getStyles } from './style';
import LogoutIcon from '@mui/icons-material/Logout';
import { AUTH_SERVICE } from '../../service/auth.service';
import { UserResponse } from '../../type/user.response.type';
import RoleNavButtonGroup from '../role-nav-button-group';

const NavBar: FC = () => {
  const [user, setUser] = useState<UserResponse>();
  const [styles] = useState(getStyles());
  const navigate = useNavigate();

  useEffect(() => {
    AUTH_SERVICE.profile().then(({ data }) => setUser(data));
  }, []);

  const logout: MouseEventHandler<HTMLButtonElement> = () => {
    localStorage.clear();
    navigate('/');
  };

  return (
    <AppBar component="nav" position="relative">
      <Toolbar>
        <Grid2 sx={styles.backGrid}>{user && <RoleNavButtonGroup role={user.role} />}</Grid2>
        <Typography variant="h6" component="div" sx={styles.title}>
          STC
        </Typography>
        <Grid2 sx={styles.user}>
          <Typography variant="body1" component="div">
            {user?.firstName} {user?.lastName}
          </Typography>
          <IconButton sx={styles.iconButton} onClick={logout}>
            <LogoutIcon />
          </IconButton>
        </Grid2>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
