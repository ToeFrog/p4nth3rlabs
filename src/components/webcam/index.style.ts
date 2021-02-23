import styled from 'styled-components';
import { motion } from 'framer-motion';

export const WebcamPosProps = {
  frogOffset: -56,
  frogAdjust: 18,
  height: 956,
  width: 1700,
  borderWidth: 24,
};

const Frog = styled(motion.img)`
  position: absolute;
  left: ${WebcamPosProps.frogOffset}px;
  bottom: ${WebcamPosProps.frogOffset}px;
`;

const WebcamContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const WebcamFrame = styled.div`
  box-shadow: 0rem 0.6rem 1rem -0.4rem var(--black);
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

export { WebcamContainer, WebcamFrame, Frog };
