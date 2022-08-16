import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {useAuth} from '@src/auth';
import {ScreenWrapper} from '@src/commons';
import {Login} from '@src/screens/login';

import {DrawerRoute} from './drawer.route';

const AuthStack = createNativeStackNavigator();
const AuthRoute = () => {
  const {isLoggedIn} = useAuth();
  return (
    <AuthStack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      {!isLoggedIn ? (
        <AuthStack.Screen name="AuthLogin">
          {props => (
            <ScreenWrapper>
              <Login {...props} />
            </ScreenWrapper>
          )}
        </AuthStack.Screen>
      ) : (
        <AuthStack.Screen name="AuthDrawer" component={DrawerRoute} />
      )}
    </AuthStack.Navigator>
  );
};

export {AuthRoute};
