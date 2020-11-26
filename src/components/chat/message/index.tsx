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
  const { displayName, logoUrl, isMod, isVip, isSubscriber, isBroadcaster, isTeamMember } = message;

  const processedChat = processChat(message);
  const startsWithTag = processedChat.message.startsWith('<span class="tag">');
  const isAction: boolean = processedChat.type === 'action';

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
          className="background-clip-text-hack"
          isSubscriber={isSubscriber}
          isBroadcaster={isBroadcaster}
          isVip={isVip}
          isMod={isMod}
          isTeamMember={isTeamMember}
        >
          @{displayName}
        </DisplayName>
        <MessageText
          isAction={isAction}
          startsWithTag={startsWithTag}
          dangerouslySetInnerHTML={{ __html: processedChat.message }}
        ></MessageText>
      </MessageContainer>
    </ChatMessage>
  );
}
