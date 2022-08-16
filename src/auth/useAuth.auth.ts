import {useContext} from 'react';

import {AuthContext} from './authContext.auth';

const useAuth = () => {
  return useContext(AuthContext);
};

export {useAuth};
