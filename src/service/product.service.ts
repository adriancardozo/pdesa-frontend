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
}

export const PRODUCT_SERVICE = new ProductService();
