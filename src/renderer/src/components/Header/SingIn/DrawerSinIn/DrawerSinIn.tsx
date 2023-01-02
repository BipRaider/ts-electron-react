import React, { useState, useEffect } from 'react';
import { AnyAction, Dispatch } from 'redux';
import { Drawer, Form } from 'antd';

import { IDrawerSinIn, TOnFinish, IFailed } from '../interface';
import styles from './DrawerSinIn.module.scss';
import { useDispatch } from 'react-redux';
import { userOperations } from '../../../../redux/user';
import { EmailItem, PasswordItem, Button } from '../../../common';
import { useOptions } from '../../../../context/OptionContext';

const DrawerSinIn: React.FC<IDrawerSinIn> = ({ onVisible, onClose }: IDrawerSinIn): JSX.Element => {
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
  const onFinish: TOnFinish = async (values: IFailed): Promise<void> => {
    await userOperations.login(dispatch, values);
    onClose();
  };

  const onSubmit = (): void => {
    form.submit();
  };

  return (
    <>
      <Drawer
        title='Welcome to site'
        className={styles.sinIn}
        onClose={onClose}
        open={visible}
        width={width}
        destroyOnClose={true}
      >
        <Form
          form={form}
          name='basic'
          initialValues={{ remember: true }}
          onFinish={onFinish}
          autoComplete='off'
        >
          <EmailItem label='Email' name='email' />
          <PasswordItem label='Password' name='password' />

          <Form.Item wrapperCol={{ offset: 8 }}>
            <Button handlerEvent={onClose}>Close</Button>
            <Button handlerEvent={onSubmit}>Log in</Button>
          </Form.Item>
        </Form>
      </Drawer>
    </>
  );
};

export default DrawerSinIn;
