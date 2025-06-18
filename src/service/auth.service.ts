import { AxiosResponse } from 'axios';
import { Service } from './service';

export class AuthService extends Service {
  async login(username: string, password: string): Promise<AxiosResponse<{ access_token: string }>> {
    return await this.httpClient.post('auth/login', { username, password });
  }
}

export const AUTH_SERVICE = new AuthService();
