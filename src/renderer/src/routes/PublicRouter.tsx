import React from 'react';
import { Navigate } from 'react-router-dom';

import { RotesList } from './interface';

export const PublicRoute: React.FC<RotesList> = (props: RotesList): JSX.Element | null => {
  const { component, ...routeProps } = props;

  const Component = component;

  return routeProps.public ? <Component {...routeProps} /> : <Navigate to='/' replace />;
};
