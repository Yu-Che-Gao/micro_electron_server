const electron = require('electron');
const ipc=electron.ipcMain;
const dialog=electron.dialog;

exports.setInformationDialog=function(myTitle, myMessage, myButtons) {
    ipc.on('open-information-dialog', function (event) {
        const options = {
            type: 'info',
            title: myTitle,
            message: myMessage,
            buttons: myButtons
        };
        dialog.showMessageBox(options, function (index) {
            event.sender.send('information-dialog-selection', index);

            if(index===0) {
               dialog.showErrorBox('提醒', '你點了是');
            }
        });
    });
};