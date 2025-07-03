import { AxiosResponse } from 'axios';
import { Service } from './service';
import { AccessTokenResponse } from '../type/access-token-response.type';

export class AuthService extends Service {
  async login(username: string, password: string): Promise<AxiosResponse<AccessTokenResponse>> {
    return await this.httpClient.post('auth/login', { username, password });
  }

  async registerPurchaser(
    firstName: string,
    lastName: string,
    dni: string,
    email: string,
    username: string,
    password: string,
  ): Promise<AxiosResponse<AccessTokenResponse>> {
    return await this.httpClient.post('auth/register/purchaser', {
      firstName,
      lastName,
      dni,
      email,
      username,
      password,
    });
  }
}

export const AUTH_SERVICE = new AuthService();
