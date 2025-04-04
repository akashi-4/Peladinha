import { useState } from "react";
import { Player } from "../types/playerType";

interface PlayerSelectorProps {
  players: Player[];
  team: 'A' | 'B';
  onPlayerSelect: (player: Player | null, position: number) => void;
  selectedPlayers: (Player | null)[];
  otherTeamPlayers: (Player | null)[];
}

export default function PlayerSelector({ players, team, onPlayerSelect, selectedPlayers, otherTeamPlayers }: PlayerSelectorProps) {
  const [showDropdown, setShowDropdown] = useState<number | null>(null);

  return (
    <div className="mb-6">
      <h3 className="text-xl font-bold text-blue-400 mb-4">Team {team}</h3>
      <div className="grid grid-rows-5 gap-4">
        {[0, 1, 2, 3, 4].map((position) => (
          <div key={position} className="relative">
            <div
              onClick={() => setShowDropdown(position)}
              className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg text-white hover:border-blue-500 flex justify-between items-center cursor-pointer"
            >
              <span>{selectedPlayers[position]?.name || `Player ${position + 1}`}</span>
              {selectedPlayers[position] && (
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    onPlayerSelect(null, position);
                  }}
                  className="text-gray-400 hover:text-red-500 px-2"
                >
                  ✕
                </button>
              )}
            </div>
            {showDropdown === position && (
              <div className="absolute z-10 w-full mt-1 bg-gray-800 border border-gray-700 rounded-lg max-h-48 overflow-y-auto">
                {players
                  .filter(p => 
                    !selectedPlayers.includes(p) && 
                    !otherTeamPlayers.includes(p)
                  )
                  .map(player => (
                    <button
                      key={player.name}
                      onClick={() => {
                        onPlayerSelect(player, position);
                        setShowDropdown(null);
                      }}
                      className="w-full p-2 text-left hover:bg-gray-700 text-white"
                    >
                      {player.name.split(' ')[0]}
                    </button>
                  ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
