import styled from 'styled-components';

interface MessageQueueProps {}

const MessageQueue = styled.div<MessageQueueProps>`
  display: flex;
  flex-direction: column;
  position: fixed;
  left: 0;
  bottom: 120px;
  width: 400px;
  z-index: 2;
`;

export { MessageQueue };
