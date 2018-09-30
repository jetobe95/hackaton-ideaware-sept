import { applyMiddleware, createStore } from 'redux';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web and AsyncStorage for react-native
import thunk from 'redux-thunk';
import reducers from '../reducers/index';
import { logger } from 'redux-logger'
const persistConfig = { key: 'root', storage };
const persistedReducer = persistReducer(persistConfig, reducers);
const store = createStore(
  persistedReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),

  applyMiddleware(thunk,logger)
);
const persistor = persistStore(store);

export { persistor, store };
