import React from 'react';
import { Col, Form, DatePicker } from 'antd';

import styles from './FormItem.module.scss';
import { ItemParams } from './interface';

export interface IExperienceTime extends ItemParams {
  format: string;
}

export const ExperienceTime: React.FC<IExperienceTime> = ({
  label,
  name,
  format,
  span,
}): JSX.Element => {
  return (
    <Col span={span ? span : 12}>
      <Form.Item
        name={name}
        label={label}
        rules={[{ type: 'object' as const, required: true, message: 'Please select time!' }]}
      >
        <DatePicker format={format} className={styles.input} />
      </Form.Item>
    </Col>
  );
};
