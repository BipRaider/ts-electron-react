import React from 'react';
import { Col, Form, Slider } from 'antd';

import styles from './FormItem.module.scss';

import { ItemParams } from './interface';

const marks = {
  '0': 0,
  '10': 10,
  '20': 20,
  '30': 30,
  '40': 40,
  '50': 50,
  '60': 60,
  '70': 70,
  '80': 80,
  '90': 90,
  '100': 100,
};

export const ExperienceLevel: React.FC<ItemParams> = ({ label, name, span }): JSX.Element => {
  return (
    <Col span={span ? span : 24}>
      <Form.Item
        name={name}
        label={label}
        rules={[
          {
            type: 'number',
            min: 1,
            max: 100,
            required: true,
            message: 'Please enter level',
          },
        ]}
      >
        <Slider min={1} max={100} value={0} step={1} marks={marks} className={styles.input} />
      </Form.Item>
    </Col>
  );
};
