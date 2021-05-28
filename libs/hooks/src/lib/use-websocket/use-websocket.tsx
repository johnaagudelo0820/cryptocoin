import { useEffect, useRef } from 'react';

import { config } from '@coincap/utils';
import { Ws } from '@coincap/ws';

export function useWebSocket(assets: string, onMessage: (e: any) => void) {
  const wsRef = useRef(null);
  useEffect(() => {
    if (!assets) return;
    if (wsRef?.current) return;
    wsRef.current = new Ws(`${config.WS_BASE_URL}${assets}`);

    wsRef.current.open(() => {
      wsRef.current.message(onMessage);
    })
  }, [assets, onMessage]);

  useEffect(() => {
    return function closeWebsocket() {
      wsRef.current?.close();
    };
  }, []);

  return { wsRef };
}

export default useWebSocket;