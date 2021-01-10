import styled from 'styled-components';
import { motion } from 'framer-motion';

export const WebcamPosProps = {
  pantherOffset: -56,
  pantherAdjust: 18,
  height: 1013,
  width: 1800,
  borderWidth: 24,
};

const Panther = styled(motion.img)`
  position: absolute;
  left: ${WebcamPosProps.pantherOffset}px;
  bottom: ${WebcamPosProps.pantherOffset}px;
`;

const WebcamContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const WebcamFrame = styled.div`
  --border-width: ${WebcamPosProps.borderWidth}px;
  background: transparent;
  display: flex;
  justify-self: center;
  align-self: center;
  height: ${WebcamPosProps.height}px;
  width: ${WebcamPosProps.width}px;
  box-sizing: border-box;
  position: relative;
  border-width: var(--border-width);
  border-style: solid;
  border-image-slice: 1;
  border-image-source: linear-gradient(45deg, var(--yellow) 0%, var(--vip) 100%);
`;

export { WebcamContainer, WebcamFrame, Panther };
