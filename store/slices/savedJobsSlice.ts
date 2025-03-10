import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Job {
  id: number;
  title: string;
  company: string;
  location: string;
  salary: string;
  type: string;
}

interface SavedJobsState {
  jobs: Job[];
}

const initialState: SavedJobsState = {
  jobs: [],
};

const savedJobsSlice = createSlice({
  name: 'savedJobs',
  initialState,
  reducers: {
    saveJob: (state, action: PayloadAction<Job>) => {
      if (!state.jobs.some(job => job.id === action.payload.id)) {
        state.jobs.push(action.payload);
      }
    },
    unsaveJob: (state, action: PayloadAction<number>) => {
      state.jobs = state.jobs.filter(job => job.id !== action.payload);
    },
  },
});

export const { saveJob, unsaveJob } = savedJobsSlice.actions;
export default savedJobsSlice.reducer;
