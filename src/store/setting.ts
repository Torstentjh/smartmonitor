import { create } from "zustand";

interface themeSetting {
    initTabBarColor: string;
    toggleTheme: (state: string) => void;
    displayMenu: boolean;
    toggleMenu: () => void;

}

const theme = create<themeSetting>((set) => ({
    initTabBarColor: 'light',
    displayMenu: false,
    toggleMenu: () => set((state) => ({ displayMenu: !state.displayMenu })),
    toggleTheme: (state) => set(() => ({ initTabBarColor: state })),
}));

export default theme;