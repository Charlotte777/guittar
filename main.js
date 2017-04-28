'use strict';

const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
const ipcMain = electron.ipcMain; //主进程


let mainWindow = null;
let Settings = {};

app.on('ready', createWindow); // 有些API只能在该事件发生后才能被使用。

app.on('window-all-closed', () => { // 当所有的窗口被关闭后退出应用。
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('activate', () => {
    // 对于OS X系统，当dock图标被点击后会重新创建一个app窗口，并且不会有其他
    // 窗口打开
    if (mainWindow === null) {
        createWindow();
    }
})

function createWindow() {
    mainWindow = new BrowserWindow({
        width: 1600,
        height: 900,
        minWidth: 1000,
        minHeight: 670,
        frame: true,
        autoHideMenuBar: true,
        titleBarStyle: 'hidden',
        backgroundColor: '#121212',
        title: 'Guitar',
        icon: __dirname + '/static/images/favicon.png'
    });
    mainWindow.loadURL(`http://localhost:8080`);
    mainWindow.webContents.openDevTools();
    mainWindow.on('closed', () => {
        // 解除窗口对象的引用，通常而言如果应用支持多个窗口的话，你会在一个数组里
        // 存放窗口对象，在窗口关闭的时候应当删除相应的元素。
        mainWindow = null;
        Settings = {};
    });
}