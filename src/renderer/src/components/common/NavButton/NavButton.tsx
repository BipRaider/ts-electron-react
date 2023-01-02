import React from 'react';
import { Button, ButtonProps } from 'antd';

import styles from './NavButton.module.scss';

interface INavButton {
  onToggle: () => void;
  children?: React.ReactNode | React.ReactNode[];
}

const NavButton: React.FC<INavButton & ButtonProps> = ({
  onToggle,
  children,
}: INavButton): JSX.Element => {
  return (
    <Button type='link' onClick={onToggle} className={styles.button}>
      {children}
    </Button>
  );
};

export default NavButton;
