import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Typography, List, Tag } from 'antd';

import styles from './SocialNetwork.module.scss';

import { aboutSelector } from '../../../redux/about';
import { IAboutLink } from '../../../types';

import { FileOutlined } from '@ant-design/icons';

const { Paragraph, Link } = Typography;

const SocialNetwork: React.FC = (): JSX.Element => {
  const aboutLink: IAboutLink[] = useSelector(aboutSelector.getAboutLink);

  const [links, setLinks] = useState<IAboutLink[]>([]);

  useEffect((): void => {
    setLinks(aboutLink);
  }, [aboutLink]);

  return (
    <div className={styles.card}>
      <List
        className={styles.list}
        grid={{ gutter: 1, xs: 2, sm: 2, md: 3, lg: 3, xl: 3, xxl: 3 }}
        dataSource={links}
        renderItem={(value: IAboutLink): JSX.Element => {
          return (
            <>
              {
                <List.Item key={value.id} className={styles.item}>
                  <Tag className={styles.tag}>
                    <Paragraph
                      copyable={{
                        text: value.link,
                        icon: <FileOutlined className={styles.icon} />,
                      }}
                      className={styles.link}
                    >
                      <Link href={value.link} target='_blank'>
                        {value.name}
                      </Link>
                    </Paragraph>
                  </Tag>
                </List.Item>
              }
            </>
          );
        }}
      />
    </div>
  );
};

export default SocialNetwork;
