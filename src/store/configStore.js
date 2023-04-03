import {persistStore, persistReducer} from 'redux-persist';
import {createStore, combineReducers, applyMiddleware} from 'redux';
import AsyncStorage from '@react-native-async-storage/async-storage';

import albumsReducer from 'store/reducers/albumsReducer';

const rootReducer = combineReducers({
  album: albumsReducer,
});

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['album'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const middlewares = [];

const store = createStore(persistedReducer, applyMiddleware(...middlewares));
const persistor = persistStore(store);

export {store, persistor};
