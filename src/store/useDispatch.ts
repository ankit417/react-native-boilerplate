import {useDispatch as useReduxDispatch, useSelector} from 'react-redux';

import {store} from './reducers.store';

type AppDispatch = typeof store.dispatch;
type RootState = ReturnType<typeof store.getState>;

const useDispatch = () => useReduxDispatch<AppDispatch>();

export {useDispatch, useSelector};
export type {RootState, AppDispatch};
