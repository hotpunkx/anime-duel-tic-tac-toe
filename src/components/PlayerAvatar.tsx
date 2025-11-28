export type AvatarStyle = 'default' | 'warrior' | 'mage' | 'ninja' | 'chibi';

interface PlayerAvatarProps {
  player: 'X' | 'O';
  isLeft: boolean;
  avatarStyle?: AvatarStyle;
}

export const PlayerAvatar = ({ player, isLeft, avatarStyle = 'default' }: PlayerAvatarProps) => {
  const color = player === 'X' ? 'hsl(var(--game-blue))' : 'hsl(var(--game-pink))';
  
  const getAvatarContent = () => {
    switch(avatarStyle) {
      case 'warrior':
        return (
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <circle cx="50" cy="50" r="45" fill={color}/>
            <rect x="20" y="35" width="60" height="15" fill="white" rx="3"/>
            <circle cx="35" cy="42" r="4" fill={color}/>
            <circle cx="65" cy="42" r="4" fill={color}/>
            <path d="M35,65 L50,70 L65,65" fill="none" stroke="white" strokeWidth="4" strokeLinecap="round"/>
            <path d="M25,20 L50,15 L75,20 L70,35 L30,35 Z" fill={player === 'X' ? '#1a3b9e' : '#c91659'}/>
          </svg>
        );
      case 'mage':
        return (
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <circle cx="50" cy="50" r="45" fill={color}/>
            <circle cx="30" cy="45" r="8" fill="white"/>
            <circle cx="70" cy="45" r="8" fill="white"/>
            <circle cx="30" cy="45" r="4" fill={color}/>
            <circle cx="70" cy="45" r="4" fill={color}/>
            <path d="M40,65 Q50,70 60,65" fill="none" stroke="white" strokeWidth="3"/>
            <path d="M30,15 L50,5 L70,15 L60,30 L40,30 Z" fill="#9333ea" stroke="white" strokeWidth="2"/>
            <circle cx="50" cy="20" r="3" fill="#fbbf24"/>
          </svg>
        );
      case 'ninja':
        return (
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <circle cx="50" cy="50" r="45" fill={color}/>
            <rect x="20" y="40" width="60" height="20" fill="#1f2937" rx="2"/>
            <line x1="30" y1="50" x2="40" y2="50" stroke="white" strokeWidth="3"/>
            <line x1="60" y1="50" x2="70" y2="50" stroke="white" strokeWidth="3"/>
            <path d="M15,30 L50,25 L85,30" fill="none" stroke="#1f2937" strokeWidth="8"/>
          </svg>
        );
      case 'chibi':
        return (
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <circle cx="50" cy="50" r="45" fill={color}/>
            <circle cx="32" cy="45" r="10" fill="white"/>
            <circle cx="68" cy="45" r="10" fill="white"/>
            <circle cx="32" cy="45" r="6" fill="black"/>
            <circle cx="68" cy="45" r="6" fill="black"/>
            <ellipse cx="50" cy="70" rx="8" ry="4" fill="#ff6b9d"/>
            <path d="M35,63 Q50,68 65,63" fill="none" stroke="white" strokeWidth="2"/>
          </svg>
        );
      default:
        return player === 'X' ? (
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <circle cx="50" cy="50" r="45" fill={color}/>
            <path d="M20,50 Q50,80 80,50" fill="none" stroke="white" strokeWidth="5"/>
            <circle cx="35" cy="40" r="5" fill="white"/>
            <circle cx="65" cy="40" r="5" fill="white"/>
            <path d="M15,45 L85,45 L85,30 L15,30 Z" fill="#1a3b9e"/> 
          </svg>
        ) : (
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <circle cx="50" cy="50" r="45" fill={color}/>
            <circle cx="30" cy="45" r="6" fill="white"/>
            <circle cx="70" cy="45" r="6" fill="white"/>
            <path d="M40,65 Q50,75 60,65" fill="none" stroke="white" strokeWidth="3"/>
            <path d="M10,30 Q50,10 90,30" fill="none" stroke="#ffb6c1" strokeWidth="10"/>
          </svg>
        );
    }
  };

  return (
    <div 
      className="absolute w-14 h-14 rounded-full flex items-center justify-center overflow-hidden"
      style={{
        [isLeft ? 'left' : 'right']: '-20px',
        top: '-8px',
        border: `3px solid ${color}`,
        background: player === 'X' ? '#e3f2fd' : '#fce4ec'
      }}
    >
      {getAvatarContent()}
    </div>
  );
};
