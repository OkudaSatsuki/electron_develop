//const { ipcRenderer } = window.native;

// チャンネル 'asynchronous-reply' で非同期メッセージの受信を待機
window.ipc.on('asynchronous-reply', (arg) => {
  // 受信時のコールバック関数
  console.log(arg) // pong
});

// 非同期メッセージの送信
window.ipc.send('asynchronous-message', 'ping')
