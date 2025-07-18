import { AxiosResponse } from 'axios';
import { Service } from './service';
import { PurchaseResponse } from '../type/purchase.response';
import { UserResponse } from '../type/user.response.type';
import { FavoriteResponse } from '../type/favorite.response';

export class AdminUserService extends Service {
  async favorites(id: string): Promise<AxiosResponse<Array<FavoriteResponse>>> {
    return await this.httpClient.get(`admin/user/${id}/favorite`);
  }

  async purchases(id: string): Promise<AxiosResponse<Array<PurchaseResponse>>> {
    return await this.httpClient
      .get(`admin/user/${id}/purchase`)
      .then((response: AxiosResponse<Array<PurchaseResponse>>) => {
        response.data.sort((purchase1, purchase2) =>
          purchase1.created_at > purchase2.created_at ? -1 : 1,
        );
        return response;
      });
  }

  async user(id: string): Promise<AxiosResponse<UserResponse>> {
    return await this.httpClient.get(`admin/user/${id}`);
  }
}

export const ADMIN_USER_SERVICE = new AdminUserService();
