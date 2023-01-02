import React from 'react';
import { Col, Form, Input, Row } from 'antd';

import styles from './FormItem.module.scss';

export interface IDescription {
  label: string;
}

export const Description: React.FC<IDescription> = ({ label }): JSX.Element => {
  return (
    <Row gutter={16}>
      <Col span={24}>
        <Form.Item
          name='description'
          label={label}
          rules={[
            {
              type: 'string',
              min: 6,
              max: 500,
              required: true,
              message: 'Please enter your description min symbol 6',
            },
          ]}
        >
          <Input.TextArea
            rows={4}
            placeholder='Please enter your description'
            className={styles.input}
          />
        </Form.Item>
      </Col>
    </Row>
  );
};
