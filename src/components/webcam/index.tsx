import { WebcamContainer, Panther } from './index.style';

export const getRandomPanther = (): string => {
  const panthers = ['cool', 'fire', 'heart', 'majick', 'pewpew', 'star'];

  return panthers[Math.floor(Math.random() * panthers.length)];
};

// animate={{
//   rotate: [-14, -14, -14],
//   y: [0, 8, 0],
// }}
// transition={{
//   duration: 8,
//   ease: 'easeInOut',
//   times: [0, 0.5, 1],
//   loop: Infinity,
// }}

export default function Webcam() {
  return (
    <WebcamContainer>
      <Panther
        src="/assets/panthers/cool.png"
        animate={{
          x: [0, 1032, 1032, 0, 0],
          y: [0, 0, -595, -595, 0],
        }}
        transition={{
          duration: 3,
          ease: 'easeInOut',
          times: [0, 0.25, 0.5, 0.75, 1],
        }}
      />
    </WebcamContainer>
  );
}
