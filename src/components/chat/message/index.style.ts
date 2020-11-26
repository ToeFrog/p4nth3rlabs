import styled, { keyframes, css } from 'styled-components';

interface ChatMessageProps {
  isSubscriber: boolean;
  isBroadcaster: boolean;
  isVip: boolean;
  isMod: boolean;
  isTeamMember: boolean;
}

interface MessageTextProps {
  isAction: boolean;
  startsWithTag: boolean;
}

interface AvatarContainerProps {
  backgroundImage: string;
}

const slideInLeft = keyframes`
  0% {
    transform: translate3d(-100%,0,0);
  }
  100% {
    transform: none;
  }
`;

const slideOutLeft = keyframes`
  0% {
    transform: none;
  }
  100% {
    transform: translate3d(-100%,0,0);
  }
`;

const renderSubscriberAfter = css`
  content: '';
  position: absolute;
  right: -4px;
  bottom: -13px;
  transform: rotate(45deg);
  border-top: 20px solid transparent;
  border-bottom: 20px solid transparent;
  border-left: 20px solid var(--yellow);
`;

const renderBroadcasterAfter = css`
  content: '';
  position: absolute;
  right: -4px;
  bottom: -13px;
  transform: rotate(45deg);
  border-top: 20px solid transparent;
  border-bottom: 20px solid transparent;
  border-left: 20px solid var(--broadcaster);
`;

const vipBorderImage = css`
  border-image-source: linear-gradient(90deg, var(--yellow) 0%, var(--vip) 100%);
`;

const modBorderImage = css`
  border-image-source: linear-gradient(90deg, var(--yellow) 0%, var(--mod) 100%);
`;

const broadcasterBorderImage = css`
  border-image-source: linear-gradient(90deg, var(--yellow) 0%, var(--broadcaster) 100%);
`;

const ChatMessage = styled.div<ChatMessageProps>`
  // animation: ${slideInLeft} 0.3s ease forwards, ${slideOutLeft} 0.5s ease 10000ms forwards;
  background-color: var(--black);
  display: flex;
  flex-direction: row;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
  border-top: 6px solid;
  border-image-slice: 1;
  border-image-source: linear-gradient(90deg, var(--yellow) 0%, var(--yellow) 100%);
  box-shadow: 0rem 0.6rem 1rem -0.4rem var(--black);
  border-bottom-right-radius: 0.25rem;
  position: relative;
  overflow: hidden;

  &:after {
    ${(props) => (props.isSubscriber ? renderSubscriberAfter : '')}
    ${(props) => (props.isBroadcaster ? renderBroadcasterAfter : '')}
  }

  ${(props) => (props.isVip ? vipBorderImage : '')};
  ${(props) => (props.isMod ? modBorderImage : '')};
  ${(props) => (props.isBroadcaster ? broadcasterBorderImage : '')};
`;

const vipLinearGradient = css`
  background: linear-gradient(90deg, var(--yellow), var(--vip));
`;

const modLinearGradient = css`
  background: linear-gradient(90deg, var(--yellow), var(--mod));
`;

const broadcasterLinearGradient = css`
  background: linear-gradient(90deg, var(--yellow), var(--broadcaster));
`;

const DisplayName = styled.p<ChatMessageProps>`
  color: var(--white);
  font-size: 1rem;
  margin-bottom: 1rem;
  color: var(--yellow);
  font-weight: var(--font-weight-bold);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  ${(props) => (props.isVip ? vipLinearGradient : '')};
  ${(props) => (props.isMod ? modLinearGradient : '')};
  ${(props) => (props.isBroadcaster ? broadcasterLinearGradient : '')};
`;

const MessageActionStyles = css`
  color: var(--yellow) !important;
  font-style: italic;
`;

const StartswithTagStyles = css`
  padding-left: 0;
`;

const MessageText = styled.div<MessageTextProps>`
  color: var(--white);
  font-size: 1.4rem;
  display: inline-block;
  word-break: break-word;
  line-height: 1.6rem;
  font-weight: var(--font-weight-normal);
  width: 100%;

  ${(props) => (props.isAction ? MessageActionStyles : '')}
  ${(props) => (props.startsWithTag ? StartswithTagStyles : '')}
`;

const AvatarContainer = styled.div<AvatarContainerProps>`
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  flex: 0 0 100px;
  background-position-y: 50%;
  background-image: ${(props) => `url(${props.backgroundImage})`};
  background-color: var(--black);
`;

const MessageContainer = styled.div`
  padding: 1rem;
  width: 100%;
`;

export { ChatMessage, DisplayName, MessageText, AvatarContainer, MessageContainer };