import { AxiosResponse } from 'axios';
import { ProductResponse } from '../type/product-response.type';
import { Service } from './service';
import { ProductModel } from '../model/product';

export class FavoriteService extends Service {
  async favorites(): Promise<AxiosResponse<Array<ProductModel>>> {
    return await this.httpClient.get('favorite').then((response: AxiosResponse<Array<ProductResponse>>) => {
      response.data = response.data.map((favorite) => new ProductModel(favorite));
      return response as AxiosResponse<Array<ProductModel>>;
    });
  }

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
