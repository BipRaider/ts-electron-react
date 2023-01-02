import { message } from 'antd';
import { AxiosError } from 'axios';

import { IErrorEx } from './interface';

export class ErrorEx extends Error implements IErrorEx {
  public status = 500;
  public code = 'Error';
  public data: any[] = [];
  public statusText = 'Error 500';

  constructor(payload?: IErrorEx) {
    super(payload?.message);

    this.code = payload?.code ? payload.code : this.code;
    this.status = payload?.status ? payload.status : this.status;
  }

  addAxiosError = ({ code, response, message }: AxiosError): void => {
    const { data, status, statusText }: any = response;
    const { payload } = data;

    if (message) this.message = message;
    if ('message' in payload) this.message = payload.message;
    if (code) this.code = code;
    if (data) this.data = data;
    if (status) this.status = status;
    if (statusText) this.statusText = statusText;
  };

  alert = (name?: string): void => {
    message.error(`[${name}: ${this.status}] ${this.message}`, 1);
  };

  payload = () => {
    return {
      status: this.status,
      message: this.message,
      code: this.code,
      data: this.data,
      statusText: this.statusText,
    };
  };
}
