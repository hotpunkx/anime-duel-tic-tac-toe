import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Scoreboard } from "./Scoreboard";
import { GameGrid } from "./GameGrid";
import animeBackground from "@/assets/anime-background.jpg";

type Player = 'X' | 'O';
type Board = (Player | '')[];

export const GameBoard = () => {
  const [board, setBoard] = useState<Board>(Array(9).fill(''));
  const [currentPlayer, setCurrentPlayer] = useState<Player>('X');
  const [gameActive, setGameActive] = useState(true);
  const [scores, setScores] = useState({ X: 0, O: 0 });

  const winningConditions = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // Cols
    [0, 4, 8], [2, 4, 6]             // Diagonals
  ];

  const checkWinner = (newBoard: Board): Player | 'draw' | null => {
    for (const [a, b, c] of winningConditions) {
      if (newBoard[a] && newBoard[a] === newBoard[b] && newBoard[a] === newBoard[c]) {
        return newBoard[a] as Player;
      }
    }
    if (!newBoard.includes('')) return 'draw';
    return null;
  };

  const handleCellClick = (index: number) => {
    if (board[index] !== '' || !gameActive) return;

    const newBoard = [...board];
    newBoard[index] = currentPlayer;
    setBoard(newBoard);

    const result = checkWinner(newBoard);
    
    if (result && result !== 'draw') {
      setScores(prev => ({ ...prev, [result]: prev[result] + 1 }));
      setGameActive(false);
      setTimeout(() => alert(`Player ${result} Wins! 🎉`), 100);
    } else if (result === 'draw') {
      setGameActive(false);
      setTimeout(() => alert('Draw! 🤝'), 100);
    } else {
      setCurrentPlayer(currentPlayer === 'X' ? 'O' : 'X');
    }
  };

  const resetGame = () => {
    setBoard(Array(9).fill(''));
    setGameActive(true);
    setCurrentPlayer('X');
  };

  return (
    <div 
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{
        backgroundImage: `url(${animeBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <div className="absolute inset-0 bg-white/20 backdrop-blur-sm" />
      
      {/* Japanese decoration text */}
      <div className="absolute bottom-20 left-12 text-8xl font-bold pointer-events-none animate-pulse" style={{ 
        color: 'hsl(var(--game-yellow))',
        WebkitTextStroke: '3px black',
        transform: 'rotate(-15deg)',
        textShadow: '4px 4px 0 black'
      }}>
        ド
      </div>
      <div className="absolute bottom-20 right-12 text-8xl font-bold pointer-events-none animate-pulse" style={{
        color: 'hsl(var(--game-yellow))',
        WebkitTextStroke: '3px black',
        transform: 'rotate(15deg)',
        textShadow: '4px 4px 0 black'
      }}>
        ン!
      </div>

      <div className="relative z-10 flex flex-col items-center w-full max-w-3xl px-4">
        <h1 
          className="text-6xl font-bold mb-8 tracking-wider animate-bounce"
          style={{
            fontFamily: "'Fredoka One', cursive",
            color: 'white',
            textShadow: `-3px -3px 0 hsl(var(--game-pink)), 3px -3px 0 hsl(var(--game-pink)), -3px 3px 0 hsl(var(--game-pink)), 3px 3px 0 hsl(var(--game-pink)), 5px 5px 0 black`
          }}
        >
          ANIME TIC-TAC-TOE!
        </h1>

        <Scoreboard 
          scores={scores}
          currentPlayer={currentPlayer}
        />

        <GameGrid 
          board={board}
          onCellClick={handleCellClick}
        />

        <div className="flex gap-6 mt-8">
          <Button
            onClick={resetGame}
            className="text-2xl py-6 px-10 rounded-2xl font-bold uppercase shadow-lg transition-transform active:translate-y-1"
            style={{
              fontFamily: "'Fredoka One', cursive",
              background: 'linear-gradient(to bottom, #4facfe 0%, #00f2fe 100%)',
              color: 'white',
              textShadow: '2px 2px 0 black',
              border: '3px solid white'
            }}
          >
            NEW GAME
          </Button>
          <Button
            onClick={() => alert('Thanks for playing! 👋')}
            className="text-2xl py-6 px-10 rounded-2xl font-bold uppercase shadow-lg transition-transform active:translate-y-1"
            style={{
              fontFamily: "'Fredoka One', cursive",
              background: 'linear-gradient(to bottom, #ff9a9e 0%, #fecfef 100%)',
              color: 'white',
              textShadow: '2px 2px 0 #d63384',
              border: '3px solid white'
            }}
          >
            EXIT
          </Button>
        </div>
      </div>
    </div>
  );
};
