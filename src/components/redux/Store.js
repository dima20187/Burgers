import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import counterReducer from './CouterSlice'


 const rootReducer = combineReducers({
    b: counterReducer,
    user: counterReducer,
  });

const persistConfig = {
    key: 'root',
    storage,
  }

  const persistedReducer = persistReducer(persistConfig,rootReducer );
//   const store = configureStore({
//     reducer:{
//         b: counterReducer,
//         user: counterReducer
//     },
// })


 const store = configureStore({
    reducer:persistedReducer
})
export const persister = persistStore(store);
export default store;