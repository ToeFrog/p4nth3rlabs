import React, { useReducer, useEffect, Dispatch } from 'react';
import Socket from './socket';
import AppContext, { AppState } from './AppContext';
import AppReducer from './AppReducer';
import MessageQueue from './components/chat';
import { GlobalStyle } from './styles';
import { MainframeEvent, WebsocketEvent } from './types';

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

      socket.on(MainframeEvent.chatmessage, (event: WebsocketEvent) => {
        dispatch({
          type: 'addChatMessage',
          chatMessage: event.data,
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
  };

  const [state, dispatch] = useReducer(AppReducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      <GlobalStyle />
      <MessageQueue></MessageQueue>
    </AppContext.Provider>
  );
}

export default App;
