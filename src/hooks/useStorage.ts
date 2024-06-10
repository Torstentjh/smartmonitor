import AsyncStorage from "@react-native-async-storage/async-storage";

function UseStorage() {
    const setStorage = async (key: string) => {
        try {
            const value = await AsyncStorage.getItem(key);
            if (value == null) {
                const jsonValue = JSON.stringify(true);
                await AsyncStorage.setItem(key, jsonValue);
                //   setfirstLoad(JSON.parse(jsonValue))
            } else {
                const show = JSON.parse(value) === true ? true : false;
                //   setfirstLoad(show)
            }
        } catch (e) {
            // error reading value
        }
    }
    const getStorage = async (key: string) => {
        try {
            const value = await AsyncStorage.getItem(key);
            if (value !== null) {
                // value previously stored
                // await AsyncStorage.setItem('FirstLoad', true);
                const jsonValue = JSON.stringify(false);
                await AsyncStorage.setItem(key, jsonValue);
            }
        } catch (e) {
            // error reading value
        }
    }

}