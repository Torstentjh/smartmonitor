import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../navigator/rootNavigate';

type NavigationProp = StackNavigationProp<RootStackParamList>;

function useNavigationHook() {
    const navigation = useNavigation<NavigationProp>();

    return navigation;
}

export default useNavigationHook;