import { AxiosResponse } from 'axios';
import { ProductResponse } from '../type/product-response.type';
import { Service } from './service';
import { ProductModel } from '../model/product';

export class FavoriteService extends Service {
  async addFavorite(id_ml: string): Promise<AxiosResponse<ProductModel>> {
    return await this.httpClient
      .post(`favorite/${id_ml}`)
      .then((response: AxiosResponse<ProductResponse>) => {
        response.data = new ProductModel(response.data);
        return response as AxiosResponse<ProductModel>;
      });
  }

  async deleteFavorite(id_ml: string): Promise<AxiosResponse<ProductModel>> {
    return await this.httpClient
      .delete(`favorite/${id_ml}`)
      .then((response: AxiosResponse<ProductResponse>) => {
        response.data = new ProductModel(response.data);
        return response as AxiosResponse<ProductModel>;
      });
  }
}

export const FAVORITE_SERVICE = new FavoriteService();
