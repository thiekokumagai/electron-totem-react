// public/electron/main.js
const { app, BrowserWindow } = require('electron');
const path = require('path');

function createWindow() {
  const win = new BrowserWindow({
    width: 1080,
    height: 1920,
    webPreferences: {
      contextIsolation: true,
    },
  });

  const startURL =
    process.env.ELECTRON_START_URL ||
    `file://${path.join(__dirname, '../index.html')}`;

  win.loadURL(startURL);
}

app.whenReady().then(createWindow);
