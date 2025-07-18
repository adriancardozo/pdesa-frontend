import { AxiosResponse } from 'axios';
import { Service } from './service';
import { FavoriteModel } from '../model/favorite';
import { ReviewType } from '../enum/review-type.enum';
import { ReviewableResponse } from '../type/reviewable.response.type';
import { FavoriteResponse } from '../type/favorite.response';

export class ReviewService extends Service {
  async update(
    type: ReviewType,
    id: string,
    rate?: number,
    comment?: string,
  ): Promise<AxiosResponse<ReviewableResponse<FavoriteModel>>> {
    return await this.httpClient
      .put(`review/${type}/${id}`, { rate, comment })
      .then((response: AxiosResponse<ReviewableResponse<FavoriteResponse>>) => {
        if (response.data.favorite) response.data.favorite = new FavoriteModel(response.data.favorite);
        return response as AxiosResponse<ReviewableResponse<FavoriteModel>>;
      });
  }

  async delete(type: ReviewType, id: string): Promise<AxiosResponse<ReviewableResponse<FavoriteModel>>> {
    return await this.httpClient
      .delete(`review/${type}/${id}`)
      .then((response: AxiosResponse<ReviewableResponse<FavoriteResponse>>) => {
        if (response.data.favorite) response.data.favorite = new FavoriteModel(response.data.favorite);
        return response as AxiosResponse<ReviewableResponse<FavoriteModel>>;
      });
  }
}

export const REVIEW_SERVICE = new ReviewService();
