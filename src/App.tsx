import { useState, useReducer, useEffect, Dispatch } from 'react';
import Socket from './socket';
import AppContext, { AppState } from './AppContext';
import AppReducer from './AppReducer';
import MessageQueue from './components/chat';
import { GlobalStyle } from './styles';
import { MainframeEvent, WebsocketEvent } from './types';

// import { ChatMessageQueueMaxMessageCount } from './components/chat';

interface AppProps {
  uri: string | undefined;
}

async function listenForChatMessages(socket: any, dispatch: Dispatch<any>) {
  socket.on(MainframeEvent.chatmessage, async (event: WebsocketEvent) => {
    dispatch({
      type: 'addChatMessage',
      chatMessage: event.data,
    });
  });
}

function App(props: AppProps) {
  const { uri } = props;

  useEffect(() => {
    if (uri && uri.length > 0) {
      const socket = new Socket(uri, {
        reconnect: true,
      });

      listenForChatMessages(socket, dispatch);
    }
    return () => {
      // cleanup
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
