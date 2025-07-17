import { FC, MouseEventHandler } from 'react';
import { PurchaseResponse } from '../../type/purchase.response';
import Item from '../item';
import ItemChild from '../item-child';
import ProductImage from '../product-image';
import { FavoriteModel } from '../../model/favorite';
import ReviewForm from '../review-form';
import { ReviewType } from '../../enum/review-type.enum';

export type PurchaseProps = {
  purchase: PurchaseResponse;
  onUpdateProduct: (favorite: FavoriteModel) => void;
  onUpdateReview: (purchase: PurchaseResponse) => void;
  onDeleteReview: (purchase: PurchaseResponse) => void;
  onClick?: MouseEventHandler<HTMLDivElement>;
  disabled?: boolean;
};

const Purchase: FC<PurchaseProps> = ({
  purchase,
  onUpdateProduct,
  disabled,
  onClick,
  onUpdateReview,
  onDeleteReview,
  ...rest
}) => {
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
      secondaryContent={
        <ReviewForm
          review={purchase.review}
          type={ReviewType.purchase}
          onUpdate={onUpdateReview}
          onDelete={onDeleteReview}
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
