import { ReactNode, useState } from 'react';
import { IconButton } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { getStyles } from './styles';
import { FAVORITE_SERVICE } from '../../service/favorite.service';
import { ProductResponse } from '../../type/product.response.type';
import { FavoriteModel } from '../../model/favorite';

export type FavoriteButtonProps<T extends ProductResponse> = {
  product: T;
  onUpdate: (favorite: FavoriteModel) => void;
  disabled?: boolean;
};

export const FavoriteButton = <T extends ProductResponse>({
  product,
  onUpdate,
  disabled,
}: FavoriteButtonProps<T>): ReactNode => {
  const [styles] = useState(getStyles());

  const like = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>, product: ProductResponse) => {
    e.stopPropagation();
    FAVORITE_SERVICE.addFavorite(product.ml_id)
      .then(({ data }) => onUpdate(data))
      .catch((error) => console.error(error));
  };

  const unlike = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>, product: ProductResponse) => {
    e.stopPropagation();
    FAVORITE_SERVICE.deleteFavorite(product.ml_id)
      .then(({ data }) => onUpdate(data))
      .catch((error) => console.error(error));
  };

  return product.is_favorite ? (
    <IconButton
      sx={styles.iconButton}
      color="primary"
      onClick={(e) => unlike(e, product)}
      disabled={disabled}
      data-testid="favorite"
    >
      <FavoriteIcon />
    </IconButton>
  ) : (
    <IconButton
      sx={styles.iconButton}
      color="primary"
      onClick={(e) => like(e, product)}
      disabled={disabled}
      data-testid="unfavorite"
    >
      <FavoriteBorderIcon />
    </IconButton>
  );
};

export default FavoriteButton;
