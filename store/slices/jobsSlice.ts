
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import api from '@/services/api';

interface Job {
  id: string;
  title: string;
  company: string;
  location: string;
  salary: number;
}

interface JobsState {
  jobs: Job[];
  loading: boolean;
  error: string | null;
}

const initialState: JobsState = {
  jobs: [],
  loading: false,
  error: null,
};

// Fetch jobs from the backend
export const fetchJobs = createAsyncThunk('jobs/fetchJobs', async () => {
  const response = await api.get('/jobs/');
  return response.data;
});

const jobsSlice = createSlice({
  name: 'jobs',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchJobs.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchJobs.fulfilled, (state, action) => {
        state.jobs = action.payload;
        state.loading = false;
      })
      .addCase(fetchJobs.rejected, (state, action) => {
        state.error = action.error.message || 'Failed to fetch jobs';
        state.loading = false;
      });
  },
});

export default jobsSlice.reducer;