import { AxiosResponse } from 'axios';
import { ProductResponse } from '../type/product-response.type';
import { Service } from './service';
import { PurchaseResponse } from '../type/purchase-response';
import { UserResponse } from '../type/user-response.type';

export class AdminUserService extends Service {
  async favorites(id: string): Promise<AxiosResponse<Array<ProductResponse>>> {
    return await this.httpClient.get(`admin/user/${id}/favorite`);
  }

  async purchases(id: string): Promise<AxiosResponse<Array<PurchaseResponse>>> {
    return await this.httpClient.get(`admin/user/${id}/purchase`);
  }

  async user(id: string): Promise<AxiosResponse<UserResponse>> {
    return await this.httpClient.get(`admin/user/${id}`);
  }
}

export const ADMIN_USER_SERVICE = new AdminUserService();
