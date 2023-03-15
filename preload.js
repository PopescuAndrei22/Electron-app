const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('api',{
    createNote: (data) => ipcRenderer.invoke('create-file',data)
})