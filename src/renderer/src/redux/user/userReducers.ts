import { AnyAction, Reducer } from 'redux';
import { createReducer } from '@reduxjs/toolkit';

import userActions from './userActions';
import { IUser } from './interface';

import { HelperReducers } from '../helperReducers';

const UserPayload = new HelperReducers<IUser>();

const INITIAL_USER_STATE: IUser = {
  private: false,
  admin: false,
};

const projects: Reducer<IUser, AnyAction> = createReducer(INITIAL_USER_STATE, {
  [userActions.userResponse.type]: UserPayload.newItem,
  [userActions.userRefresh.type]: UserPayload.newItem,
  [userActions.userLogout.type]: (): IUser => INITIAL_USER_STATE,
});

export default projects;
