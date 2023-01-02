export enum ErrorAlert {
  CLEAR = 'ERROR/clear',
  WRITE = 'ERROR/write',
}

export interface IErrorEx {
  status?: number;
  code?: string;
  message: string;
}
