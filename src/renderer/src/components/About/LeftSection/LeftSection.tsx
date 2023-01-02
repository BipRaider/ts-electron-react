import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Card, Skeleton, Typography } from 'antd';

import styles from './LeftSection.module.scss';

import { IDefault } from '../../../types';
import { aboutSelector } from '../../../redux/about';

import AboutAvatar from '../AboutAvatar/AboutAvatar';

const { Title, Paragraph, Text } = Typography;

const LeftSection: React.FC = (): JSX.Element => {
  const aboutBase: IDefault = useSelector(aboutSelector.getAboutBase);
  const aboutPosition: string = useSelector(aboutSelector.getAboutPosition);
  const aboutDuration: string = useSelector(aboutSelector.getAboutDuration);

  const [name, setName] = useState<string>('');
  const [des, setDes] = useState<string>('');
  const [position, setPosition] = useState<string>('');
  const [duration, setDuration] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(true);

  useEffect((): void => {
    if (!aboutBase?.id) return setLoading(true);
    setName(aboutBase.name);
    setPosition(aboutPosition);
    setDes(aboutBase.description);
    setDuration(aboutDuration);

    setLoading(false);
  }, [aboutBase, aboutPosition, aboutDuration]);

  return (
    <Card className={styles.card} loading={loading} cover={<AboutAvatar />}>
      <Skeleton loading={loading} active>
        <Title level={2} className={styles.name}>
          {name}
        </Title>
        <Title level={3} className={styles.position} style={{ margin: 0 }}>
          {position}
        </Title>
        <Title level={5} className={styles.position} style={{ margin: 0 }}>
          {duration}
        </Title>
        <Paragraph className={styles.des}>
          <Text>{des}</Text>
        </Paragraph>
      </Skeleton>
    </Card>
  );
};
export default LeftSection;
