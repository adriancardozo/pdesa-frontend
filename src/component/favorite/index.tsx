import { FC, MouseEventHandler } from 'react';
import Item from '../item';
import ItemChild from '../item-child';
import ProductImage from '../product-image';
import { ProductResponse } from '../../type/product-response.type';
import { ProductModel } from '../../model/product';

export type FavoriteProps = {
  favorite: ProductResponse;
  onUpdateFavorite: (product: ProductModel) => void;
  onClick?: MouseEventHandler<HTMLDivElement>;
  disabled?: boolean;
};

const Favorite: FC<FavoriteProps> = ({ favorite, onUpdateFavorite, disabled, onClick, ...rest }) => {
  return (
    <Item
      title={favorite.name}
      mainContent={
        <ProductImage product={favorite} width="10rem" onUpdate={onUpdateFavorite} disabled={disabled} />
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
