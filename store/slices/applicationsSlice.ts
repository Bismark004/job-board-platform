import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import api from '@/services/api';

interface Application {
    id: string;
    jobTitle: string;
    company: string;
    status: string;
    dateApplied: string;
  }
  
  interface ApplicationsState {
    applications: Application[];
    loading: boolean;
    error: string | null;
  }
  
  const initialState: ApplicationsState = {
    applications: [],
    loading: false,
    error: null,
  };

  export const fetchApplications = createAsyncThunk('applications/fetchApplications', async() => {
    const response = await api.get('/applications/');
    return response.data;
  });

  const applicationsSlice = createSlice({
    name: 'applications',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(fetchApplications.pending, (state) => {
          state.loading = true;
          state.error = null;
        })
        .addCase(fetchApplications.fulfilled, (state, action) => {
          state.applications = action.payload;
          state.loading = false;
        })
        .addCase(fetchApplications.rejected, (state, action) => {
          state.error = action.error.message || 'Failed to fetch applications';
          state.loading = false;
        });
    },
  });
  
  export default applicationsSlice.reducer;

  