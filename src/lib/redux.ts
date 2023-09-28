import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { dashboardSlice } from '../features/dashboard/common/dashboardSlice';
import { proposalsSlice } from '../features/proposals/common/proposalsSlice';

export const store = configureStore({
  reducer: combineReducers({
    dashboard: dashboardSlice.reducer,
    proposals: proposalsSlice.reducer
  })
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
