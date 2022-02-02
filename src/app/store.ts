import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import converterReducer from '../features/converter/converterSlice';

export const store = configureStore({
  reducer: {
    counter: converterReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
