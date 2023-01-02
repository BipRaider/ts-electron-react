import React from 'react';
import * as Ant from 'antd';
import { ButtonProps } from 'antd';
import styles from './Button.module.scss';

export interface IButton extends ButtonProps {
  title?: string;
  children?: React.ReactNode | React.ReactNode[];
  handlerEvent: () => void;
}

export const Button: React.FC<IButton> = ({
  handlerEvent,
  title,
  children,
  ...value
}): JSX.Element => {
  const handlerClick = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    e.stopPropagation();
    e.preventDefault();
    handlerEvent();
  };

  return (
    <Ant.Button {...value} title={title} onClick={e => handlerClick(e)} className={styles.button}>
      {children}
    </Ant.Button>
  );
};
