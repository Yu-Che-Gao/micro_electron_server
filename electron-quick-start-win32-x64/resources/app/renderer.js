const electron = require('electron');
const remoteWindow = electron.remote;
document.getElementById('showMessage').addEventListener('click', function () {
    electron.ipcRenderer.send('open-information-dialog');
});

document.getElementById('maximized').addEventListener('click', function () {
    switch (remoteWindow.getCurrentWindow().isMaximized()) {
        case true:
            remoteWindow.getCurrentWindow().unmaximize();
            break;
        case false:
            remoteWindow.getCurrentWindow().maximize();
            break;
    }
});

document.getElementById('minimized').addEventListener('click', function () {
    remoteWindow.getCurrentWindow().minimize();
});

document.getElementById('closed').addEventListener('click', function () {
    remoteWindow.getCurrentWindow().close();
});