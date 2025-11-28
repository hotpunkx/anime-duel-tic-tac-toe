import { useCallback, useRef, useEffect } from 'react';

export const useGameSounds = () => {
  const moveSound = useRef<HTMLAudioElement | null>(null);
  const winSound = useRef<HTMLAudioElement | null>(null);
  const drawSound = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Initialize audio elements
    moveSound.current = new Audio('/sounds/move.mp3');
    winSound.current = new Audio('/sounds/win.mp3');
    drawSound.current = new Audio('/sounds/draw.mp3');

    // Set volume
    if (moveSound.current) moveSound.current.volume = 0.5;
    if (winSound.current) winSound.current.volume = 0.6;
    if (drawSound.current) drawSound.current.volume = 0.5;

    return () => {
      // Cleanup
      moveSound.current = null;
      winSound.current = null;
      drawSound.current = null;
    };
  }, []);

  const playMove = useCallback(() => {
    if (moveSound.current) {
      moveSound.current.currentTime = 0;
      moveSound.current.play().catch(e => console.log('Move sound play failed:', e));
    }
  }, []);

  const playWin = useCallback(() => {
    if (winSound.current) {
      winSound.current.currentTime = 0;
      winSound.current.play().catch(e => console.log('Win sound play failed:', e));
    }
  }, []);

  const playDraw = useCallback(() => {
    if (drawSound.current) {
      drawSound.current.currentTime = 0;
      drawSound.current.play().catch(e => console.log('Draw sound play failed:', e));
    }
  }, []);

  return { playMove, playWin, playDraw };
};
