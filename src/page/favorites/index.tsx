import { Grid2, Typography } from '@mui/material';
import { FC, useEffect, useState } from 'react';
import PageContainer from '../../component/page-container';
import { getStyles } from './style';
import { FAVORITE_SERVICE } from '../../service/favorite.service';
import { ProductModel } from '../../model/product';
import Favorite from '../../component/favorite';

const FavoritesPage: FC = () => {
  const [favorites, setFavorites] = useState<Array<ProductModel>>([]);
  const [styles] = useState(getStyles());

  useEffect(() => {
    FAVORITE_SERVICE.favorites()
      .then(({ data }) => setFavorites(data))
      .catch((e) => console.error(e));
  }, []);

  const updateFavorite = (product: ProductModel) => {
    return setFavorites((previous) => previous.filter((favorite) => favorite.ml_id !== product.ml_id));
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
            onUpdateFavorite={updateFavorite}
          />
        ))}
      </Grid2>
    </PageContainer>
  );
};

export default FavoritesPage;
