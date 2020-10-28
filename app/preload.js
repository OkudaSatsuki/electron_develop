const { contextBridge, ipcRenderer } = require('electron');
window.ipcRenderer = ipcRenderer;
contextBridge.exposeInMainWorld(
    "ipc",
    {
        send: (channel, data) => { ipcRenderer.send(channel, data);},
        on: (channel, func) => {ipcRenderer.on(channel, (event, ...args) => func(...args));}
    }
);
