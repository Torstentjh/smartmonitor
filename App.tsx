import React, { useContext, useEffect, useState } from 'react';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import AsyncStorage from '@react-native-async-storage/async-storage';
import RootNavigator from './src/navigator/rootNavigate';
import AppContextProvider from './src/global/ContextProvider';
import Provider from '@ant-design/react-native/lib/provider';

function App(): JSX.Element {
  useEffect(() => {
    const checkFirstLoad = async () => {
      try {
        const value = await AsyncStorage.getItem('FirstLoad');
        if (value == null) {
          const jsonValue = JSON.stringify(true);
          await AsyncStorage.setItem('FirstLoad', jsonValue);
          setfirstLoad(JSON.parse(jsonValue))
        } else {
          const show = JSON.parse(value) === true ? true : false;
          setfirstLoad(show)
        }
      } catch (e) {
        // error reading value
      }
    }
    checkFirstLoad();
  }, [])
  const [firstLoad, setfirstLoad] = useState(false);

  // const ss = getData()
  // const firstLoad =  ss === true ? true : false;
  //用存储库，默认为false，第一次加载点击后，设置为true并存储，第二次取这个值然后传给导航器
  return (
    <AppContextProvider>
      <SafeAreaProvider >
        <Provider>
          <RootNavigator firstLoad={firstLoad} />
        </Provider>
      </SafeAreaProvider>
    </AppContextProvider>

  );
}


export default App;
