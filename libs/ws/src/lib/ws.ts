export class Ws {
  instance: WebSocket = null;

  constructor(URL: string) {
    if (!this.instance) {
      this.instance = new WebSocket(encodeURI(URL));
    }
  }

  open = (onOpen: () => void) => {
    this.instance.onopen = onOpen;
  }

  message = (onMessage: () => void) => {
    try {
      this.instance.onmessage = onMessage;
      console.log('Websocket connected');
    } catch (err) {
      console.log(err);
    }
  }

  error = (onError: () => void) => {
    try {
      this.instance.onerror = onError;
    } catch (err) {
      console.log(err);
    }
  }

  close = () => {
    try {
      this.instance.close();
      console.log('Websocket closed');
    } catch (err) {
      console.log(err);
    }
  };
};
