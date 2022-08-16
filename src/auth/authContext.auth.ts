import {createContext} from 'react';

type AuthContextType = {
  isLoggedIn: boolean;
  logIn: () => void;
  logOut: () => void;
};

const AuthContext = createContext<AuthContextType>({
  isLoggedIn: false,
  logIn: () => false,
  logOut: () => false,
});

export {AuthContext};
