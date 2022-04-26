import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { questsApi } from './quests-api';

const rootReducer = combineReducers({
  [questsApi.reducerPath]: questsApi.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(questsApi.middleware)});

