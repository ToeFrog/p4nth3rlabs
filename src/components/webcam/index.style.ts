import styled, { keyframes } from 'styled-components';
import { motion } from 'framer-motion';

const moveGradient = keyframes`
50% {
  background-position: 100% 50%;
}`;

const Panther = styled(motion.img)`
  position: absolute;
  left: -64px;
  bottom: -64px;
`;

const WebcamContainer = styled.div`
  --border-width: 24px;

  display: block;
  margin: 100px auto 0 auto;

  height: 563px;
  width: 1000px;

  box-sizing: border-box;

  padding: var(--border-width);
  position: relative;

  // background: #00b140;

  &::after {
    position: absolute;
    content: '';
    top: calc(-1 * var(--border-width));
    left: calc(-1 * var(--border-width));
    z-index: -1;
    width: calc(100% + var(--border-width) * 2);
    height: calc(100% + var(--border-width) * 2);
    background: linear-gradient(
      60deg,
      hsl(224, 85%, 66%),
      hsl(269, 85%, 66%),
      hsl(314, 85%, 66%),
      hsl(359, 85%, 66%),
      hsl(44, 85%, 66%),
      hsl(89, 85%, 66%),
      hsl(134, 85%, 66%),
      hsl(179, 85%, 66%)
    );
    background-size: 300% 300%;
    background-position: 0 50%;
    animation: ${moveGradient} 20s alternate infinite;
  }
`;

export { WebcamContainer, Panther };
