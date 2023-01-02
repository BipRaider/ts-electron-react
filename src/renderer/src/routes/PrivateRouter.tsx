import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { userSelector } from '../redux/user';
import { RotesList } from './interface';

export const PrivateRoute: React.FC<RotesList> = (props: RotesList): JSX.Element => {
  const isPrivate: boolean = useSelector(userSelector.isPrivate);

  const [isAuth, setPrivate] = useState(false);
  const { component, ...routeProps } = props;

  const Component = component;
  useEffect(() => {
    setPrivate(isPrivate);
  }, [isPrivate]);

  return routeProps.private === isAuth ? (
    <Component {...routeProps} />
  ) : (
    <Navigate to='/' replace />
  );
};
