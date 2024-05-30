import { create } from "zustand";

interface themeSetting {
    initTheme: string;
    toggleTheme: (state: string) => void;
}

const theme = create<themeSetting>((set) => ({
    initTheme: 'light',
    toggleTheme: (state) => set(() => ({ initTheme: state })),
}));

export default theme;