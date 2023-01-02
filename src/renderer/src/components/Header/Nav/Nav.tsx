import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

import styles from './Nav.module.scss';
import { RotesList, routes } from '../../../routes';
import { userSelector } from '../../../redux/user';
import { useSelector } from 'react-redux';

interface Props {
  children?: React.ReactNode | React.ReactNode[];
}

interface IIsActive {
  isActive: boolean;
}
type TIsActive = (data: IIsActive) => string;

const Nav: React.FC<Props> = ({ children }: Props): JSX.Element => {
  const isPrivate: boolean = useSelector(userSelector.isPrivate);
  const isAdmin: boolean = useSelector(userSelector.isAdmin);

  const [isRouters, setRouters] = useState([] as RotesList[]);
  const isActive: TIsActive = ({ isActive }: IIsActive): string => {
    return isActive ? styles.activated : '';
  };

  useEffect(() => {
    setRouters(() =>
      routes.filter(route => {
        if (route.admin === isAdmin && !route.public && !route.private) return true;
        if (route.private === isPrivate && !route.public && !route.admin) return true;
        if (route.public && !route.admin && !route.admin) return true;
        return false;
      }),
    );
  }, [isPrivate, isAdmin]);

  return (
    <nav className={styles.nav}>
      <ul className={styles.list}>
        {isRouters.map(route => {
          return (
            <li key={route.path} className={styles.item}>
              <NavLink to={route.path} key={route.path} className={isActive}>
                {route.label}
              </NavLink>
            </li>
          );
        })}
      </ul>
      <div className={styles.list}>{children}</div>
    </nav>
  );
};

export default Nav;
