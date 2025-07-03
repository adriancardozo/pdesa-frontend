import { FC, MouseEventHandler, useState } from 'react';
import PageContainer from '../../component/page-container';
import { Button, Stack, TextField, Typography } from '@mui/material';
import { getStyles } from './style';
import { useNavigate } from 'react-router';
import { Role } from '../../enum/role.enum';
import { AUTH_SERVICE } from '../../service/auth.service';

const AdminUserRegisterPage: FC = () => {
  const [styles] = useState(getStyles());
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [dni, setDni] = useState('');
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('');
  const navigate = useNavigate();

  const register: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault();
    if (role === Role.purchaser) {
      AUTH_SERVICE.registerPurchaser(firstName, lastName, dni, email, username, password).then(() =>
        navigate('/admin/user'),
      );
    } else {
      AUTH_SERVICE.registerAdministrator(firstName, lastName, dni, email, username, password).then(() =>
        navigate('/admin/user'),
      );
    }
  };

  return (
    <PageContainer>
      <Typography variant="h4">Crear usuario</Typography>
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
          label="Rol"
          variant="standard"
          value={role}
          onChange={(e) => setRole(e.target.value)}
          data-testid="register-role"
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
          Crear
        </Button>
      </Stack>
    </PageContainer>
  );
};

export default AdminUserRegisterPage;
