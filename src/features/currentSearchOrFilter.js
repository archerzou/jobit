/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

export const currentSearch = createSlice({
  name: 'currentSearch',
  initialState: {
    searchTerm: 'google',
    page: 1,
    employmentTypesArray: [],
    jobRequirementArray: [],
    categoriesArray: [],
    salaryBounds: [],
    datePosted: 'today',
  },
  reducers: {
    selectCategoriesAdd: (state, action) => {
      state.categoriesArray.push(action.payload);
    },
    selectCategoriesRemove: (state, action) => {
      state.categoriesArray = state.categoriesArray.filter((item) => item !== action.payload);
    },
    selectTypeAdd: (state, action) => {
      state.employmentTypesArray.push(action.payload);
    },
    selectTypeRemove: (state, action) => {
      state.employmentTypesArray = state.employmentTypesArray.filter((item) => item !== action.payload);
    },
    selectJobRequirementAdd: (state, action) => {
      state.jobRequirementArray.push(action.payload);
    },
    selectJobRequirementRemove: (state, action) => {
      state.jobRequirementArray = state.jobRequirementArray.filter((item) => item !== action.payload);
    },
    selectSalaryAdd: (state, action) => {
      state.salaryBounds.push(action.payload);
    },
    selectSalaryRemove: (state, action) => {
      state.salaryBounds = state.salaryBounds.filter((item) => item.min !== action.payload.min);
    },
    searchJob: (state, action) => {
      state.searchTerm = action.payload;
    },
    selectDatePosted: (state, action) => {
      state.datePosted = action.payload;
    },
  },
});

export const {
  selectCategoriesAdd,
  selectCategoriesRemove,
  selectTypeAdd,
  selectTypeRemove,
  selectJobRequirementAdd,
  selectJobRequirementRemove,
  selectSalaryAdd,
  selectSalaryRemove,
  searchJob,
  selectDatePosted,
} = currentSearch.actions;
export default currentSearch.reducer;
