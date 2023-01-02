import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

import WindowFrame from './context/WindowFrame';

import './sass/index.scss';
import App from './App';

import { store } from './redux/store';

const rootWindow = 'root';

const root = ReactDOM.createRoot(document.getElementById(rootWindow) as HTMLElement);
root.render(
  <Provider store={store}>
    <WindowFrame platform='windows'>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </WindowFrame>
  </Provider>,
);
