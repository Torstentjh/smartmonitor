// import { createContext, useContext, useEffect, useMemo, useRef } from 'react';
// import tw, { create, useDeviceContext, } from 'twrnc';
// import { useWindowDimensions } from 'react-native';
// import type { ReactNode } from 'react';
// import type { TwConfig, TailwindFn } from 'twrnc';

// const TailwindContext = createContext<{
//     instance: TailwindFn | null;
//     key: string | null;
// }>({
//     instance: null,
//     key: null,
// });
// const AppContextProvider = ({ children }: { children: React.ReactNode }) => {
//     const buster = useDeviceContext(tw, { withDeviceColorScheme: false });
//     const [colorScheme, toggleColorScheme, setColorScheme] =
//         useAppColorScheme(tw);

//     const contexts = { colorScheme, toggleColorScheme, setColorScheme, buster };

//     return <TailwindContext.Provider value={contexts}>{children}</TailwindContext.Provider>;
// };