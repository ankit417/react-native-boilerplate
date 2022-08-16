import React, {
  PropsWithChildren,
  useState,
  useCallback,
  useEffect,
} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {AuthContext} from './authContext.auth';

interface AuthProviderProps extends PropsWithChildren {}

const AuthProvider = ({children}: AuthProviderProps) => {
  const [isLoggedIn, setLoggedIn] = useState(false);

  const logIn = useCallback(() => {
    setLoggedIn(true);
  }, []);

  const logOut = useCallback(async () => {
    try {
      await AsyncStorage.removeItem('@token');
      setLoggedIn(false);
    } catch (e) {
      console.error('Error logging out');
    }
  }, []);

  useEffect(() => {
    (async () => {
      try {
        const token = await AsyncStorage.getItem('@token');
        if (token) {
          logIn();
        }
      } catch (e) {
        console.error(e);
      }
    })();
  }, [logIn]);

  return (
    <AuthContext.Provider value={{isLoggedIn, logIn, logOut}}>
      {children}
    </AuthContext.Provider>
  );
};

export {AuthProvider};
