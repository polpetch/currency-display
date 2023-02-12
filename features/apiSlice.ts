import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface symbolState {
  value: any;
}

const initialState: symbolState = {
  value: [],
};

export const apiSlice = createSlice({
  name: 'api',
  initialState,
  reducers: {
    fetchSymbol: (state, action: PayloadAction<[]>) => {
      state.value.push(action.payload);
    },
  },
});

export const { fetchSymbol } = apiSlice.actions;

export default apiSlice.reducer;
