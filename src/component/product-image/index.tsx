import { Grid2 } from '@mui/material';
import { ReactNode, useState } from 'react';
import FavoriteButton from '../favorite-button';
import { ProductResponse } from '../../type/product.response.type';
import { getStyles } from './styles';
import { Property } from 'csstype';
import { FavoriteModel } from '../../model/favorite';

export type ProductImageProps<T extends ProductResponse> = {
  product: T;
  width?: Property.Width<string | number>;
  withFavorite?: boolean;
  onUpdate: (favorite: FavoriteModel) => void;
  disabled?: boolean;
};

const ProductImage = <T extends ProductResponse>({
  product,
  width,
  withFavorite,
  onUpdate,
  disabled,
}: ProductImageProps<T>): ReactNode => {
  const [styles] = useState(getStyles(width));
  const favorite = withFavorite ?? true;

  return (
    <Grid2 sx={styles.root}>
      <Grid2 sx={styles.imageGrid}>
        <Grid2 component="img" src={product.images[0]} sx={styles.image} />
      </Grid2>
      {favorite && (
        <Grid2 sx={styles.favoriteGrid}>
          <FavoriteButton product={product} onUpdate={onUpdate} disabled={disabled} />
        </Grid2>
      )}
    </Grid2>
  );
};

export default ProductImage;
