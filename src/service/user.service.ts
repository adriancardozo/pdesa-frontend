import { AxiosResponse } from 'axios';
import { Service } from './service';
import { UserResponse } from '../type/user.response.type';

export class UserService extends Service {
  async users(): Promise<AxiosResponse<Array<UserResponse>>> {
    return await this.httpClient.get('user');
  }
}

export const USER_SERVICE = new UserService();
