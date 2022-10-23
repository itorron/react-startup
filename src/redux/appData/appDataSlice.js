import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import moment from 'moment';

import API from '../../services/API';
import { isValidCache } from '../../utils/cacheUtils';

const initialState = {
  appData: undefined, // array
  appDataError: undefined, // array
  isLoading: false, // boolean
  cacheDate: null, // date
};

/**
 * THUNKS
 */
export const loadAppData = createAsyncThunk('appData/loadAppData', async (data, thunkAPI) => {
  const { cacheDate, appData } = thunkAPI.getState().appData;
  if (!isValidCache(cacheDate)) {
    const response = await API.appData();
    if (response !== undefined) {
      return { appData: response, cacheDate: moment().toISOString() };
    }
  }
  return { appData, cacheDate };
});

/**
 * SLICER
 */
export const appDataSlice = createSlice({
  name: 'appData',
  initialState,
  reducers: {
    appDataResetCache: state => {
      state.cacheDate = initialState.cacheDate;
    },
  },
  extraReducers: builder => {
    // LOAD APP DATA
    builder.addCase(loadAppData.pending, (state, { meta, error }) => {
      state.isLoading = true;
    });
    builder.addCase(loadAppData.rejected, (state, { meta, error }) => {
      state.appDataError = error;
      state.isLoading = false;
    });
    builder.addCase(loadAppData.fulfilled, (state, action) => {
      if (action.payload) {
        state.appData = action.payload.appData;
        state.cacheDate = action.payload.cacheDate;
        state.isLoading = true;
      }
      state.isLoading = false;
    });
  },
});

// Action creators are generated for each case reducer function
export const { appDataResetCache } = appDataSlice.actions;
export default appDataSlice.reducer;
