const electron = require('electron');
exports.createWindow = function () {
  let mainWindow = new electron.BrowserWindow({ width: 800, height: 600, frame: false });
  mainWindow.loadURL(`file://${__dirname}/index.html`);
  mainWindow.on('closed', function () {
    mainWindow = null;
  });
};