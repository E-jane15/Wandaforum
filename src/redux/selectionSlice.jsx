import { createSlice } from "@reduxjs/toolkit";

// Define initial state
const initialState = {
  selections: {
    interviewType: '',  // Ensure interviewType is initialized
    date: '',
    time: '',
    peerType: '',
    practiceLevel: '',  // Ensure practiceLevel is initialized
    userId: '',  // Keep userId empty for now, we'll fetch this dynamically
    meetingink: '',
  },
  scheduledInterviews: [],
};

export const selectionSlice = createSlice({
  name: "system_persist",
  initialState,
  reducers: {
    // Reducer to select item and update state
    selectItem: (state, action) => {
      // Use the spread operator to update only the changed fields
      state.selections = { ...state.selections, ...action.payload };
    },

    // Reset selections if needed (for example, after an interview is scheduled)
    resetSelections: (state) => {
      state.selections = {
        interviewType: '',
        date: '',
        time: '',
        peerType: '',
        practiceLevel: '',
        userId: '',
        meetingink:'',
      };
    },

    // Add scheduled interview to the list
    addInterview: (state) => {
      // Only add if the date and time are selected
      if (state.selections.date && state.selections.time) {
        state.scheduledInterviews.push(state.selections);
      }
    },

    // Cancel interview from the scheduled list
    cancelInterview: (state, action) => {
      state.scheduledInterviews = state.scheduledInterviews.filter(
        (_, index) => index !== action.payload
      );
    },
  },
});

// Export the actions
export const { selectItem, resetSelections, addInterview, cancelInterview } = selectionSlice.actions;

export default selectionSlice.reducer;
