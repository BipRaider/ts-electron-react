import { ValidateErrorEntity } from 'rc-field-form/lib/interface';

export interface IFailed {
  email: string;
  password: string;
}

export interface IDrawerSinIn {
  onVisible: boolean;
  onClose: () => void;
}

export type TDrawerSinIn = (data: IDrawerSinIn) => JSX.Element;
export type TOnFinish = (values: IFailed) => void;
export type TOnFinishFailed = (errorInfo: ValidateErrorEntity<IFailed>) => void;
