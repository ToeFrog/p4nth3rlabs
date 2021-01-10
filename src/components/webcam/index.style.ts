import styled, { keyframes } from 'styled-components';
import { motion } from 'framer-motion';

export const WebcamPosProps = {
  pantherOffset: -56,
  pantherAdjust: 18,
  height: 1080,
  width: 1920,
  borderWidth: 24,
};

const Panther = styled(motion.img)`
  position: absolute;
  left: ${WebcamPosProps.pantherOffset}px;
  bottom: ${WebcamPosProps.pantherOffset}px;
`;

const highlight = keyframes`
  100% {
    background-position: 0 0, 0 0;
  }
`;

const WebcamContainer = styled.div`
  background: transparent;
  --border-width: ${WebcamPosProps.borderWidth}px;

  display: block;
  height: ${WebcamPosProps.height}px;
  width: ${WebcamPosProps.width}px;
  box-sizing: border-box;
  position: relative;
  border-width: var(--border-width);
  border-style: solid;
  border-color: transparent;
  background-repeat: no-repeat;
  background-origin: padding-box, border-box;
  background-image: linear-gradient(white, white),
    linear-gradient(45deg, var(--vip), var(--yellow) 50%, var(--red));
  background-repeat: no-repeat;
  background-size: 100% 100%, 100% 200%;
  background-position: 0 0, 0 100%;
  background-origin: padding-box, border-box;
  animation: ${highlight} 10s infinite alternate;
`;

export { WebcamContainer, Panther };
