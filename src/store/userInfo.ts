import { create } from "zustand";

interface user {
    menber: boolean;
    setmenber: () => void;
    infos: any;
    setInfo: (newInfo: any) => void;
    isLogin: boolean;
    setIsLogin: (state: boolean) => void;
    avatarUrl: string;
    addAvatar: (newAvatar: string) => void;
}
const Userinfo = create<user>((set) => ({
    menber: false,
    setmenber: () => set((state) => ({ menber: !state.menber })),
    infos: null,
    setInfo: (newInfo: any) => set({ infos: newInfo }),
    isLogin: false,
    setIsLogin: (state) => set(() => ({ isLogin: state })),
    avatarUrl: '../../assets/global/avatar.png',
    addAvatar: (newAvatar) => set({ avatarUrl: newAvatar }),
}));

export default Userinfo;