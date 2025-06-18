import { AxiosInstance } from 'axios';
import { httpClient } from './http-client';

export abstract class Service {
  httpClient: AxiosInstance;

  constructor() {
    this.httpClient = httpClient;
  }
}
