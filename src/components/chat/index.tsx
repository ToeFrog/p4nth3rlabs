import React, { useContext } from 'react';
import AppContext from '../../AppContext';
import Message from './message';
import { MessageQueue } from './index.style';

export const MaxMessageCount = 7;

export default function ChatMessageQueue() {
  const { state } = useContext(AppContext);
  const { chatMessages } = state;

  return (
    <MessageQueue>
      {chatMessages.map((message) => (
        <Message key={message.id} message={message} />
      ))}
    </MessageQueue>
  );
}
