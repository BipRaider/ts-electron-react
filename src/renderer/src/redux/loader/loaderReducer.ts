import { createReducer } from '@reduxjs/toolkit';
import { AnyAction, Reducer } from 'redux';

import { userActions } from '../user';
import { ILoaders } from '.';

import { endLoader, startLoader } from './loaderAction';

const INITIAL_LOADER_STATE: ILoaders = {
  loader: true,
  user: true,
  about: true,
};

const loader: Reducer<ILoaders, AnyAction> = createReducer(INITIAL_LOADER_STATE, {
  [startLoader.type]: state => ({ ...state, loader: true }),
  [endLoader.type]: state => ({ ...state, loader: false }),
  [userActions.userOk.type]: (state, { payload }): ILoaders => ({ ...state, user: payload }),
  [userActions.userRequest.type]: state => ({ ...state, user: true }),
});

export default loader;
