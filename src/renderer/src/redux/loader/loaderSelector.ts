import { IState } from '../../types/state.interface';

export const userLoader = (state: IState): boolean => state.loader.user;
export const skillLoader = (state: IState): boolean => state.loader.skill;
export const loader = (state: IState): boolean => state.loader.loader;
export const projectLoader = (state: IState): boolean => state.loader.project;
export const aboutLoader = (state: IState): boolean => state.loader.about;
export const librariesLoader = (state: IState): boolean => state.loader.libraries;
