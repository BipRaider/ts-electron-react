import { Layout } from 'antd';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import { loaderSelector } from '../../redux/loader';
import { userSelector } from '../../redux/user';

import styles from './Header.module.scss';

// import ToggleLanguage from '../common/ToggleLanguage/ToggleLanguage';
import SinUp from './SingUp/SingUp';
import SinIn from './SingIn/SingIn';
import Nav from './Nav/Nav';
import Logo from './Logo/Logo';

const { Sider } = Layout;

const Header: React.FC = (): JSX.Element => {
  const loader: boolean = useSelector(loaderSelector.userLoader);
  const isPrivate: boolean = useSelector(userSelector.isPrivate);
  const [login, setLogin] = useState(loader);

  useEffect(() => {
    setLogin(loader);
  }, [loader]);

  return (
    <>
      <Sider className={styles.header} style={{ position: 'fixed' }} width='150px'>
        <Logo />
        <Nav>
          {login && <SinUp />}
          {!isPrivate && <SinIn />}
          {/* <ToggleLanguage /> */}
        </Nav>
      </Sider>
    </>
  );
};

export default Header;
