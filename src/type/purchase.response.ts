import { ProductResponse } from './product.response.type';
import { ReviewResponse } from './review.response';

export type PurchaseResponse = {
  id: string;
  price: number;
  final_price: number;
  amount: number;
  created_at: string;
  product: ProductResponse;
  review: ReviewResponse;
};
