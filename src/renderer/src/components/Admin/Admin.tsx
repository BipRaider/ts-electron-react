import React from 'react';
import { Tabs } from 'antd';

import styles from './Admin.module.scss';

const Admin: React.FC = (): JSX.Element => {
  return (
    <section className={styles.admin}>
      <Tabs
        defaultActiveKey='1'
        className={styles.wrap}
        items={[
          {
            label: `first page`,
            key: '1',
            children: <div />,
          },
          {
            label: `second page`,
            key: '2',
            children: <div />,
          },
        ]}
      ></Tabs>
    </section>
  );
};

export default Admin;
