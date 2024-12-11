import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selections: {}, //stores selections for each modal
  scheduledInterviews: [], // Stores all scheduled interviews
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

    addInterview: (state) => {
      // Add the current selections to the scheduled interviews list
      if (state.selections.date && state.selections.time) {
        state.scheduledInterviews.push(state.selections);
      }
      
    },
    cancelInterview: (state, action) => {
      state.scheduledInterviews = state.scheduledInterviews.filter(
        (_, index) => index !== action.payload
      );
    },
  },
});

// Action creators are generated for each case reducer function
export const { selectItem, resetSelections, addInterview, cancelInterview  } = selectionSlice.actions;

export default selectionSlice.reducer;
