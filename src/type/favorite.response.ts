import { ProductResponse } from './product.response.type';
import { ReviewResponse } from './review.response';

export type FavoriteResponse = ProductResponse & {
  review: ReviewResponse;
};
