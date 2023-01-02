import React, { useState, useEffect } from 'react';
import { Col, Form, Radio } from 'antd';

import styles from './FormItem.module.scss';

import { ItemParams } from './interface';

export interface ISelectGroup<GROUP = object> extends ItemParams {
  group: GROUP;
}

export const SelectGroup: React.FC<ISelectGroup> = ({ name, label, group, span }): JSX.Element => {
  const [groupData, setGroupData] = useState<string[]>([]);

  useEffect((): void => {
    if (group) {
      setGroupData(Object.keys(group));
    }
  }, [group]);

  return (
    <Col span={span ? span : 24}>
      <Form.Item
        name={name}
        label={label}
        rules={[{ required: true, message: `Please pick an type ${label}!` }]}
      >
        <Radio.Group className={styles.input}>
          {groupData.map(item => {
            if (Number(item)) return;
            return (
              <Radio.Button key={group[item]} value={group[item]}>
                {item}
              </Radio.Button>
            );
          })}
        </Radio.Group>
      </Form.Item>
    </Col>
  );
};
