import { GameCell } from "./GameCell";

interface GameGridProps {
  board: ('X' | 'O' | '')[];
  onCellClick: (index: number) => void;
}

export const GameGrid = ({ board, onCellClick }: GameGridProps) => {
  return (
    <div 
      className="relative w-[450px] h-[400px] flex items-center justify-center shadow-2xl"
      style={{
        background: 'hsl(var(--game-scroll))',
        backgroundImage: 'radial-gradient(#ffb7b2 20%, transparent 20%), radial-gradient(#ffb7b2 20%, transparent 20%)',
        backgroundPosition: '0 0, 50px 50px',
        backgroundSize: '100px 100px'
      }}
    >
      {/* Scroll Rollers */}
      <div 
        className="absolute -left-4 top-0 bottom-0 w-8 rounded-full"
        style={{
          background: 'linear-gradient(to right, #d87093, hsl(var(--game-pink)), #d87093)',
          border: '2px solid hsl(var(--game-brown))',
          boxShadow: '5px 0 10px rgba(0,0,0,0.4)'
        }}
      />
      <div 
        className="absolute -right-4 top-0 bottom-0 w-8 rounded-full"
        style={{
          background: 'linear-gradient(to right, #d87093, hsl(var(--game-pink)), #d87093)',
          border: '2px solid hsl(var(--game-brown))',
          boxShadow: '5px 0 10px rgba(0,0,0,0.4)'
        }}
      />

      <div className="relative grid grid-cols-3 grid-rows-3 w-4/5 h-4/5">
        {board.map((cell, index) => (
          <GameCell 
            key={index}
            value={cell}
            onClick={() => onCellClick(index)}
          />
        ))}
        
        {/* Grid Lines */}
        <svg className="absolute inset-0 pointer-events-none" viewBox="0 0 100 100" preserveAspectRatio="none">
          {/* Vertical Lines */}
          <line x1="33.33" y1="10" x2="33.33" y2="90" stroke="hsl(var(--game-brown))" strokeWidth="1.5" />
          <line x1="66.66" y1="10" x2="66.66" y2="90" stroke="hsl(var(--game-brown))" strokeWidth="1.5" />
          {/* Horizontal Lines */}
          <line x1="10" y1="33.33" x2="90" y2="33.33" stroke="hsl(var(--game-brown))" strokeWidth="1.5" />
          <line x1="10" y1="66.66" x2="90" y2="66.66" stroke="hsl(var(--game-brown))" strokeWidth="1.5" />
        </svg>
      </div>
    </div>
  );
};
