const electron = require('electron');
document.getElementById('showMessage').addEventListener('click', function() {
    electron.ipcRenderer.send('open-information-dialog');
});