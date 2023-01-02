import { IDefault, IState } from '../../types';

export enum ABOUT {
  RESPONSE = 'RESPONSE/About',
  REQUEST = 'REQUEST/About',
  ERROR = 'ERROR/About',
}

export interface IAboutLink extends IDefault {
  link: string;
}

export interface ILanguages extends Omit<IDefault, 'description'> {
  level: 'native' | 'pre intermediate' | 'intermediate' | 'upper intermediate';
}

export interface IPlaceWork extends IDefault {
  start_duration: string;
  end_duration: string;
  position: string;
  working: boolean;
  link: string;
}

export interface IAboutPrivate {
  firstname: string;
  lastname: string;
  photo: string;
  phone: string;
  email: string;
  address: string;
}

export interface ICertificates extends IDefault {
  duration: string;
}

export interface IAbout extends IDefault {
  position: string;
  duration: string;
  private: IAboutPrivate;
  status: 'work' | 'no-work' | 'consider';
  place_work: IPlaceWork[];
  link: IAboutLink[];
  languages: ILanguages[];
  certificates: ICertificates[];
}

export type TGetListAbout = (state: IState) => IAbout;
export type TGetAboutBase = (state: IState) => IDefault;
export type TGetAboutDuration = (state: IState) => string;
export type TGetAboutPosition = (state: IState) => string;
export type TGetAboutPrivate = (state: IState) => IAboutPrivate;
export type TGetAboutStatus = (state: IState) => 'work' | 'no-work' | 'consider';
export type TGetAboutPlaceWork = (state: IState) => IPlaceWork[];
export type TGetAboutLink = (state: IState) => IAboutLink[];
export type TGetAboutLanguages = (state: IState) => ILanguages[];
export type TGetAboutCertificates = (state: IState) => ICertificates[];
