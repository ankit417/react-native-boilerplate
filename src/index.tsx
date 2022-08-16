import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Provider} from 'react-redux';

import {RootRoute} from './routes';
import {store} from './store';
import {AuthProvider} from './auth';

/**
 * Root level component where all the providers should be defined
 */
const Root = () => {
  return (
    <Provider store={store}>
      <AuthProvider>
        <SafeAreaProvider>
          <RootRoute />
        </SafeAreaProvider>
      </AuthProvider>
    </Provider>
  );
};

export default Root;
