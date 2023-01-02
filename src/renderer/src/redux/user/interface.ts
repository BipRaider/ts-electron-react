export enum USER {
  RESPONSE = 'RESPONSE/User',
  REQUEST = 'REQUEST/User',
  ERROR = 'ERROR/User',
  LOGOUT = 'LOGOUT/User',
  OK = 'OK/User',
  REFRESH = 'REFRESH/User',
}

export interface IUser {
  name?: string;
  private: false;
  admin: false;
}

export interface ResponseLogin extends IUser {
  accessToken: string;
}

export interface ResponseRegister {
  email: string;
  name?: string;
}

export interface IUserRegister {
  password: string;
  name: string;
  email: string;
  message: string;
}

export interface IUserLogin {
  password: string;
  email: string;
}
