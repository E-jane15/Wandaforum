
import { configureStore } from '@reduxjs/toolkit'
import persistStore from 'redux-persist/es/persistStore'
import persistReducer from 'redux-persist/es/persistReducer'
import storage from 'redux-persist/lib/storage'
import selectionReducer from './selectionSlice'

const persistConfig ={
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig,selectionReducer);


export const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== "production",
  middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware({
      serializableCheck:{
        ignoreActions:["persist/PERSIST", "persist/REHYDRATE"]
      }
    })
})
  
export const persistor = persistStore(store);