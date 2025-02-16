import axios from "axios";

const API_BASE_URL = "http://localhost:3000/schedules";

// Function to schedule an interview
export const scheduleInterview = async (interviewData, dispatch) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/save`, interviewData);
    if (response.data.meetingLink) {
      dispatch(addInterview({ ...interviewData, meetingLink: response.data.meetingLink }));
    }
    return response.data;
  } catch (error) {
    console.error("Error scheduling interview:", error.response?.data || error.message);
    return null;
  }
};

// Function to fetch all interviews
export const fetchAllInterviews = async (userId) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/users/${userId}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching interviews:", error.response?.data || error.message);
  }
};

// Function to cancel an interview
export const cancelInterview = async (scheduleId) => {
  try {
    const response = await axios.delete(`${API_BASE_URL}/${scheduleId}`);
    return response.data;
  } catch (error) {
    console.error("Error canceling interview:", error.response?.data || error.message);
    throw error;
  }
};

