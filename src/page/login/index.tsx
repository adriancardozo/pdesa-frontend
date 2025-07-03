import { Button, Stack, TextField, Typography } from '@mui/material';
import { FC, MouseEventHandler, useState } from 'react';
import { useNavigate } from 'react-router';
import { AUTH_SERVICE } from '../../service/auth.service';
import { getStyles } from './style';
import PageContainer from '../../component/page-container';

const LoginPage: FC = () => {
  const [styles] = useState(getStyles());
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const login: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault();
    AUTH_SERVICE.login(username, password).then(({ data }) => {
      localStorage.setItem('token', data.access_token);
      navigate('/home');
    });
  };

  return (
    <PageContainer appBar={false}>
      <Typography variant="h3" color="textSecondary">
        STC
      </Typography>
      <Typography variant="body1">Ingresar a la app</Typography>
      <Stack component="form" sx={styles.form} spacing={2} noValidate autoComplete="off">
        <TextField
          label="Usuario"
          variant="standard"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          data-testid="login-username"
        />
        <TextField
          label="Contraseña"
          variant="standard"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          data-testid="login-password"
        />
        <Button type="submit" onClick={login} data-testid="login-submit">
          Ingresar
        </Button>
      </Stack>
      <Typography>
        Si aún no estás registrado, haz{' '}
        <Typography component="a" href="/register">
          click aquí.
        </Typography>
      </Typography>
    </PageContainer>
  );
};

export default LoginPage;
