import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selections: {}, //stores selections for each modal
};

export const selectionSlice = createSlice({
  name: "system_persist",
  initialState,
  reducers: {
    selectItem: (state, action) => {
      //tracks each item in modal
      
      return { ...state, selections:action.payload };
    },

    resetSelections: (state) => {
      state.selections = {}; //Reset all selections
    },
  },
});

// Action creators are generated for each case reducer function
export const { selectItem, resetSelections } = selectionSlice.actions;

export default selectionSlice.reducer;
