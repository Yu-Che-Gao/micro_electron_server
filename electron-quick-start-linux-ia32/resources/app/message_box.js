const electron = require('electron');
const ipc = electron.ipcMain;
const dialog = electron.dialog;

exports.setInformationDialog = function (myTitle, myMessage, myButtons, handler) {
    ipc.on('open-information-dialog', function (event) {
        const options = {
            type: 'info',
            title: myTitle,
            message: myMessage,
            buttons: myButtons
        };
        dialog.showMessageBox(options, function (index) {
            event.sender.send('information-dialog-selection', index);
            handler(index);
        });
    });
};