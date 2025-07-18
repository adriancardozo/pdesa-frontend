import { AxiosResponse } from 'axios';
import { Service } from './service';
import { FavoriteResponse } from '../type/favorite.response';
import { FavoriteModel } from '../model/favorite';

export class FavoriteService extends Service {
  async favorites(): Promise<AxiosResponse<Array<FavoriteModel>>> {
    return await this.httpClient
      .get('favorite')
      .then((response: AxiosResponse<Array<FavoriteResponse>>) => {
        response.data = response.data.map((favorite) => new FavoriteModel(favorite));
        return response as AxiosResponse<Array<FavoriteModel>>;
      });
  }

  async addFavorite(id_ml: string): Promise<AxiosResponse<FavoriteModel>> {
    return await this.httpClient
      .post(`favorite/${id_ml}`)
      .then((response: AxiosResponse<FavoriteResponse>) => {
        response.data = new FavoriteModel(response.data);
        return response as AxiosResponse<FavoriteModel>;
      });
  }

  async deleteFavorite(id_ml: string): Promise<AxiosResponse<FavoriteModel>> {
    return await this.httpClient
      .delete(`favorite/${id_ml}`)
      .then((response: AxiosResponse<FavoriteResponse>) => {
        response.data = new FavoriteModel(response.data);
        return response as AxiosResponse<FavoriteModel>;
      });
  }
}

export const FAVORITE_SERVICE = new FavoriteService();
