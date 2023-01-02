import { app, BrowserWindow, session } from 'electron';
import { AppWindow } from './src/createAppWindow';
import { ConfigService, ENV } from '../core/config';

const isSingleInstance = app.requestSingleInstanceLock();
if (!isSingleInstance) {
  app.quit();
  process.exit(0);
}
if (require('electron-squirrel-startup')) {
  app.quit();
}

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('ready', () => {
  const origin = ConfigService.get(ENV.VITE_ORIGIN);
  session.defaultSession.webRequest.onBeforeSendHeaders((details: any, callback: any) => {
    details.requestHeaders.Origin = origin;
    callback({ cancel: false, requestHeaders: details.requestHeaders });
  });
  session.defaultSession.webRequest.onHeadersReceived((details: any, callback: any) => {
    details.responseHeaders['Access-Control-Allow-Origin'] = origin;
    callback({ cancel: false, requestHeaders: details.requestHeaders });
  });
});

app.on('second-instance', () => {
  AppWindow().catch(err =>
    console.error('Error while trying to prevent second-instance Electron event:', err),
  );
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0)
    AppWindow().catch(err =>
      console.error('Error while trying to handle activate Electron event:', err),
    );

  AppWindow().catch(err =>
    console.error('Error while trying to handle activate Electron event:', err),
  );
});

app
  .whenReady()
  .then(AppWindow)
  .catch(e => console.error('Failed to create window:', e));
