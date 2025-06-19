import { Dispatch, FC, SetStateAction, useState } from 'react';
import { Card, Grid2, Tooltip, Typography } from '@mui/material';
import { FAVORITE_SERVICE } from '../../service/favorite.service';
import { getStyles } from './styles';
import FavoriteButton from '../favorite-button';
import { ProductModel } from '../../model/product';

export type ProductProps = {
  product: ProductModel;
  setProducts: Dispatch<SetStateAction<ProductModel[]>>;
};

const Product: FC<ProductProps> = ({ product, setProducts, ...rest }) => {
  const [styles] = useState(getStyles());

  const like = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>, product: ProductModel) => {
    e.stopPropagation();
    FAVORITE_SERVICE.addFavorite(product.ml_id)
      .then(({ data }) => setProducts((previous) => previous.map((search) => data.replace(search))))
      .catch((error) => console.error(error));
  };

  const unlike = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>, product: ProductModel) => {
    e.stopPropagation();
    FAVORITE_SERVICE.deleteFavorite(product.ml_id)
      .then(({ data }) => setProducts((previous) => previous.map((search) => data.replace(search))))
      .catch((error) => console.error(error));
  };

  return (
    <Grid2 sx={styles.root} onClick={() => console.log(product)} {...rest}>
      <Tooltip title={product.name}>
        <Grid2>
          <Card sx={styles.card}>
            <Typography variant="caption" sx={styles.name} noWrap>
              {product.name}
            </Typography>
            <Grid2 sx={styles.imageGrid}>
              <Grid2 component="img" src={product.images[0]} sx={styles.image} />
            </Grid2>
          </Card>
          <Grid2 sx={styles.iconButtonGrid}>
            <FavoriteButton product={product} onLike={like} onUnlike={unlike} />
          </Grid2>
        </Grid2>
      </Tooltip>
    </Grid2>
  );
};

export default Product;
