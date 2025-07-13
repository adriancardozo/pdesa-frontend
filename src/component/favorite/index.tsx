import { FC } from 'react';
import { useNavigate } from 'react-router';
import Item from '../item';
import ItemChild from '../item-child';
import ProductImage from '../product-image';
import { ProductResponse } from '../../type/product-response.type';
import { ProductModel } from '../../model/product';

export type FavoriteProps = {
  favorite: ProductResponse;
  onUpdateFavorite: (product: ProductModel) => void;
};

const Favorite: FC<FavoriteProps> = ({ favorite, onUpdateFavorite: onUpdateProduct, ...rest }) => {
  const navigate = useNavigate();

  return (
    <Item
      title={favorite.name}
      mainContent={<ProductImage product={favorite} width="10rem" onUpdate={onUpdateProduct} />}
      onClick={() => navigate(`/product/${favorite.ml_id}`)}
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
