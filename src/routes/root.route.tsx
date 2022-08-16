import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {NavigationContainer} from '@react-navigation/native';

import {AuthRoute} from './auth.route';

const RootRoute = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <AuthRoute />
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export {RootRoute};
