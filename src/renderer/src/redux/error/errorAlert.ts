import { AnyAction, Dispatch } from 'redux';
import { message } from 'antd';
import { AxiosError } from 'axios';

import { cleanError, writingInError } from './errorAction';
import { endLoader } from '../loader/loaderAction';
import { IErrorEx } from '../../types';

export const errorAlert =
  () =>
  (next: any) =>
  (action: any): any => {
    const item = action.payload;
    if (item instanceof Error) {
      const err = new ErrorEx(item);
      err.alert('Error');
    }

    return next(action);
  };

export class ErrorEx extends Error implements IErrorEx {
  public status: number = 500;
  public code: string = 'Error';
  public data: any[] = [];
  public statusText: string = 'Error 500';

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

  write = (dispatch: Dispatch<AnyAction>): void => {
    dispatch(writingInError(this));
  };

  clear = (dispatch: Dispatch<AnyAction>): void => {
    setTimeout((): void => {
      dispatch(endLoader());
      dispatch(cleanError({ error: '' }));
    }, 2000);
  };
}
