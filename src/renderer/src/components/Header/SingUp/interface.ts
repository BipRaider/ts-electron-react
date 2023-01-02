import { ValidateErrorEntity } from 'rc-field-form/lib/interface';

export interface IFailed {
  email: string;
  message: string;
  name: string;
  password: string;
}

export interface IDrawerSinUp {
  onVisible: boolean;
  onClose: () => void;
}

export type TDrawerSinUp = (data: IDrawerSinUp) => JSX.Element;
export type TOnFinish = (values: IFailed) => void;
export type TOnFinishFailed = (errorInfo: ValidateErrorEntity<IFailed>) => void;
