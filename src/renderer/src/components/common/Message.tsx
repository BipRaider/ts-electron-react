import React from 'react';
import { Col, Form, Input, Row } from 'antd';
import { Rule } from 'antd/lib/form';
import { ItemParams } from './interface';

import styles from './FormItem.module.scss';

export const Message: React.FC<ItemParams & { rules?: Rule[] }> = ({
  label,
  name,
  span,
  rules = [],
}): JSX.Element => {
  return (
    <Row gutter={16}>
      <Col span={span ? span : 24}>
        <Form.Item
          name={name}
          label={label}
          rules={[
            {
              required: true,
              type: 'string',
              min: 6,
              max: 300,
              message: 'Please enter your message',
            },
            ...rules,
          ]}
        >
          <Input.TextArea
            rows={4}
            placeholder={`Please enter your ${label}`}
            className={styles.input}
          />
        </Form.Item>
      </Col>
    </Row>
  );
};
