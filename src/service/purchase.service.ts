import { AxiosResponse } from 'axios';
import { Service } from './service';
import { PurchaseResponse } from '../type/purchase.response';

export class PurchaseService extends Service {
  async purchases(): Promise<AxiosResponse<Array<PurchaseResponse>>> {
    return await this.httpClient
      .get(`purchase`)
      .then((response: AxiosResponse<Array<PurchaseResponse>>) => {
        response.data.sort((purchase1, purchase2) =>
          purchase1.created_at > purchase2.created_at ? -1 : 1,
        );
        return response;
      });
  }

  async purchase(id_ml: string, amount: number): Promise<AxiosResponse<PurchaseResponse>> {
    return await this.httpClient.post(`purchase/${id_ml}`, { amount });
  }
}

export const PURCHASE_SERVICE = new PurchaseService();
