const { app, BrowserWindow, dialog } = require('electron');
const isDev = require('electron-is-dev');
const path = require('path');
const { autoUpdater } = require('electron-updater');
let mainWindow;

app.on('ready', () => {
  autoUpdater.autoDownload = false;
  autoUpdater.checkForUpdatesAndNotify();
  autoUpdater.on('error', (error) => {
    dialog.showErrorBox('Error: ', error);
  });
  autoUpdater.on('update-available', () => {
    dialog.showMessageBox(
      {
        type: 'info',
        title: '应用有新的版本',
        message: '发现新版本，是否现在更新',
        buttons: ['是', '否'],
      },
      (buttonIndex) => {
        if (buttonIndex === 0) {
          autoUpdater.downloadUpdate();
        }
      },
    );
  });
  autoUpdater.on('update-not-available', () => {
    dialog.showMessageBox({
      title: '没有新版本',
      message: '当前已经是最新版本',
    });
  });
  mainWindow = new BrowserWindow({
    width: 1024,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
    },
  });
  const urlLocation = isDev
    ? 'http://localhost:8000'
    : `file://${path.join(__dirname, './build/index.html')}`;
  mainWindow.loadURL(urlLocation);
});
