import { useEffect, useState } from 'react';
import { WebcamContainer, Panther, WebcamPosProps } from './index.style';

enum Panthers {
  Cool = 'cool',
  Fire = 'fire',
  Heart = 'heart',
  Majick = 'majick',
  PewPew = 'pewpew',
  Star = 'star',
}

export const getRandomPanther = (currentPanther: string): string => {
  const panthers = Object.values(Panthers).filter((panther) => panther !== currentPanther);
  return panthers[Math.floor(Math.random() * panthers.length)];
};

export default function Webcam() {
  const [currentPanther, setCurrentPanther] = useState<string>(Panthers.Cool);

  useEffect(() => {
    const interval = setInterval(() => {
      const newPanther = getRandomPanther(currentPanther);
      setCurrentPanther(newPanther);
    }, 60000);
    return () => clearInterval(interval);
    // eslint-disable-next-line
  }, []);

  return (
    <WebcamContainer>
      <Panther
        key={currentPanther}
        src={`/assets/panthers/${currentPanther}.png`}
        animate={{
          x: [0, 0, 0, WebcamPosProps.width, WebcamPosProps.width, 0, 0, 0],
          y: [0, 0, 0, 0, -WebcamPosProps.height, -WebcamPosProps.height, 0, 0],
          scale: [0, 1, 1, 1, 1, 1, 1, 0],
          rotate: [-360, 0, 0, 0, 0, 0, 0, 360],
        }}
        transition={{
          delay: 1,
          duration: 3,
          ease: 'easeInOut',
          times: [0, 0.125, 0.175, 0.25, 0.5, 0.75, 0.95, 1],
        }}
      />
    </WebcamContainer>
  );
}
