import { configureStore } from '@reduxjs/toolkit'
import userReducer from './user'
import storage from 'redux-persist/lib/storage'
import { combineReducers } from 'redux'
import { persistReducer } from 'redux-persist'
import thunk from 'redux-thunk'

const persistConfig = {
  key: 'user',
  storage,
}

const reducers = combineReducers({ user: userReducer })
const persistedReducer = persistReducer(persistConfig, reducers)

const store = configureStore({
  reducer: persistedReducer,
  // facilitates the management of asynchronous functions
  middleware: [thunk],
})

export default store