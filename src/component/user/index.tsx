import { FC, MouseEventHandler, useState } from 'react';
import { UserResponse } from '../../type/user-response.type';
import { Button, Card, Chip, Grid2, Tooltip, Typography } from '@mui/material';
import { getStyles } from './styles';
import { Role } from '../../enum/role.enum';
import { useNavigate } from 'react-router';

export type UserProps = {
  user: UserResponse;
  onClick?: MouseEventHandler<HTMLDivElement>;
};

const User: FC<UserProps> = ({ user, onClick, ...rest }) => {
  const [styles] = useState(getStyles(user.role));
  const navigate = useNavigate();

  return (
    <Grid2 sx={styles.root} onClick={onClick} {...rest}>
      <Tooltip title={`${user.firstName} ${user.lastName}`}>
        <Grid2 sx={styles.cardGrid}>
          <Card sx={styles.card}>
            <Grid2 sx={styles.buttons}>
              <Button
                color="primary"
                variant="outlined"
                onClick={() => navigate(`/admin/user/${user.id}/favorite`)}
              >
                Favoritos
              </Button>
              <Button
                color="primary"
                variant="outlined"
                onClick={() => navigate(`/admin/user/${user.id}/purchase`)}
              >
                Compras
              </Button>
            </Grid2>
            <Grid2 sx={styles.user}>
              <Typography variant="h6" sx={styles.name} noWrap>
                {`${user.firstName} ${user.lastName}`}
              </Typography>
              <Typography variant="caption" sx={styles.name} noWrap>
                Email: {user.email}
                <br />
                Username: {user.username}
              </Typography>
            </Grid2>
            <Chip label={user.role} color={user.role === Role.administrator ? 'primary' : 'secondary'} />
          </Card>
        </Grid2>
      </Tooltip>
    </Grid2>
  );
};

export default User;
