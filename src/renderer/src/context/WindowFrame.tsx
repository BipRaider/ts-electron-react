import React from 'react';

import Titlebar from '../components/TitleBar/Titlebar';
import logo from '../../assets/logo.ico';
import { userSelector } from '../redux/user';
import { useSelector } from 'react-redux';
import { OptionsProvider } from './OptionContext';
type Props = {
  platform: 'windows' | 'mac';
  children: React.ReactNode;
};

type Context = {
  platform: 'windows' | 'mac';
};

export const WindowContext = React.createContext<Context>({
  platform: 'windows',
});

const WindowFrame: React.FC<Props> = (props: Props) => {
  const userName = useSelector(userSelector.userName);
  return (
    <WindowContext.Provider value={{ platform: props.platform }}>
      <Titlebar title={userName ?? 'Electron Window'} mode='centered-title' icon={logo} />
      <OptionsProvider>
        <React.StrictMode>
          <main className='window-content'>{props.children}</main>
        </React.StrictMode>
      </OptionsProvider>
    </WindowContext.Provider>
  );
};

export default WindowFrame;
