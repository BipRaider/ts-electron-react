import { join, resolve } from 'node:path';
import { app, BrowserWindow, BrowserWindowConstructorOptions } from 'electron';

import { registerTitlebarIpc } from './titlebarIPC';
import createWindow from './createWindow';
import ServerSinglePage from './ServerSinglePage';

/***Options window.
 * @link https://www.electronjs.org/ru/docs/latest/api/browser-window
 * */
const options: BrowserWindowConstructorOptions = {
  width: 1000,
  height: 800,
  maxHeight: 800,
  minHeight: 680,
  maxWidth: 1200,
  minWidth: 1000,
  titleBarStyle: 'hidden',
  title: 'BipGo',
  icon: resolve('assets/images/appIcon.ico'),
  backgroundColor: '#202020',
  show: false,
  autoHideMenuBar: true,
  frame: false,
  webPreferences: {
    webviewTag: false,
    nodeIntegration: false,
    contextIsolation: true,
    nodeIntegrationInWorker: false,
    nodeIntegrationInSubFrames: false,
    preload: join(__dirname, '../src/preload.js'),
    sandbox: false,
  },
};

export const AppWindow = async (): Promise<BrowserWindow> => {
  await app.whenReady();

  let appWindow: BrowserWindow | null = createWindow('main', options);

  // Load the index.html of the app window.
  if (import.meta.env.DEV) {
    appWindow.loadURL('http://localhost:3000');
    appWindow.webContents.openDevTools();
  } else {
    const pageUrl = new URL('../renderer/index.html', `file://${__dirname}`).toString();
    appWindow.loadURL(pageUrl);
  }
  const server = new ServerSinglePage(app);
  server.init();

  // Show window when its ready to
  appWindow.on('ready-to-show', () => appWindow?.show());

  // Close all windows when main window is closed
  appWindow.on('close', () => {
    appWindow = null;
    app.quit();
  });

  // Register Inter Process Communication for main process
  if (appWindow) registerTitlebarIpc(appWindow);

  return appWindow;
};
