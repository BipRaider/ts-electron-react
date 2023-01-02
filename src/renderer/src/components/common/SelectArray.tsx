import React, { useState, useEffect } from 'react';
import { Col, Form, Select } from 'antd';

import { ItemParams } from './interface';

import styles from './FormItem.module.scss';

export interface SelectOption {
  label: string;
  value: string;
}

export interface ISelectArray extends ItemParams {
  list: SelectOption[];
}

export const SelectArray: React.FC<ISelectArray> = ({ list, label, name, span }): JSX.Element => {
  const [option, setOption] = useState<SelectOption[]>([]);

  useEffect((): void => {
    if (list.length) setOption(list);
  }, [list]);

  return (
    <Col span={span ? span : 12}>
      <Form.Item name={name} label={label}>
        <Select
          className={styles.input}
          mode='multiple'
          allowClear
          showArrow
          style={{
            width: '100%',
          }}
          placeholder='Select item'
          options={option}
          filterOption={(inputValue: string, option?: SelectOption): boolean => {
            if (option) return option.label.includes(inputValue);
            return false;
          }}
        />
      </Form.Item>
    </Col>
  );
};
