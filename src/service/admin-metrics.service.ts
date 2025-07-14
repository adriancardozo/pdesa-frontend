import { AxiosResponse } from 'axios';
import { ProductResponse } from '../type/product-response.type';
import { Service } from './service';
import { UserResponse } from '../type/user-response.type';
import { MetricItem } from '../type/metric-item.type';

export class AdminMetricsService extends Service {
  async top5Purchasers(): Promise<AxiosResponse<Array<MetricItem<UserResponse>>>> {
    return await this.httpClient.get('admin/metrics/purchaser/top_five');
  }
  async top5Favorited(): Promise<AxiosResponse<Array<MetricItem<ProductResponse>>>> {
    return await this.httpClient.get('admin/metrics/favorite/top_five');
  }
  async top5Purchased(): Promise<AxiosResponse<Array<MetricItem<ProductResponse>>>> {
    return await this.httpClient.get('admin/metrics/purchase/top_five');
  }
}

export const ADMIN_METRICS_SERVICE = new AdminMetricsService();
