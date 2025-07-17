import { FavoriteResponse } from '../type/favorite.response';
import { ReviewResponse } from '../type/review.response';
import { ProductModel } from './product';

export class FavoriteModel extends ProductModel implements FavoriteResponse {
  review: ReviewResponse;

  constructor(favorite: FavoriteResponse) {
    super(favorite);
    this.review = favorite.review;
  }
}
