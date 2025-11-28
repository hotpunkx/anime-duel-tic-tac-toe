interface GameCellProps {
  value: 'X' | 'O' | '';
  onClick: () => void;
}

export const GameCell = ({ value, onClick }: GameCellProps) => {
  return (
    <div 
      className="flex items-center justify-center cursor-pointer hover:bg-white/50 transition-colors"
      onClick={onClick}
    >
      {value === 'X' && (
        <svg viewBox="0 0 100 100" className="w-3/4 h-3/4" style={{ filter: 'drop-shadow(3px 3px 0px rgba(0,0,0,0.2))' }}>
          <line x1="20" y1="20" x2="80" y2="80" stroke="hsl(var(--game-blue))" strokeWidth="15" strokeLinecap="round" />
          <line x1="80" y1="20" x2="20" y2="80" stroke="hsl(var(--game-blue))" strokeWidth="15" strokeLinecap="round" />
        </svg>
      )}
      {value === 'O' && (
        <svg viewBox="0 0 100 100" className="w-3/4 h-3/4" style={{ filter: 'drop-shadow(3px 3px 0px rgba(0,0,0,0.2))' }}>
          <circle cx="50" cy="50" r="35" stroke="hsl(var(--game-pink))" strokeWidth="15" fill="none" />
        </svg>
      )}
    </div>
  );
};
