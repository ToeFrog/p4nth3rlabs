import {
  ChatMessage,
  DisplayName,
  MessageText,
  AvatarContainer,
  MessageContainer,
} from './index.style';

import { processChat } from './utils';
import type { ChatMessageEvent } from '../types';

interface MessageProps {
  message: ChatMessageEvent;
}

export default function Message(props: MessageProps) {
  const { message } = props;
  const {
    displayName,
    logoUrl,
    isMod,
    isVip,
    isSubscriber,
    isBroadcaster,
    isTeamMember,
    type,
  } = message;

  const processedChat = processChat(message);
  const action: boolean = type === 'action';
  const startsWithTag = processedChat.message.startsWith('<span class="tag">');

  return (
    <ChatMessage
      isSubscriber={isSubscriber}
      isBroadcaster={isBroadcaster}
      isVip={isVip}
      isMod={isMod}
      isTeamMember={isTeamMember}
    >
      <AvatarContainer backgroundImage={logoUrl} />
      <MessageContainer>
        <DisplayName
          isSubscriber={isSubscriber}
          isBroadcaster={isBroadcaster}
          isVip={isVip}
          isMod={isMod}
          isTeamMember={isTeamMember}
        >
          {displayName}
        </DisplayName>
        <MessageText action={action} startsWithTag={startsWithTag}>
          {processedChat.message}
        </MessageText>
      </MessageContainer>
    </ChatMessage>
  );
}
