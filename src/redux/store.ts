import {combineReducers, configureStore} from '@reduxjs/toolkit';
import { questsApi } from './quests-api';

import type { PreloadedState } from '@reduxjs/toolkit';

const rootReducer = combineReducers({
  [questsApi.reducerPath]: questsApi.reducer,

});

export const setupStore = (preloadedState?: PreloadedState<RootState>) => configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false,
  }).concat(questsApi.middleware),
  preloadedState,
});

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
