import React, { useEffect, useState } from 'react';
import { Avatar } from 'antd';

import { useSelector } from 'react-redux';

import { aboutSelector } from '@redux/about';
import { IAboutPrivate } from '@renderer/types';

import styles from './AboutAvatar.module.scss';

const AboutAvatar: React.FC = (): JSX.Element => {
  const aboutPrivate: IAboutPrivate = useSelector(aboutSelector.getAboutPrivate);
  const [avatar, setAvatar] = useState<string>('');
  useEffect((): void => {
    if (!aboutPrivate?.photo) return;

    setAvatar(aboutPrivate.photo);
  }, [aboutPrivate]);

  return (
    <Avatar
      className={styles.image}
      size={{ xs: 150, sm: 150, md: 150, lg: 200, xl: 250, xxl: 300 }}
      src={avatar}
    />
  );
};

export default AboutAvatar;
