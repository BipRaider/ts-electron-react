import axios, { AxiosError } from 'axios';

import { ReactConfigService, ENV } from '../config';
import { ErrorEx } from '../error';
import { GET_URL, POST_URL, DELETE_URL, PATCH_URL } from './enums';
import { IServerResponse, IAxiosServer } from './interface';

class AxiosServer implements IAxiosServer {
  private baseURL: string = '';
  private origin: string = '';
  axios: typeof axios;

  constructor() {
    this.axios = axios;
    this.init();
  }

  private init = () => {
    const origin = ReactConfigService.get(ENV.VITE_ORIGIN);
    const isDev = ReactConfigService.get(ENV.NODE_ENV) === 'development';
    if (isDev) this.baseURL = 'http://localhost:8080';
    else this.baseURL = ReactConfigService.get(ENV.VITE_API_URL);
    this.origin = origin ? origin : '';
    this.defaults();
  };

  private defaults = () => {
    this.axios.defaults.headers.get['Accept'] = 'application/json';
    this.axios.defaults.headers.common['Content-Type'] = 'application/json';
    this.axios.defaults.headers.common['Access-Control-Allow-Origin'] = this.origin;
    this.axios.defaults.baseURL = this.baseURL;
  };

  public readSession = <T>(key: string, defaultValue: T): T => {
    const stored = localStorage.getItem(key);
    if (!stored) return defaultValue;

    return JSON.parse(stored);
  };

  public writeSession = <T>(item: string, payload: T): void => {
    localStorage.setItem(item, JSON.stringify(payload));
  };

  public set(token = ''): string {
    const accessToken = this.readSession<string>('accessToken', token);
    this.axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;
    if (token) this.writeSession<string>('accessToken', token);
    return accessToken;
  }

  public unset(): void {
    this.axios.defaults.headers.common['Authorization'] = '';
  }

  public get = async <REQ, RES>(
    url: GET_URL,
    params: REQ & { id: string },
  ): Promise<IServerResponse<RES> | never> => {
    try {
      this.set();
      const { id } = params;
      if (id) {
        const { data } = await this.axios.get(`${url}/${id}`);
        return data;
      }
      const { data } = await this.axios.get(url, { params });
      return data;
    } catch (error) {
      if (error instanceof AxiosError) {
        const err = new ErrorEx();
        err.addAxiosError(error);
        throw err;
      }
      throw error;
    }
  };

  public post = async <REQ, RES>(
    url: POST_URL,
    body: REQ,
  ): Promise<IServerResponse<RES> | never> => {
    try {
      this.set();
      const { data } = await this.axios.post(url, body);
      return data;
    } catch (error) {
      if (error instanceof AxiosError) {
        const err = new ErrorEx();
        err.addAxiosError(error);
        throw err;
      }
      throw error;
    }
  };

  public patch = async <REQ, RES>(
    url: PATCH_URL,
    payload: REQ & { id: string },
  ): Promise<IServerResponse<RES> | never> => {
    try {
      this.set();
      const { data } = await this.axios.patch(`${url}`, payload);
      return data;
    } catch (error) {
      if (error instanceof AxiosError) {
        const err = new ErrorEx();
        err.addAxiosError(error);
        throw err;
      }
      throw error;
    }
  };

  public del = async <T>(url: DELETE_URL, id: string): Promise<IServerResponse<T> | never> => {
    try {
      this.set();
      const { data } = await this.axios.delete(url, { params: { id } });

      return data;
    } catch (error) {
      if (error instanceof AxiosError) {
        const err = new ErrorEx();
        err.addAxiosError(error);
        throw err;
      }

      throw error;
    }
  };

  public getRefresh = async <T>(url: GET_URL.Refresh): Promise<IServerResponse<T> | never> => {
    try {
      const token = this.set();
      if (!token) throw false;
      const { data } = await this.axios.get(url);
      return data;
    } catch {
      throw false;
    }
  };
}

export default new AxiosServer();
