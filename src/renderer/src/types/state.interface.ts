import { CombinedState, EnhancedStore } from '@reduxjs/toolkit';
import { AnyAction, Middleware, Reducer } from 'redux';

import { ILoaders } from '../redux/loader';
import { IUser } from '../redux/user';
import { IAbout } from '../redux/about';

export interface IResume {
  [key: string]: any;
  about: IAbout;
}

export interface IState {
  [key: string]: any;
  resume: IResume;
  loader: ILoaders;
  user: IUser;
}

export type TStore = EnhancedStore<CombinedState<IState>, AnyAction, Middleware[]>;
export type TResumeReducer = Reducer<CombinedState<IResume>, AnyAction>;
