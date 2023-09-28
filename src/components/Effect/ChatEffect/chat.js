export function createEncryptedConnection({
    serverUrl,
    roomId,
  }) {
    let intervalId;
    let messageCallback;
    return {
        connect() {
            console.log('✅ 🔐 Connecting to "' + roomId + '" room... (encrypted)');
            clearInterval(intervalId);
            intervalId = setInterval(() => {
                if (messageCallback) {
                    if (Math.random() > 0.5)  messageCallback('hey');
                    else  messageCallback('lol');
                }
            }, 3000);
        },
        disconnect() {
            clearInterval(intervalId);
            messageCallback = null;
            console.log('❌ 🔐 Disconnected from "' + roomId + '" room (encrypted)');
        },
        on(event, callback) { messageCallback = callback; },
    };
  }
  
  export function createUnencryptedConnection({
    serverUrl,
    roomId,
  }) {
    // A real implementation would actually connect to the server
    let intervalId;
    let messageCallback;
    return {
        connect() {
            console.log('✅ Connecting to "' + roomId + '" room (unencrypted)...');
            clearInterval(intervalId);
            intervalId = setInterval(() => {
                if (messageCallback) {
                    if (Math.random() > 0.5) messageCallback('hey');
                    else messageCallback('lol');
                }
            }, 3000);
        },
        disconnect() {
            clearInterval(intervalId);
            messageCallback = null;
            console.log('❌ Disconnected from "' + roomId + '" room (unencrypted)');
        },
        on(event, callback) {messageCallback = callback;},
    };
  }