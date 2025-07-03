import { Button, Grid2, Stack, TextField, Typography } from '@mui/material';
import { FC, MouseEventHandler, useState } from 'react';
import { useNavigate } from 'react-router';
import { AUTH_SERVICE } from '../../service/auth.service';
import { getStyles } from './style';

const RegisterPurchaserPage: FC = () => {
  const [styles] = useState(getStyles());
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [dni, setDni] = useState('');
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const register: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault();
    AUTH_SERVICE.registerPurchaser(firstName, lastName, dni, email, username, password).then(({ data }) => {
      localStorage.setItem('token', data.access_token);
      navigate('/home');
    });
  };

  return (
    <Grid2 sx={styles.root}>
      <Typography variant="h3" color="textSecondary">
        STC
      </Typography>
      <Typography variant="body1">Registrarse</Typography>
      <Stack component="form" sx={styles.form} spacing={2} noValidate autoComplete="off">
        <TextField
          label="Nombre"
          variant="standard"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          data-testid="register-firstname"
        />
        <TextField
          label="Apellido"
          variant="standard"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          data-testid="register-lastname"
        />
        <TextField
          label="DNI"
          variant="standard"
          value={dni}
          onChange={(e) => setDni(e.target.value)}
          data-testid="register-dni"
        />
        <TextField
          label="Correo electrónico"
          variant="standard"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          data-testid="register-email"
        />
        <TextField
          label="Usuario"
          variant="standard"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          data-testid="register-username"
        />
        <TextField
          label="Contraseña"
          variant="standard"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          data-testid="register-password"
        />
        <Button type="submit" onClick={register} data-testid="register-submit">
          Registrarse
        </Button>
      </Stack>
      <Typography>
        Si ya tienes una cuenta, haz{' '}
        <Typography component="a" href="/">
          click aquí.
        </Typography>
      </Typography>
    </Grid2>
  );
};

export default RegisterPurchaserPage;
