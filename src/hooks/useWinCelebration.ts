import { useCallback } from 'react';
import confetti from 'canvas-confetti';

export const useWinCelebration = () => {
  const triggerConfetti = useCallback((player: 'X' | 'O') => {
    const colors = player === 'X' 
      ? ['#2d5af0', '#4facfe', '#00f2fe', '#ffffff']
      : ['#ff69b4', '#ff9a9e', '#fecfef', '#ffffff'];

    // Burst from center
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
      colors: colors,
      ticks: 200,
      gravity: 1.2,
      scalar: 1.2,
    });

    // Side cannons
    setTimeout(() => {
      confetti({
        particleCount: 50,
        angle: 60,
        spread: 55,
        origin: { x: 0, y: 0.6 },
        colors: colors,
      });
      confetti({
        particleCount: 50,
        angle: 120,
        spread: 55,
        origin: { x: 1, y: 0.6 },
        colors: colors,
      });
    }, 200);

    // Rain effect
    setTimeout(() => {
      confetti({
        particleCount: 30,
        spread: 360,
        startVelocity: 30,
        decay: 0.9,
        origin: { y: 0 },
        colors: colors,
      });
    }, 400);

    // Stars
    setTimeout(() => {
      confetti({
        particleCount: 20,
        spread: 100,
        origin: { y: 0.5 },
        shapes: ['star'],
        colors: ['#FFD700', '#FFA500', '#FFFF00'],
        scalar: 2,
      });
    }, 600);
  }, []);

  return { triggerConfetti };
};
