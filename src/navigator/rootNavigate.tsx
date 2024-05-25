import React from 'react';

import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';


import BtmNavigator from './btmNavigator'

const Stack = createStackNavigator();
const rootNavigator = () => {

    return (
        <>
            <NavigationContainer>
                <Stack.Navigator screenOptions={{
                    headerTitleAlign: 'center',
                    cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
                    gestureEnabled: true,
                    headerShown: false,
                    gestureDirection: 'horizontal',
                    // headerShown:false
                }}>
                    <Stack.Screen name='Home' component={BtmNavigator} />

                </Stack.Navigator>

            </NavigationContainer>

        </>

    );
};


export default rootNavigator;