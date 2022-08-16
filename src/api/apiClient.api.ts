import axios, {AxiosInstance} from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {DEV_API, PROD_API} from '@env';

const instance: AxiosInstance = axios.create({
  baseURL: __DEV__ ? DEV_API : PROD_API,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

// MARK: - interceptor
instance.interceptors.request.use(async request => {
  const token = await AsyncStorage.getItem('@token');
  if (token && request.headers) {
    request.headers.Authorization = `Bearer ${token}`;
  }
  return request;
});

export default instance;
