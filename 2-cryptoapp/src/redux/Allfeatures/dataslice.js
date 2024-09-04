import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  apidata: null,
  isLoading: false,
  error: false,
};

const dataslice = createSlice({
  name: "dataslice",
  initialState,
  reducers: {},
});

export default dataslice.reducer;
export const {} = dataslice.actions;
