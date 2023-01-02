export enum ErrorAlert {
  CLEAR = 'ERROR/clear',
  WRITE = 'ERROR/write',
}

export interface IErrorEx {
  status?: number;
  defaultMessage?: string;
  message: string;
}
