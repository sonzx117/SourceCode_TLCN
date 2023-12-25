import React from 'react';
import billApi from '../../../api/billApi';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const billData = createAsyncThunk('bills', async () => {
  const bill = await billApi.getAll();
  return bill;
});

const Bills = createSlice({
  name: 'bills',
  initialState: {
    bill: [],
    loading: true,
    error: '',
  },
  reducers: {
    addhoadon: (state, action) => {
      billApi.postbill(action.payload);
    },
    removehoadon: (state, action) => {
      billApi.deletebill(action.payload);
    },
    updatehoadon: (state, action) => {
      billApi.editbill(action.payload);
    },
  },
  extraReducers: {
    [billData.pending]: (state) => {
      state.loading = true;
    },
    [billData.rejected]: (state, action) => {
      state.loading = true;
      state.error = action.error;
    },
    [billData.fulfilled]: (state, action) => {
      state.loading = false;
      state.hoadon = action.payload;
    },
  },
});
const { reducer, actions } = Bills;
export const { addhoadon, removehoadon, updatehoadon } = actions;
export default reducer;
