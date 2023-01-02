import React from 'react';
import { Col, Form, Input } from 'antd';

import styles from './FormItem.module.scss';
import { ItemParams } from './interface';

export const LinkItem: React.FC<ItemParams> = ({ label, name, span }): JSX.Element => {
  return (
    <Col span={span ? span : 24}>
      <Form.Item
        name={name}
        label={label}
        rules={[
          {
            type: 'url',
            min: 6,
            required: true,
            message: `Please enter ${name}`,
          },
        ]}
      >
        <Input placeholder={`Please enter ${name}`} className={styles.input} />
      </Form.Item>
    </Col>
  );
};
