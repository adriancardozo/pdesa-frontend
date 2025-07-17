import { Grid2, Typography } from '@mui/material';
import { FC, useEffect, useState } from 'react';
import PageContainer from '../../component/page-container';
import { getStyles } from './style';
import Favorite from '../../component/favorite';
import { ADMIN_USER_SERVICE } from '../../service/admin-user.service';
import { useNavigate, useParams } from 'react-router';
import { UserResponse } from '../../type/user.response.type';
import { FavoriteResponse } from '../../type/favorite.response';

const AdminUserFavoritesPage: FC = () => {
  const navigate = useNavigate();
  const { user_id } = useParams();
  const [user, setUser] = useState<UserResponse>();
  const [favorites, setFavorites] = useState<Array<FavoriteResponse>>([]);
  const [styles] = useState(getStyles());

  useEffect(() => {
    ADMIN_USER_SERVICE.user(user_id!)
      .then(({ data }) => setUser(data))
      .catch((e) => console.error(e));
    ADMIN_USER_SERVICE.favorites(user_id!)
      .then(({ data }) => setFavorites(data))
      .catch((e) => console.error(e));
  }, [user_id]);

  return (
    <PageContainer>
      <Grid2 sx={styles.root}>
        <Grid2 sx={styles.header}>
          <Typography variant="h4" sx={styles.title}>
            Favoritos: {user?.firstName} {user?.lastName}
          </Typography>
        </Grid2>
        {favorites.map((favorite) => (
          <Favorite
            key={`favorite-${favorite.ml_id}`}
            favorite={favorite}
            onUpdateFavorite={() => undefined}
            onClick={() => navigate(`/admin/product/${favorite.ml_id}`)}
            onUpdateReview={() => undefined}
            onDeleteReview={() => undefined}
            disabled
          />
        ))}
      </Grid2>
    </PageContainer>
  );
};

export default AdminUserFavoritesPage;
