//import fetchDB from '../../services/database';
import { AnyAction, Dispatch } from 'redux';

import { IErrorEx } from '../error/interface';
import aboutActions from './aboutActions';
import aboutJSON from '../../core/database/about.json';
import { IAbout } from './interface';
import { ErrorEx } from '../error';

const getAbout = (dispatch: Dispatch<AnyAction>): void => {
  //dispatch(aboutActions.aboutRequest());
  try {
    const data: IAbout | (Error & IErrorEx) = aboutJSON.data as IAbout;

    dispatch(aboutActions.aboutResponse(data));
  } catch (error) {
    if (error instanceof ErrorEx) {
      error.write(dispatch);
    } else if (error instanceof Error) {
      dispatch(aboutActions.aboutError(error));
    }
  }
};

export default {
  getAbout,
};
