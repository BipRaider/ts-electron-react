import { AnyAction, Dispatch } from 'redux';
import { notification } from 'antd';

import { AxiosServer } from '../../core/database';
import { GET_URL, POST_URL } from '../../types';
import { ErrorEx } from '../error';

import { IUserRegister, ResponseLogin, IUserLogin } from './interface';
import userActions from './userActions';

const register = async (dispatch: Dispatch<AnyAction>, body: IUserRegister): Promise<void> => {
  dispatch(userActions.userRequest());
  try {
    await AxiosServer.post<unknown, IUserRegister>(POST_URL.Register, body);

    dispatch(userActions.userOk(false));
    notification.success({ message: `You signed up`, duration: 1 });
  } catch (error) {
    if (error instanceof ErrorEx) {
      error.write(dispatch);
    }
    if (error instanceof Error) {
      dispatch(userActions.userError(error));
    }
    dispatch(userActions.userOk(true));
  }
};

const login = async (dispatch: Dispatch<AnyAction>, body: IUserLogin): Promise<void> => {
  dispatch(userActions.userRequest());
  try {
    const { payload } = await AxiosServer.post<IUserLogin, ResponseLogin>(POST_URL.Login, body);

    AxiosServer.set(payload.accessToken);
    payload.accessToken = '';

    dispatch(userActions.userResponse(payload));
    dispatch(userActions.userOk(false));
    notification.success({ message: `Welcome! ${payload.name}`, duration: 1 });
  } catch (error) {
    if (error instanceof ErrorEx) {
      error.write(dispatch);
    }
    if (error instanceof Error) {
      dispatch(userActions.userError(error));
    }
    dispatch(userActions.userOk(true));
  }
};

const logout = async (dispatch: Dispatch<AnyAction>): Promise<void> => {
  dispatch(userActions.userRequest());
  try {
    await AxiosServer.post<unknown, unknown>(POST_URL.Logout, null);

    AxiosServer.unset();

    dispatch(userActions.userLogout());
    dispatch(userActions.userOk(true));
  } catch (error) {
    if (error instanceof ErrorEx) {
      error.write(dispatch);
    }
    if (error instanceof Error) {
      dispatch(userActions.userError(error));
    }
    dispatch(userActions.userOk(true));
  }
};

const refresh = async (dispatch: Dispatch<AnyAction>): Promise<void> => {
  dispatch(userActions.userRequest());

  try {
    const { payload } = await AxiosServer.getRefresh<ResponseLogin>(GET_URL.Refresh);

    AxiosServer.set(payload.accessToken);
    payload.accessToken = '';

    dispatch(userActions.userRefresh(payload));
    dispatch(userActions.userOk(false));
    notification.success({ message: `Welcome! ${payload.name}`, duration: 1 });
  } catch {
    dispatch(userActions.userOk(true));
    return;
  }
};

export default {
  refresh,
  register,
  login,
  logout,
};
