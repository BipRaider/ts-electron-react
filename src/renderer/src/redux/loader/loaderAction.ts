import { createAction } from '@reduxjs/toolkit';

export const startLoader = createAction('loader/START');
export const endLoader = createAction('loader/END');
