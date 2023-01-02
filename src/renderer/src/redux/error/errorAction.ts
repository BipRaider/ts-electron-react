import { createAction, ActionCreatorWithPayload } from '@reduxjs/toolkit';
import { ErrorAlert, IErrorEx } from './interface';

export const cleanError: ActionCreatorWithPayload<{ error: string }, ErrorAlert.CLEAR> =
  createAction(ErrorAlert.CLEAR);
export const writingInError: ActionCreatorWithPayload<IErrorEx, ErrorAlert.WRITE> = createAction(
  ErrorAlert.WRITE,
);
