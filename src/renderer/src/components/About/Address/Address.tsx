import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Typography, Space } from 'antd';
import { EnvironmentOutlined, MailOutlined, PhoneOutlined } from '@ant-design/icons';

import styles from './Address.module.scss';

import { aboutSelector } from '@redux/about';
import { IAboutPrivate } from '@renderer/types';
import { userSelector } from '@redux/user';

const { Paragraph, Text } = Typography;

const Address: React.FC = (): JSX.Element => {
  const isPrivate: boolean = useSelector(userSelector.isPrivate);
  const aboutPriv: IAboutPrivate = useSelector(aboutSelector.getAboutPrivate);
  const [contacts, setContacts] = useState<IAboutPrivate>({} as IAboutPrivate);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect((): void => {
    setContacts(aboutPriv);
    setLoading(isPrivate);
  }, [aboutPriv, isPrivate]);

  return (
    <div className={styles.card}>
      {!loading && <p>Some information is confidential! You can only get it if you register.</p>}
      {loading && (
        <Space direction='vertical' className={styles.list}>
          <Paragraph className={styles.item}>
            <Text className={styles.text}>{contacts.address}</Text>
            <EnvironmentOutlined className={styles.icon} />
          </Paragraph>
          <Paragraph
            className={styles.item}
            copyable={{ text: contacts.email, icon: <PhoneOutlined className={styles.icon} /> }}
          >
            <Text className={styles.text}>{contacts.phone}</Text>
          </Paragraph>
          <Paragraph
            className={styles.item}
            copyable={{ text: contacts.email, icon: <MailOutlined className={styles.icon} /> }}
          >
            <Text className={styles.text}>{contacts.email}</Text>
          </Paragraph>
        </Space>
      )}
    </div>
  );
};

export default Address;
