import { createAction, ActionCreatorWithPayload } from '@reduxjs/toolkit';

import { IErrorEx } from '../error/interface';
import { USER, IUser } from './interface';

const userRequest = createAction(USER.REQUEST);
const userLogout = createAction(USER.LOGOUT);

const userResponse: ActionCreatorWithPayload<IUser, USER.RESPONSE> = createAction(USER.RESPONSE);
const userError: ActionCreatorWithPayload<IErrorEx, USER.ERROR> = createAction(USER.ERROR);
const userOk: ActionCreatorWithPayload<boolean, USER.OK> = createAction(USER.OK);
const userRefresh: ActionCreatorWithPayload<IUser, USER.REFRESH> = createAction(USER.REFRESH);
export default {
  userResponse,
  userRequest,
  userLogout,
  userError,
  userOk,
  userRefresh,
};
