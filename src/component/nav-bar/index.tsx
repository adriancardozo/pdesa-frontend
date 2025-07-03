import { AppBar, IconButton, Toolbar, Typography } from '@mui/material';
import { FC, MouseEventHandler, useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { getStyles } from './style';
import LogoutIcon from '@mui/icons-material/Logout';
import { AUTH_SERVICE } from '../../service/auth.service';
import { UserResponse } from '../../type/user-response.type';

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
        <Typography variant="h6" component="div" sx={styles.title}>
          STC
        </Typography>
        <Typography variant="body1" component="div">
          {user?.firstName} {user?.lastName}
        </Typography>
        <IconButton sx={styles.iconButton} onClick={logout}>
          <LogoutIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
