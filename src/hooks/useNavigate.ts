import { NavigationProp, useNavigation, useNavigationState } from '@react-navigation/native';
import { useCallback, useMemo } from 'react';
import Userinfo from "../store/userInfo";

let userInfoRef = false;

export const useNavFilter = () => {
    const { isLogin } = Userinfo();

    isLogin ? userInfoRef = true : userInfoRef = false;

    //获取当前路由栈信息
    const routes = useNavigationState(state => (
        state?.routes
    ));
    // 获取导航对象
    const navigation = useNavigation<NavigationProp<any>>();

    // 获取当前活动路由名
    const activeName = useMemo(() => {
        const currentName = routes ? routes[routes.length - 1].name : 'Home';
        return currentName;
    }, [routes]);

    // 定义跳转函数，根据当前路由名决定是否跳转
    const navigate = useCallback(({ path, params }: { path: string; params?: Record<string, any> }) => {
        if (activeName !== 'Login') {
            // 未登录，跳转至登录页面
            if (!userInfoRef) {
                navigation.navigate('Login');
            } else {
                // 已登录，放行
                navigation.navigate(path, params);
            }
        } else {
            // 底下这里改密码和注册是登陆页进行跳转的，但是它先判断了已经为login，所以写到
            // 随便带个参数再判断跳转注册还是修改密码
            //
            if (params && params.toChangePwd) {
                navigation.navigate(path, params);
            } else if (params && params.toRegister) {
                navigation.navigate(path, params);
            }
        }

    }, [activeName]);


    return { navigate, navigation };
};
