import { create } from "zustand";

interface themeSetting {
    initTheme: string;
    toggleTheme: (state: string) => void;
    displayMenu: boolean;
    toggleMenu: () => void;

}

const theme = create<themeSetting>((set) => ({
    initTheme: 'light',
    displayMenu: false,
    toggleMenu: () => set((state) => ({ displayMenu: !state.displayMenu })),
    toggleTheme: (state) => set(() => ({ initTheme: state })),
}));

export default theme;