import { createAction, ActionCreatorWithPayload } from '@reduxjs/toolkit';

import { IErrorEx } from '../error/interface';
import { IAbout, ABOUT } from './interface';

const aboutRequest = createAction(ABOUT.REQUEST);
const aboutResponse: ActionCreatorWithPayload<IAbout, ABOUT.RESPONSE> = createAction(
  ABOUT.RESPONSE,
);
const aboutError: ActionCreatorWithPayload<IErrorEx, ABOUT.ERROR> = createAction(ABOUT.ERROR);

export default {
  aboutResponse,
  aboutRequest,
  aboutError,
};
