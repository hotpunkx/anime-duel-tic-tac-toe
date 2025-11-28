import { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Settings } from "lucide-react";

export type AvatarStyle = 'default' | 'warrior' | 'mage' | 'ninja' | 'chibi';

interface PlayerCustomizationProps {
  player1Name: string;
  player2Name: string;
  player1Avatar: AvatarStyle;
  player2Avatar: AvatarStyle;
  onSave: (p1Name: string, p2Name: string, p1Avatar: AvatarStyle, p2Avatar: AvatarStyle) => void;
}

export const PlayerCustomization = ({ 
  player1Name, 
  player2Name,
  player1Avatar,
  player2Avatar,
  onSave 
}: PlayerCustomizationProps) => {
  const [open, setOpen] = useState(false);
  const [p1Name, setP1Name] = useState(player1Name);
  const [p2Name, setP2Name] = useState(player2Name);
  const [p1Avatar, setP1Avatar] = useState<AvatarStyle>(player1Avatar);
  const [p2Avatar, setP2Avatar] = useState<AvatarStyle>(player2Avatar);

  useEffect(() => {
    setP1Name(player1Name);
    setP2Name(player2Name);
    setP1Avatar(player1Avatar);
    setP2Avatar(player2Avatar);
  }, [player1Name, player2Name, player1Avatar, player2Avatar]);

  const avatarStyles: AvatarStyle[] = ['default', 'warrior', 'mage', 'ninja', 'chibi'];

  const handleSave = () => {
    onSave(p1Name, p2Name, p1Avatar, p2Avatar);
    setOpen(false);
  };

  const renderAvatarPreview = (style: AvatarStyle, player: 'X' | 'O') => {
    const getAvatarContent = () => {
      const color = player === 'X' ? 'hsl(var(--game-blue))' : 'hsl(var(--game-pink))';
      
      switch(style) {
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
      <div className="w-12 h-12 rounded-full border-2 border-border overflow-hidden">
        {getAvatarContent()}
      </div>
    );
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          className="rounded-full"
          style={{
            fontFamily: "'Fredoka One', cursive",
            border: '2px solid white',
            background: 'rgba(0, 0, 0, 0.7)',
            color: 'white'
          }}
        >
          <Settings className="h-5 w-5" />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle style={{ fontFamily: "'Fredoka One', cursive" }}>
            Customize Players
          </DialogTitle>
        </DialogHeader>
        <div className="space-y-6 py-4">
          {/* Player 1 */}
          <div className="space-y-3">
            <h3 className="font-semibold" style={{ color: 'hsl(var(--game-blue))' }}>
              Player 1 (X)
            </h3>
            <div className="space-y-2">
              <Label htmlFor="p1-name">Name</Label>
              <Input
                id="p1-name"
                value={p1Name}
                onChange={(e) => setP1Name(e.target.value)}
                placeholder="Enter name"
                maxLength={15}
              />
            </div>
            <div className="space-y-2">
              <Label>Avatar Style</Label>
              <div className="flex gap-2 flex-wrap">
                {avatarStyles.map((style) => (
                  <button
                    key={style}
                    onClick={() => setP1Avatar(style)}
                    className={`p-2 rounded-lg border-2 transition-all ${
                      p1Avatar === style ? 'border-primary scale-110' : 'border-border'
                    }`}
                  >
                    {renderAvatarPreview(style, 'X')}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Player 2 */}
          <div className="space-y-3">
            <h3 className="font-semibold" style={{ color: 'hsl(var(--game-pink))' }}>
              Player 2 (O)
            </h3>
            <div className="space-y-2">
              <Label htmlFor="p2-name">Name</Label>
              <Input
                id="p2-name"
                value={p2Name}
                onChange={(e) => setP2Name(e.target.value)}
                placeholder="Enter name"
                maxLength={15}
              />
            </div>
            <div className="space-y-2">
              <Label>Avatar Style</Label>
              <div className="flex gap-2 flex-wrap">
                {avatarStyles.map((style) => (
                  <button
                    key={style}
                    onClick={() => setP2Avatar(style)}
                    className={`p-2 rounded-lg border-2 transition-all ${
                      p2Avatar === style ? 'border-primary scale-110' : 'border-border'
                    }`}
                  >
                    {renderAvatarPreview(style, 'O')}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <Button
            onClick={handleSave}
            className="w-full"
            style={{
              fontFamily: "'Fredoka One', cursive",
              background: 'linear-gradient(to bottom, #4facfe 0%, #00f2fe 100%)',
              color: 'white',
              textShadow: '2px 2px 0 black',
              border: '3px solid white'
            }}
          >
            Save Changes
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};
