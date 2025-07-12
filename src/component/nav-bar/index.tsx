import { AppBar, Button, Grid2, IconButton, Toolbar, Typography } from '@mui/material';
import { FC, MouseEventHandler, useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { getStyles } from './style';
import LogoutIcon from '@mui/icons-material/Logout';
import { AUTH_SERVICE } from '../../service/auth.service';
import { UserResponse } from '../../type/user-response.type';
import { Role } from '../../enum/role.enum';
import BackButton from '../back-button';

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
        <Grid2 sx={styles.backGrid}>
          <BackButton />
        </Grid2>
        <Typography variant="h6" component="div" sx={styles.title}>
          STC
        </Typography>
        <Grid2 sx={styles.user}>
          {user?.role === Role.administrator && (
            <Grid2 sx={styles.users}>
              <Button variant="contained" color="secondary" onClick={() => navigate('/admin/user')}>
                Users
              </Button>
            </Grid2>
          )}
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
