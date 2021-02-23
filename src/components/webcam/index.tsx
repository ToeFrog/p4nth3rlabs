import { useEffect, useState } from 'react';
import { WebcamContainer, WebcamFrame, Frog, WebcamPosProps } from './index.style';

enum Frogs {
  Annoyed = 'annoyed',
  Blush = 'blush',
  Love = 'love',
  Mad = 'mad',
  Sad = 'sad',
  Unamused = 'unamused',
}

export const getRandomFrog = (currentFrog: string): string => {
  const frogs = Object.values(Frogs).filter((frog) => frog !== currentFrog);
  return frogs[Math.floor(Math.random() * frogs.length)];
};

export default function Webcam() {
  const [currentFrog, setCurrentFrog] = useState<string>(Frogs.Love);

  useEffect(() => {
    const interval = setInterval(() => {
      const newFrog = getRandomFrog(currentFrog);
      setCurrentFrog(newFrog);
    }, 60000);
    return () => clearInterval(interval);
    // eslint-disable-next-line
  }, []);

  return (
    <WebcamContainer>
      <WebcamFrame>
        <Frog
          key={currentFrog}
          src={`/assets/frogs/${currentFrog}.png`}
          animate={{
            x: [
              0,
              0,
              0,
              WebcamPosProps.width - WebcamPosProps.frogAdjust,
              WebcamPosProps.width - WebcamPosProps.frogAdjust,
              0,
              0,
              0,
            ],
            y: [
              0,
              0,
              0,
              0,
              -WebcamPosProps.height + WebcamPosProps.frogAdjust,
              -WebcamPosProps.height + WebcamPosProps.frogAdjust,
              0,
              0,
            ],
            scale: [0, 1, 1, 1, 1, 1, 1, 0],
            rotate: [-360, 0, 0, 90, 180, -270, 0, 360],
          }}
          transition={{
            delay: 1,
            duration: 5,
            ease: 'easeInOut',
            times: [0, 0.15, 0.2, 0.4, 0.6, 0.8, 0.95, 1],
          }}
        />
      </WebcamFrame>
    </WebcamContainer>
  );
}
