import { FC } from 'react';
import { PurchaseResponse } from '../../type/purchase-response';
import { useNavigate } from 'react-router';
import Item from '../item';
import ItemChild from '../item-child';
import ProductImage from '../product-image';
import { ProductModel } from '../../model/product';

export type PurchaseProps = {
  purchase: PurchaseResponse;
  onUpdateProduct: (product: ProductModel) => void;
};

const Purchase: FC<PurchaseProps> = ({ purchase, onUpdateProduct, ...rest }) => {
  const navigate = useNavigate();

  return (
    <Item
      title={purchase.product.name}
      mainContent={<ProductImage product={purchase.product} width="10rem" onUpdate={onUpdateProduct} />}
      onClick={() => navigate(`/product/${purchase.product.ml_id}`)}
      {...rest}
    >
      <ItemChild title="Precio" content={`$ ${purchase.price}`} />
      <ItemChild title="Cantidad" content={`${purchase.amount}`} />
      <ItemChild title="Precio final" content={<b>$ {purchase.final_price}</b>} />
    </Item>
  );
};

export default Purchase;
