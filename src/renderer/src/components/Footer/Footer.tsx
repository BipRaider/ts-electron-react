import { Layout } from 'antd';
import React from 'react';

const { Footer: Foo } = Layout;

import styles from './Footer.module.scss';

const Footer: React.FC = (): JSX.Element => {
  return (
    <Foo style={{ textAlign: 'center' }} className={styles.footer}>
      Created ©2022 Some information is confidential! You can only get it if you register.
    </Foo>
  );
};

export default Footer;
