import { useEffect, useRef } from 'react';

import { Ws } from '@coincap/ws';

export function useWebSocket(assets: string, onMessage: (e: any) => void) {
  const pricesWs = useRef(null);
  useEffect(() => {
    if (!assets) return;
    if (pricesWs?.current) return;
    pricesWs.current = new Ws(`wss://ws.coincap.io/prices?assets=${assets}`);

    pricesWs.current.open(() => {
      pricesWs.current.message(onMessage);
    })
  }, [assets, onMessage]);

  useEffect(() => {
    return function closeWebsocket() {
      pricesWs.current?.close();
    };
  }, []);
}

export default useWebSocket;