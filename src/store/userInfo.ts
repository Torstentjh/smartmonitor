import { create } from "zustand";

interface Member {
    UserID: string;
}
interface user {
    menber: boolean;
    setmenber: () => void;
    infos: any;
    setInfo: (newInfo: any) => void;
    setHome: () => void;
    isInHome: boolean;
    // GetMenbers: () => ;
    menbers: Member[];
    setmenbers: (newMenbers: []) => void;
    isLogin: boolean;
    setIsLogin: () => void;
    avatarUrl: string;
    addAvatar: (newAvatar: string) => void;
    isChose: boolean;
    nickName: string;
    admin: string;
    pwd: string;
    VerseChose: () => void;
    setAdmin: (newAdmin: string) => void;
    setPwd: (newPwd: string) => void;
}
const Userinfo = create<user>((set) => ({
    menber: false,
    setmenber: () => set((state) => ({ menber: !state.menber })),
    infos: null,
    setInfo: (newInfo: any) => set({ infos: newInfo }),
    setHome: () => set((state) => ({ isInHome: !state.isInHome })),
    isInHome: false,
    // GetMenbers: async () => { GetMenbers },
    setmenbers: (newMenbers) => set({ menbers: newMenbers }),
    menbers: [],
    isLogin: false,
    setIsLogin: () => set((state) => ({ isLogin: !state.isLogin })),
    avatarUrl: 'file:///data/user/0/com.rndemo/cache/rn_image_picker_lib_temp_b9ea2e00-ffe1-4ca8-b48d-361f5696f513.png',
    addAvatar: (newAvatar) => set({ avatarUrl: newAvatar }),
    nickName: '',
    admin: '',
    pwd: '',
    isChose: false,
    VerseChose: () => set((state) => ({ isChose: !state.isChose })),
    setAdmin: (newAdmin) => set({ admin: newAdmin }),
    setPwd: (newPwd) => set({ pwd: newPwd }),
}));

export default Userinfo;