import { BrowserWindow, ipcMain, shell } from 'electron';
//https://www.electronjs.org/ru/docs/latest/api/browser-window
export const registerTitlebarIpc = (mainWindow: BrowserWindow) => {
  ipcMain.handle('window-minimize', () => {
    mainWindow.minimize();
  });

  ipcMain.handle('window-maximize', () => {
    mainWindow.maximize();
  });

  ipcMain.handle('window-toggle-maximize', () => {
    if (mainWindow.isMaximized()) {
      mainWindow.unmaximize();
    } else {
      mainWindow.maximize();
    }
  });

  ipcMain.handle('window-close', () => {
    mainWindow.close();
  });

  ipcMain.handle('web-undo', () => {
    mainWindow.webContents.undo();
  });

  ipcMain.handle('web-redo', () => {
    mainWindow.webContents.redo();
  });

  ipcMain.handle('web-cut', () => {
    mainWindow.webContents.cut();
  });

  ipcMain.handle('web-copy', () => {
    mainWindow.webContents.copy();
  });

  ipcMain.handle('web-paste', () => {
    mainWindow.webContents.paste();
  });

  ipcMain.handle('web-delete', () => {
    mainWindow.webContents.delete();
  });

  ipcMain.handle('web-select-all', () => {
    mainWindow.webContents.selectAll();
  });

  ipcMain.handle('web-reload', () => {
    mainWindow.webContents.reload();
  });

  ipcMain.handle('web-force-reload', () => {
    mainWindow.webContents.reloadIgnoringCache();
  });

  ipcMain.handle('web-toggle-devtools', () => {
    mainWindow.webContents.toggleDevTools();
  });

  ipcMain.handle('web-actual-size', () => {
    mainWindow.webContents.setZoomLevel(0);
  });

  ipcMain.handle('web-zoom-in', () => {
    mainWindow.webContents.setZoomLevel(mainWindow.webContents.zoomLevel + 0.2);
  });

  ipcMain.handle('web-zoom-out', () => {
    mainWindow.webContents.setZoomLevel(mainWindow.webContents.zoomLevel - 0.2);
  });

  ipcMain.handle('web-toggle-fullscreen', () => {
    if (import.meta.env.DEV) mainWindow.setFullScreen(!mainWindow.fullScreen);
  });

  ipcMain.handle('open-url', (_e, url) => {
    shell.openExternal(url);
  });

  ipcMain.handle('fixed-window', () => {
    const onTop = mainWindow.isAlwaysOnTop();
    mainWindow.setAlwaysOnTop(!onTop, 'status');
  });
};
