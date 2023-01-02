import React from 'react';
import { Col, Form, Input } from 'antd';

import styles from './FormItem.module.scss';
import { ItemParams } from './interface';

export const EmailItem: React.FC<ItemParams> = ({ label, name, span }): JSX.Element => {
  return (
    <Col span={span ? span : 24}>
      <Form.Item
        name={name}
        label={label}
        rules={[
          { type: 'string', min: 6, required: true, message: `Please enter ${label}` },
          {
            type: 'email',
            message: 'The input is not valid E-mail!',
          },
        ]}
      >
        <Input
          autoComplete='email'
          placeholder={`Please enter ${label}`}
          className={styles.input}
        />
      </Form.Item>
    </Col>
  );
};
