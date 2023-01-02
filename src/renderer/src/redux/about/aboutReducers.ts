import { AnyAction, Reducer } from 'redux';
import { createReducer } from '@reduxjs/toolkit';

import { aboutActions } from './';
import { IAbout, IAboutPrivate } from './interface';
import { HelperReducers } from '../helperReducers';

const INITIAL_PRIVATE_STATE: IAboutPrivate = {
  firstname: '',
  lastname: '',
  photo: '',
  phone: '',
  email: '',
  address: '',
};

const INITIAL_ABOUT_STATE: IAbout = {
  id: '',
  name: '',
  duration: '',
  position: '',
  description: '',
  certificates: [],
  private: INITIAL_PRIVATE_STATE,
  status: 'work',
  languages: [],
  place_work: [],
  link: [],
};

const AboutPayload = new HelperReducers<IAbout>();

const about: Reducer<IAbout, AnyAction> = createReducer({} as IAbout, {
  [aboutActions.aboutRequest.type]: (): IAbout => INITIAL_ABOUT_STATE,
  [aboutActions.aboutResponse.type]: AboutPayload.newItem,
});

export default about;
