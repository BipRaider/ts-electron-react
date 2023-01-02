import { createReducer } from '@reduxjs/toolkit';

import { cleanError, writingInError } from './errorAction';

const isError = createReducer(
  {},
  {
    [cleanError.type]: () => ({}),
    [writingInError.type]: (_: unknown, { payload }): any => payload,
  },
);

export default isError;
