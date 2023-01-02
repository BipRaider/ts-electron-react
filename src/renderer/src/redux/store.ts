import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';

import { ReactConfigService, ENV } from '../core/config';

import { loaderReducer } from './loader';
import { errorReducer, errorAlert } from './error';

import { aboutReducers } from './about';
import { userReducers } from './user';

import { TStore, TResumeReducer } from '../types';

const defaultMiddleware = getDefaultMiddleware({
  serializableCheck: false,
});

const resume: TResumeReducer = combineReducers({
  about: aboutReducers,
});

export const store: TStore = configureStore({
  reducer: {
    isError: errorReducer,
    loader: loaderReducer,
    user: userReducers,
    resume,
  },
  middleware: [...defaultMiddleware, errorAlert],
  devTools: ReactConfigService.get(ENV.NODE_ENV) !== 'production',
});
