import { PlayerAvatar } from "./PlayerAvatar";

interface ScoreboardProps {
  scores: { X: number; O: number };
  currentPlayer: 'X' | 'O';
}

export const Scoreboard = ({ scores, currentPlayer }: ScoreboardProps) => {
  return (
    <div className="flex gap-10 mb-8">
      <div 
        className={`relative flex items-center justify-between min-w-[180px] px-8 py-2 rounded-full transition-all duration-300 ${
          currentPlayer === 'X' ? 'scale-110 shadow-2xl' : ''
        }`}
        style={{
          fontFamily: "'Fredoka One', cursive",
          background: 'rgba(0, 0, 0, 0.7)',
          border: `3px solid hsl(var(--game-blue))`,
          color: 'white',
          fontSize: '2rem',
          boxShadow: currentPlayer === 'X' ? '0 0 30px hsl(var(--game-yellow))' : '4px 4px 0 rgba(0,0,0,0.3)'
        }}
      >
        <PlayerAvatar player="X" isLeft />
        <span className="ml-6">P1</span>
        <span className="ml-4">{scores.X}</span>
      </div>

      <div 
        className={`relative flex items-center justify-between min-w-[180px] px-8 py-2 rounded-full transition-all duration-300 ${
          currentPlayer === 'O' ? 'scale-110 shadow-2xl' : ''
        }`}
        style={{
          fontFamily: "'Fredoka One', cursive",
          background: 'rgba(0, 0, 0, 0.7)',
          border: `3px solid hsl(var(--game-pink))`,
          color: 'white',
          fontSize: '2rem',
          boxShadow: currentPlayer === 'O' ? '0 0 30px hsl(var(--game-yellow))' : '4px 4px 0 rgba(0,0,0,0.3)'
        }}
      >
        <span className="mr-4">{scores.O}</span>
        <span className="mr-6">P2</span>
        <PlayerAvatar player="O" isLeft={false} />
      </div>
    </div>
  );
};
