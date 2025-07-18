import { FavoriteResponse } from './favorite.response';
import { PurchaseResponse } from './purchase.response';

export type ReviewableResponse<T extends FavoriteResponse> = {
  favorite: T;
  purchase: PurchaseResponse;
};
