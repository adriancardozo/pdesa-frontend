import { FC, useState } from 'react';
import { UserResponse } from '../../type/user-response.type';
import { Card, Chip, Grid2, Tooltip, Typography } from '@mui/material';
import { getStyles } from './styles';
import { Role } from '../../enum/role.enum';

export type UserProps = {
  user: UserResponse;
};

const User: FC<UserProps> = ({ user, ...rest }) => {
  const [styles] = useState(getStyles());

  return (
    <Grid2 sx={styles.root} onClick={() => console.log(user)} {...rest}>
      <Tooltip title={`${user.firstName} ${user.lastName}`}>
        <Grid2 sx={styles.cardGrid}>
          <Card sx={styles.card}>
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
