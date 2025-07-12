import { Dispatch, FC, SetStateAction, useState } from 'react';
import { Card, Grid2, Tooltip, Typography } from '@mui/material';
import { getStyles } from './styles';
import FavoriteButton from '../favorite-button';
import { ProductModel } from '../../model/product';
import { useNavigate } from 'react-router';

export type ProductProps = {
  product: ProductModel;
  setProducts: Dispatch<SetStateAction<ProductModel[]>>;
};

const Product: FC<ProductProps> = ({ product, setProducts, ...rest }) => {
  const navigate = useNavigate();
  const [styles] = useState(getStyles());

  const updateFavorite = (product: ProductModel) => {
    setProducts((previous) => previous.map((search) => product.replace(search)));
  };

  return (
    <Grid2 sx={styles.root} onClick={() => navigate(`/product/${product.ml_id}`)} {...rest}>
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
            <FavoriteButton product={product} onUpdate={updateFavorite} />
          </Grid2>
        </Grid2>
      </Tooltip>
    </Grid2>
  );
};

export default Product;
