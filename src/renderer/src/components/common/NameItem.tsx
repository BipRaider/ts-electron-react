import React from 'react';
import { Col, Form, Input } from 'antd';
import { Rule } from 'antd/lib/form';

import { ItemParams } from './interface';

import styles from './FormItem.module.scss';

export const NameItem: React.FC<ItemParams & { rules?: Rule[] }> = ({
  label,
  name,
  span,
  rules = [],
}): JSX.Element => {
  return (
    <Col span={span ? span : 12}>
      <Form.Item
        name={name}
        label={label}
        rules={[
          {
            pattern: /^[a-zA-Z0-9_]+$/,
            type: 'string',
            min: 2,
            required: true,
            message: `Please enter ${label}`,
          },
          ...rules,
        ]}
      >
        <Input placeholder={`Please enter ${label}`} className={styles.input} />
      </Form.Item>
    </Col>
  );
};
