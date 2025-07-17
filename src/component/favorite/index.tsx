import { FC, MouseEventHandler } from 'react';
import Item from '../item';
import ItemChild from '../item-child';
import ProductImage from '../product-image';
import { FavoriteModel } from '../../model/favorite';
import { FavoriteResponse } from '../../type/favorite.response';
import ReviewForm from '../review-form';
import { ReviewType } from '../../enum/review-type.enum';

export type FavoriteProps = {
  favorite: FavoriteResponse;
  onUpdateFavorite: (favorite: FavoriteModel) => void;
  onUpdateReview: (favorite: FavoriteModel) => void;
  onDeleteReview: (favorite: FavoriteModel) => void;
  onClick?: MouseEventHandler<HTMLDivElement>;
  disabled?: boolean;
};

const Favorite: FC<FavoriteProps> = ({
  favorite,
  onUpdateFavorite,
  disabled,
  onUpdateReview,
  onDeleteReview,
  onClick,
  ...rest
}) => {
  return (
    <Item
      title={favorite.name}
      mainContent={
        <ProductImage product={favorite} width="10rem" onUpdate={onUpdateFavorite} disabled={disabled} />
      }
      secondaryContent={
        <ReviewForm
          review={favorite.review}
          type={ReviewType.favorite}
          onUpdate={onUpdateReview}
          onDelete={onDeleteReview}
          disabled={disabled}
        />
      }
      onClick={onClick}
      {...rest}
    >
      <ItemChild
        title="Descripción"
        content={`${favorite.description ? favorite.description : 'Sin descripción'}`}
      />
    </Item>
  );
};

export default Favorite;
