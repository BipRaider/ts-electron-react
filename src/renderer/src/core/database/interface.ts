import { DELETE_URL, GET_URL, PATCH_URL, POST_URL } from './enums';

export interface DB {
  success: boolean;
  data: any;
}
export interface IServerResponse<T> {
  status: boolean;
  payload: T;
}

export interface IAxiosServer {
  /** Set A */
  set: (token: string) => string;
  unset: () => void;
  getRefresh: <T>(url: GET_URL.Refresh) => Promise<IServerResponse<T> | never>;
  del: <T>(url: DELETE_URL, id: string) => Promise<IServerResponse<T> | never>;
  patch: <REQ, RES>(
    url: PATCH_URL,
    payload: REQ & { id: string },
  ) => Promise<IServerResponse<RES> | never>;
  post: <REQ, RES>(url: POST_URL, body: REQ) => Promise<IServerResponse<RES> | never>;
  get: <REQ, RES>(
    url: GET_URL,
    params: REQ & { id: string },
  ) => Promise<IServerResponse<RES> | never>;
}
