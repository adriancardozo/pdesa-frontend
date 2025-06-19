import { FC, useState } from 'react';
import { IconButton } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { getStyles } from './styles';
import { ProductModel } from '../../model/product';

export type FavoriteButtonProps = {
  product: ProductModel;
  onLike(e: React.MouseEvent<HTMLButtonElement, MouseEvent>, product: ProductModel): void;
  onUnlike(e: React.MouseEvent<HTMLButtonElement, MouseEvent>, product: ProductModel): void;
};

export const FavoriteButton: FC<FavoriteButtonProps> = ({ product, onLike, onUnlike }) => {
  const [styles] = useState(getStyles());

  return product.is_favorite ? (
    <IconButton
      sx={styles.iconButton}
      color="primary"
      onClick={(e) => onUnlike(e, product)}
      data-testid="favorite"
    >
      <FavoriteIcon />
    </IconButton>
  ) : (
    <IconButton
      sx={styles.iconButton}
      color="primary"
      onClick={(e) => onLike(e, product)}
      data-testid="unfavorite"
    >
      <FavoriteBorderIcon />
    </IconButton>
  );
};

export default FavoriteButton;
