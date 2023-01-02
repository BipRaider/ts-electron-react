import { FC, LazyExoticComponent } from 'react';

export interface IRouteComponent {
  path: string;
  label: string;
  public: boolean;
  private: boolean;
  restricted: boolean;
  admin: boolean;
}

export interface RotesList extends IRouteComponent {
  exact: boolean;
  component: LazyExoticComponent<FC<IRouteComponent>>;
}
