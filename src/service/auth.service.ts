import { AxiosResponse } from 'axios';
import { Service } from './service';
import { AccessTokenResponse } from '../type/access-token-response.type';
import { UserResponse } from '../type/user-response.type';

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

  async registerAdministrator(
    firstName: string,
    lastName: string,
    dni: string,
    email: string,
    username: string,
    password: string,
  ): Promise<AxiosResponse<AccessTokenResponse>> {
    return await this.httpClient.post('auth/register/administrator', {
      firstName,
      lastName,
      dni,
      email,
      username,
      password,
    });
  }

  async profile(): Promise<AxiosResponse<UserResponse>> {
    return await this.httpClient.get('auth/profile');
  }
}

export const AUTH_SERVICE = new AuthService();
