import { Drawer, Form, Row } from 'antd';
import { AnyAction, Dispatch } from 'redux';
import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { IDrawerSinUp, TOnFinish, IFailed } from '../interface';
import styles from './DrawerSinUp.module.scss';
import { userOperations } from '../../../../redux/user';
import { useOptions } from '../../../../context/OptionContext';
import {
  EmailItem,
  PasswordItem,
  PasswordItemCheck,
  NameItem,
  Message,
  Button,
} from '../../../common';

const DrawerSinUp: React.FC<IDrawerSinUp> = ({ onVisible, onClose }: IDrawerSinUp): JSX.Element => {
  const dispatch: Dispatch<AnyAction> = useDispatch();
  const { widthDraw } = useOptions();
  const [visible, setVisible] = useState(false);
  const [width, setWidth] = useState<string>('');
  const [form] = Form.useForm();

  useEffect((): void => {
    setVisible(onVisible);
  }, [onVisible]);

  useEffect((): void => {
    setWidth(widthDraw);
  }, [widthDraw]);

  const onFinish: TOnFinish = async ({
    name,
    email,
    password,
    message,
  }: IFailed): Promise<void> => {
    await userOperations.register(dispatch, { name, email, password, message });
    onClose();
  };

  const onSubmit = (): void => {
    form.submit();
  };

  return (
    <>
      <Drawer
        title='Registration'
        className={styles.sinUp}
        onClose={onClose}
        open={visible}
        width={width}
        destroyOnClose={true}
      >
        <Form form={form} name='basic' layout='vertical' onFinish={onFinish} autoComplete='off'>
          <Row gutter={16}>
            <NameItem name='name' label='Name' rules={[{ type: 'string', min: 6, max: 15 }]} />
            <EmailItem name='email' label='Email' />
            <PasswordItem name='password' label='Password' />
            <PasswordItemCheck name='confirm' label='Confirm Password' check='password' />
          </Row>
          <Message name='message' label='Your message' />

          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button handlerEvent={onClose}>Close</Button>
            <Button handlerEvent={onSubmit}>Create account</Button>
          </Form.Item>
        </Form>
      </Drawer>
    </>
  );
};

export default DrawerSinUp;
