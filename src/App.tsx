import React, { useReducer, useEffect } from 'react';
import Socket from './socket';
import AppContext, { AppState } from './AppContext';
import AppReducer from './AppReducer';
import MessageQueue from './components/chat';
import Alerts from './components/alerts';
import { GlobalStyle } from './styles';
import { MainframeEvent, ChatWebsocketEvent, AlertWebsocketEvent } from './types';

interface AppProps {
  uri: string | undefined;
}

function App(props: AppProps) {
  const { uri } = props;

  useEffect(() => {
    let socket: any;
    if (uri && uri.length > 0) {
      socket = new Socket(uri, {
        reconnect: true,
      });

      socket.on(MainframeEvent.chatmessage, (event: ChatWebsocketEvent) => {
        dispatch({
          type: 'addChatMessage',
          data: event.data,
        });
      });

      socket.on(MainframeEvent.follow, (event: AlertWebsocketEvent) => {
        console.log('FOLLOW RECEIVED');

        const dataToPass: any = {
          type: 'follow',
          data: event.data,
        };

        dispatch({
          type: 'follow',
          data: dataToPass,
        });
      });
    }
    return () => {
      // cleanup
      if (socket) {
        socket.disconnect();
      }
    };
  }, [uri]);

  const initialState: AppState = {
    chatMessages: [],
    alerts: [],
  };

  const [state, dispatch] = useReducer(AppReducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      <GlobalStyle />
      <MessageQueue />
      <Alerts dispatch={dispatch} />
    </AppContext.Provider>
  );
}

export default App;
