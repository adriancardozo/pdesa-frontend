import { FC, MouseEventHandler } from 'react';
import { PurchaseResponse } from '../../type/purchase-response';
import Item from '../item';
import ItemChild from '../item-child';
import ProductImage from '../product-image';
import { ProductModel } from '../../model/product';

export type PurchaseProps = {
  purchase: PurchaseResponse;
  onUpdateProduct: (product: ProductModel) => void;
  onClick?: MouseEventHandler<HTMLDivElement>;
  disabled?: boolean;
};

const Purchase: FC<PurchaseProps> = ({ purchase, onUpdateProduct, disabled, onClick, ...rest }) => {
  return (
    <Item
      title={purchase.product.name}
      mainContent={
        <ProductImage
          product={purchase.product}
          width="10rem"
          onUpdate={onUpdateProduct}
          disabled={disabled}
        />
      }
      onClick={onClick}
      {...rest}
    >
      <ItemChild title="Precio" content={`$ ${purchase.price}`} />
      <ItemChild title="Cantidad" content={`${purchase.amount}`} />
      <ItemChild title="Precio final" content={<b>$ {purchase.final_price}</b>} />
    </Item>
  );
};

export default Purchase;
