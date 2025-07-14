import { AxiosResponse } from 'axios';
import { Service } from './service';
import { ProductResponse } from '../type/product-response.type';
import { ProductModel } from '../model/product';

export class ProductService extends Service {
  async search(q: string): Promise<AxiosResponse<Array<ProductModel>>> {
    return await this.httpClient
      .get(`product/search?q=${q}`)
      .then((response: AxiosResponse<Array<ProductResponse>>) => {
        response.data = response.data.map((product) => new ProductModel(product));
        return response as AxiosResponse<Array<ProductModel>>;
      });
  }

  async product(ml_id: string): Promise<AxiosResponse<ProductModel>> {
    return await this.httpClient
      .get(`product/${ml_id}`)
      .then((response: AxiosResponse<ProductResponse>) => {
        response.data = new ProductModel(response.data);
        return response as AxiosResponse<ProductModel>;
      });
  }
}

export const PRODUCT_SERVICE = new ProductService();
