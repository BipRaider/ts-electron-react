import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { userSelector } from '../redux/user';
import { RotesList } from './interface';

export const AdminRouter: React.FC<RotesList> = (props: RotesList): JSX.Element => {
  const isAmin: boolean = useSelector(userSelector.isAdmin);
  const [admin, setAdmin] = useState(false);
  const { component, ...routeProps } = props;
  const Component = component;

  useEffect(() => {
    setAdmin(isAmin);
  }, [isAmin]);

  return routeProps.admin === admin ? <Component {...routeProps} /> : <Navigate to='/' replace />;
};
