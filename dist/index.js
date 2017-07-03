"use strict";
exports.__esModule = true;
var electron_1 = require("electron");
var path = require("path");
var url = require("url");
var SharedState_1 = require("./SharedState");
var win;
global.state = new SharedState_1.SharedState();
electron_1.app.on('ready', function () {
    win = new electron_1.BrowserWindow({ width: 800, height: 600 });
    win.loadURL(url.format({
        pathname: path.join(__dirname, '../front/index.html'),
        protocol: 'file:',
        slashes: true
    }));
    win.on('closed', function () {
        win = null;
    });
});
electron_1.app.on('window-all-closed', function () {
    electron_1.app.quit();
});
