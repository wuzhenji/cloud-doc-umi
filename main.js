const { app, BrowserWindow } = require('electron')
const isDev = require('electron-is-dev')
const path = require("path")
let mainWindow

app.on('ready', () => {
    mainWindow = new BrowserWindow({
        width: 1024,
        height: 600,
        webPreferences: {
            nodeIntegration: true
        }
    })
    const urlLocation = isDev ? 'http://localhost:8000' : `file://${path.join(__dirname, './build/index.html')}`
    mainWindow.loadURL(urlLocation)
})