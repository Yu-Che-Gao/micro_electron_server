const electron = require('electron');
const remoteWindow = electron.remote;
const currentWindow=remoteWindow.getCurrentWindow();
document.getElementById('showMessage').addEventListener('click', function () {
    electron.ipcRenderer.send('open-information-dialog');
});

document.getElementById('maximized').addEventListener('click', function () {
    switch (currentWindow.isMaximized()) {
        case true:
            currentWindow.unmaximize();
            break;
        case false:
            currentWindow.maximize();
            break;
    }
});

document.getElementById('minimized').addEventListener('click', function () {
    currentWindow.minimize();
});

document.getElementById('closed').addEventListener('click', function () {
    currentWindow.close();
});