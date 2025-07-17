import { Grid2, Typography } from '@mui/material';
import { FC, useEffect, useState } from 'react';
import PageContainer from '../../component/page-container';
import { getStyles } from './style';
import { FAVORITE_SERVICE } from '../../service/favorite.service';
import Favorite from '../../component/favorite';
import { useNavigate } from 'react-router';
import { FavoriteModel } from '../../model/favorite';

const FavoritesPage: FC = () => {
  const navigate = useNavigate();
  const [favorites, setFavorites] = useState<Array<FavoriteModel>>([]);
  const [styles] = useState(getStyles());

  useEffect(() => {
    FAVORITE_SERVICE.favorites()
      .then(({ data }) => setFavorites(data))
      .catch((e) => console.error(e));
  }, []);

  const updateFavorite = (search: FavoriteModel) => {
    return setFavorites((previous) => previous.map((favorite) => search.replace(favorite)));
  };

  const deleteFavorite = (search: FavoriteModel) => {
    return setFavorites((previous) => previous.filter((favorite) => favorite.ml_id !== search.ml_id));
  };

  return (
    <PageContainer>
      <Grid2 sx={styles.root}>
        <Grid2 sx={styles.header}>
          <Typography variant="h4" sx={styles.title}>
            Favoritos
          </Typography>
        </Grid2>
        {favorites.map((favorite) => (
          <Favorite
            key={`favorite-${favorite.ml_id}`}
            favorite={favorite}
            onClick={() => navigate(`/product/${favorite.ml_id}`)}
            onUpdateReview={updateFavorite}
            onDeleteReview={updateFavorite}
            onUpdateFavorite={deleteFavorite}
          />
        ))}
      </Grid2>
    </PageContainer>
  );
};

export default FavoritesPage;
