import React from 'react';
import { Col, Form, Input } from 'antd';

import styles from './FormItem.module.scss';
import { ItemParams } from './interface';

export const PasswordItem: React.FC<ItemParams> = ({ label, name, span }): JSX.Element => {
  return (
    <Col span={span ? span : 24}>
      <Form.Item
        label={label}
        name={name}
        hasFeedback
        rules={[
          { required: true, message: `Please enter  ${label}!` },
          { type: 'string', min: 6, max: 20 },
        ]}
      >
        <Input.Password autoComplete='cc-csc' className={styles.input} />
      </Form.Item>
    </Col>
  );
};

export const PasswordItemCheck: React.FC<ItemParams & { check: string }> = ({
  label,
  name,
  span,
  check,
}): JSX.Element => {
  return (
    <Col span={span ? span : 24}>
      <Form.Item
        label={label}
        name={name}
        dependencies={[check]}
        hasFeedback
        rules={[
          {
            required: true,
            message: `Please enter confirm ${label}!`,
          },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue(check) === value) {
                return Promise.resolve();
              }
              return Promise.reject(new Error('The two passwords that you entered do not match!'));
            },
          }),
        ]}
      >
        <Input.Password autoComplete='cc-csc' className={styles.input} />
      </Form.Item>
    </Col>
  );
};
