import React, { useState } from 'react';
import Socket from './socket';
import MessageQueue from './components/chat';
import { MainframeEvents } from './types';
import type { ChatMessageEvent } from './components/chat/types';

interface AppProps {
  uri: string | undefined;
}

function App(props: AppProps) {
  console.log('here');

  const [messages, setMessages] = useState([]);

  const { uri } = props;

  console.log(uri);

  if (uri && uri.length > 0) {
    console.log('CONNECTED');

    const socket = new Socket(uri, {
      reconnect: true,
    });

    socket.on(MainframeEvents.chatmessage, async (data) => {
      console.log(data);
    });
  }

  return <MessageQueue messages={messages}></MessageQueue>;
}

export default App;
