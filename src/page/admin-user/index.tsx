import { FC, useEffect, useState } from 'react';
import PageContainer from '../../component/page-container';
import { USER_SERVICE } from '../../service/user.service';
import { UserResponse } from '../../type/user-response.type';
import User from '../../component/user';
import { Button, Grid2, Typography } from '@mui/material';
import { getStyles } from './style';
import { useNavigate } from 'react-router';

const AdminUserPage: FC = () => {
  const navigate = useNavigate();
  const [styles] = useState(getStyles());
  const [users, setUsers] = useState<Array<UserResponse>>([]);

  useEffect(() => {
    USER_SERVICE.users().then(({ data }) => setUsers(data));
  }, []);

  return (
    <PageContainer>
      <Grid2 sx={styles.root}>
        <Grid2 sx={styles.header}>
          <Typography variant="h4" sx={styles.title}>
            Usuarios
          </Typography>
          <Button onClick={() => navigate('/admin/user/register')}>Create user</Button>
        </Grid2>
        {users.map((user) => (
          <User key={`user-${user.id}`} user={user} />
        ))}
      </Grid2>
    </PageContainer>
  );
};

export default AdminUserPage;
