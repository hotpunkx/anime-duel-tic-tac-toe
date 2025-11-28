interface PlayerAvatarProps {
  player: 'X' | 'O';
  isLeft: boolean;
}

export const PlayerAvatar = ({ player, isLeft }: PlayerAvatarProps) => {
  return (
    <div 
      className="absolute w-14 h-14 rounded-full flex items-center justify-center overflow-hidden"
      style={{
        [isLeft ? 'left' : 'right']: '-20px',
        top: '-8px',
        border: `3px solid ${player === 'X' ? 'hsl(var(--game-blue))' : 'hsl(var(--game-pink))'}`,
        background: player === 'X' ? '#e3f2fd' : '#fce4ec'
      }}
    >
      {player === 'X' ? (
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <circle cx="50" cy="50" r="45" fill="hsl(var(--game-blue))"/>
          <path d="M20,50 Q50,80 80,50" fill="none" stroke="white" strokeWidth="5"/>
          <circle cx="35" cy="40" r="5" fill="white"/>
          <circle cx="65" cy="40" r="5" fill="white"/>
          <path d="M15,45 L85,45 L85,30 L15,30 Z" fill="#1a3b9e"/> 
        </svg>
      ) : (
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <circle cx="50" cy="50" r="45" fill="hsl(var(--game-pink))"/>
          <circle cx="30" cy="45" r="6" fill="white"/>
          <circle cx="70" cy="45" r="6" fill="white"/>
          <path d="M40,65 Q50,75 60,65" fill="none" stroke="white" strokeWidth="3"/>
          <path d="M10,30 Q50,10 90,30" fill="none" stroke="#ffb6c1" strokeWidth="10"/>
        </svg>
      )}
    </div>
  );
};
