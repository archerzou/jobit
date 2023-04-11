import { configureStore } from '@reduxjs/toolkit';
import { jobSearchApi } from './services/jobSearchApi';
import currentSearchReducer from '../features/currentSearchOrFilter';

export const store = configureStore({
  reducer: {
    [jobSearchApi.reducerPath]: jobSearchApi.reducer,
    currentSearch: currentSearchReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(jobSearchApi.middleware),
});
