import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import { useRefresh } from '../../../hook/useRefresh';

import styles from './Logo.module.scss';

const Logo: React.FC = (): JSX.Element => {
  useRefresh();
  return (
    <div className={styles.logo}>
      <Link to='/'>
        <h1 className={styles.title}>Logo</h1>
      </Link>
    </div>
  );
};

export default memo(Logo);
