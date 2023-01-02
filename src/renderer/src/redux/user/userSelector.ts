import { IState } from '../../types';

export const isAdmin = (state: IState): boolean => state?.user?.admin;
export const isPrivate = (state: IState): boolean => state?.user?.private;
export const userName = (state: IState): string | undefined => state?.user?.name;
