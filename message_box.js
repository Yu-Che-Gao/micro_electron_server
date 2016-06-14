const electron = require('electron');
const ipc=electron.ipcMain;
const dialog=electron.dialog;

exports.setInformationDialog=function() {
    ipc.on('open-information-dialog', function (event) {
        const options = {
            type: 'info',
            title: '警告',
            message: '是或否?',
            buttons: ['Yes', 'No']
        };
        dialog.showMessageBox(options, function (index) {
            event.sender.send('information-dialog-selection', index)
        });
    });
};