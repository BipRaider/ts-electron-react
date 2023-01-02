import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Skeleton, Typography } from 'antd';

import styles from './Contacts.module.scss';

import { aboutSelector } from '../../../redux/about';
import { IAboutLink } from '../../../types';
import Address from '../Address/Address';

import SocialNetwork from '../SocialNetwork/SocialNetwork';

const { Title } = Typography;

const Contacts: React.FC = (): JSX.Element => {
  const aboutLink: IAboutLink[] = useSelector(aboutSelector.getAboutLink);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect((): void => {
    if (!aboutLink) return setLoading(true);
    setLoading(false);
  }, [aboutLink]);

  return (
    <div className={styles.card}>
      <Skeleton loading={loading} active>
        <Title level={4} className={styles.title}>
          Contacts
        </Title>
        <Address />
        <SocialNetwork />
      </Skeleton>
    </div>
  );
};

export default Contacts;
