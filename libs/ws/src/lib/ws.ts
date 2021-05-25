export class Ws {
  instance: WebSocket = null;

  constructor(URL: string) {
    console.log(URL);
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

  close = (onClose: () => void) => {
    try {
      this.instance.onclose = onClose;
    } catch (err) {
      console.log(err);
    }
  };
};
