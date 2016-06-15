const electron = require('electron');
const app = electron.app;
const messageBox = require('./message_box.js');
const windowEvent = require('./window_event.js');

app.on('ready', windowEvent.createWindow);
messageBox.setInformationDialog('警告', '是或否?', ['ok', 'cancel'], function (index) {
  if (index === 0) {
    console.log('a');
  } else {
    console.log('b');
  }
});