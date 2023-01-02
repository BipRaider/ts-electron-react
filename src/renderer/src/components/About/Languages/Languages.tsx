import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Skeleton, Tag, Typography, List } from 'antd';

import styles from './Languages.module.scss';

import { aboutSelector } from '../../../redux/about';
import { ILanguages } from '../../../types';

const { Text, Title } = Typography;

const Languages: React.FC = (): JSX.Element => {
  const aboutLanguages: ILanguages[] = useSelector(aboutSelector.getAboutLanguages);
  const [loading, setLoading] = useState<boolean>(true);
  const [languages, setLanguages] = useState<ILanguages[]>([]);

  useEffect((): void => {
    if (!aboutLanguages) return setLoading(true);
    setLanguages(aboutLanguages);
    setLoading(false);
  }, [aboutLanguages]);

  return (
    <div className={styles.card}>
      <Skeleton loading={loading} active>
        <Title level={4} className={styles.title}>
          Languages
        </Title>
        <List
          className={styles.list}
          grid={{ gutter: 16, xs: 1, sm: 1, md: 1, lg: 1, xl: 1, xxl: 1 }}
          dataSource={languages}
          renderItem={(value: ILanguages): JSX.Element => {
            return (
              <>
                {
                  <List.Item key={value.id} className={styles.item}>
                    <Tag className={styles.tag}>
                      <Text strong>{value.name}</Text>
                    </Tag>
                    <Text strong>{value.level}</Text>
                  </List.Item>
                }
              </>
            );
          }}
        />
      </Skeleton>
    </div>
  );
};

export default Languages;
