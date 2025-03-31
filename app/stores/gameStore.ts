import { create } from 'zustand';

interface Game {
  id: string;
  title: string;
  category: string;
  thumbnail: string;
  url: string;
}

interface GameStore {
  currentGame: Game | null;
  setCurrentGame: (game: Game | null) => void;
}

export const useGameStore = create<GameStore>((set) => ({
  currentGame: null,
  setCurrentGame: (game) => set({ currentGame: game }),
})); 