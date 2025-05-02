const { app, BrowserWindow } = require('electron');
const path = require('path');

let mainWindow;

app.whenReady().then(() => {
  mainWindow = new BrowserWindow({
    width: 400,
    height: 200,
    show: true,
    center: true,
    frame: false,             // Hides window frame (title bar, buttons)
    skipTaskbar: true,        // Hides from taskbar
    alwaysOnTop: true,        // Keeps the window on top of others
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'), // Optional — only if you’re using preload
    },
  });

  mainWindow.loadFile('index.html'); 
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});
