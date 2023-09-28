import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type DashboardState = {
  searchQuery: string;
};

const initialState = { searchQuery: "" } as DashboardState

export const dashboardSlice = createSlice({
  name: "dashboard",
  initialState,
  reducers: {
    setSearchQuery: (state, action: PayloadAction<string>) => {
      state.searchQuery = action.payload;
    },
  },
});
