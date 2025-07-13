import { Grid2 } from '@mui/material';
import { ReactNode, useState } from 'react';
import FavoriteButton from '../favorite-button';
import { ProductResponse } from '../../type/product-response.type';
import { getStyles } from './styles';
import { Property } from 'csstype';
import { ProductModel } from '../../model/product';

export type ProductImageProps<T extends ProductResponse> = {
  product: T;
  width?: Property.Width<string | number>;
  onUpdate: (product: ProductModel) => void;
};

const ProductImage = <T extends ProductResponse>({
  product,
  width,
  onUpdate,
}: ProductImageProps<T>): ReactNode => {
  const [styles] = useState(getStyles(width));

  return (
    <Grid2 sx={styles.root}>
      <Grid2 sx={styles.imageGrid}>
        <Grid2 component="img" src={product.images[0]} sx={styles.image} />
      </Grid2>
      <Grid2 sx={styles.favoriteGrid}>
        <FavoriteButton product={product} onUpdate={onUpdate} />
      </Grid2>
    </Grid2>
  );
};

export default ProductImage;
