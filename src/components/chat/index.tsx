import Message from './message';
import { MessageQueue } from './index.style';
import { ChatMessageEvent } from './types';

interface ChatMessageQueueProps {
  messages: ChatMessageEvent[];
}

export default function ChatMessageQueue(props: ChatMessageQueueProps) {
  const { messages } = props;

  return (
    <>
      <MessageQueue>
        {messages.map((message: ChatMessageEvent) => (
          <Message message={message} />
        ))}
      </MessageQueue>
    </>
  );
}
