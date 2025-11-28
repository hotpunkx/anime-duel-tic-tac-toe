import { useEffect, useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";

interface WinnerModalProps {
  winner: 'X' | 'O' | 'draw' | null;
  playerName: string;
  onClose: () => void;
}

export const WinnerModal = ({ winner, playerName, onClose }: WinnerModalProps) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (winner) {
      setShow(true);
    }
  }, [winner]);

  const handleClose = () => {
    setShow(false);
    setTimeout(onClose, 300);
  };

  if (!winner) return null;

  const isDraw = winner === 'draw';
  const winnerColor = winner === 'X' ? 'hsl(var(--game-blue))' : 'hsl(var(--game-pink))';

  return (
    <Dialog open={show} onOpenChange={handleClose}>
      <DialogContent 
        className="sm:max-w-md border-4"
        style={{
          borderColor: isDraw ? 'hsl(var(--game-yellow))' : winnerColor,
          background: 'linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(240,240,255,0.95) 100%)',
        }}
      >
        <div className="flex flex-col items-center justify-center py-8 space-y-6">
          {/* Animated emoji */}
          <div className="text-8xl animate-bounce">
            {isDraw ? '🤝' : '🎉'}
          </div>

          {/* Winner text */}
          <div className="text-center space-y-2">
            <h2 
              className="text-5xl font-bold animate-scale-in"
              style={{
                fontFamily: "'Fredoka One', cursive",
                color: isDraw ? 'hsl(var(--game-yellow))' : winnerColor,
                textShadow: isDraw 
                  ? '3px 3px 0 rgba(0,0,0,0.2)'
                  : `3px 3px 0 ${winner === 'X' ? '#1a3b9e' : '#c91659'}`,
                WebkitTextStroke: '2px rgba(0,0,0,0.1)',
              }}
            >
              {isDraw ? "IT'S A DRAW!" : `${playerName} WINS!`}
            </h2>
            
            {!isDraw && (
              <p 
                className="text-2xl animate-fade-in"
                style={{
                  fontFamily: "'Fredoka One', cursive",
                  color: 'rgba(0,0,0,0.6)',
                }}
              >
                Victory Royale! 🏆
              </p>
            )}
          </div>

          {/* Particles floating */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            {[...Array(12)].map((_, i) => (
              <div
                key={i}
                className="absolute animate-float"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 2}s`,
                  animationDuration: `${3 + Math.random() * 2}s`,
                }}
              >
                <div
                  className="w-3 h-3 rounded-full"
                  style={{
                    background: isDraw 
                      ? 'hsl(var(--game-yellow))'
                      : winnerColor,
                    opacity: 0.6,
                    boxShadow: `0 0 10px ${isDraw ? 'hsl(var(--game-yellow))' : winnerColor}`,
                  }}
                />
              </div>
            ))}
          </div>

          {/* Close button */}
          <button
            onClick={handleClose}
            className="mt-6 px-8 py-3 rounded-2xl text-xl font-bold transition-transform active:translate-y-1"
            style={{
              fontFamily: "'Fredoka One', cursive",
              background: 'linear-gradient(to bottom, #4facfe 0%, #00f2fe 100%)',
              color: 'white',
              textShadow: '2px 2px 0 black',
              border: '3px solid white',
              boxShadow: '0 4px 0 rgba(0,0,0,0.3)',
            }}
          >
            AWESOME! 🎮
          </button>
        </div>
      </DialogContent>
    </Dialog>
  );
};
