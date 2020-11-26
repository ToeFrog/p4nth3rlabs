import styled from 'styled-components';

interface MessageQueueProps {}

const MessageQueue = styled.div<MessageQueueProps>`
  display: flex;
  flex-direction: column;
  position: fixed;
  left: 0;
  bottom: 0;
  width: 400px;
`;

export { MessageQueue };
