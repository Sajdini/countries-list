import { createSlice } from "@reduxjs/toolkit";

const countrySlice = createSlice({
  name: "country",
  initialState: {
    data: [],
    shownData: [],
    isloaded: false,
    pageNumber: 1,
    sortedData: false,
  },
  reducers: {
    loadData(state, action) {
      state.data = action.payload.data;
      state.shownData = state.data;
      state.isloaded = true;
    },
    increment(state) {
      state.pageNumber = state.pageNumber + 1;
    },
    decrement(state) {
      state.pageNumber = state.pageNumber - 1;
    },

    jumpToPage(state, action) {
      state.pageNumber = action.payload.number;
    },

    filterDataByRegion(state, action) {
      state.shownData = state.shownData.filter(
        (country) => country.region === "Oceania"
      );
      state.pageNumber = 1;
    },
    filterDataBySize(state, action) {
      state.shownData = state.shownData.filter(
        (country) => country.area < action.payload.area
      );
      state.pageNumber = 1;
    },

    sortData(state, action) {
      const sortData = (x, y) => {
        if (x.name > y.name) {
          return -1;
        }
        if (x.name < y.name) {
          return +1;
        }
        return 0;
      };
      state.sortedData = !state.sortedData;
      if (state.sortedData === true) {
        state.shownData = state.shownData.sort(sortData);
      }
      if (state.sortedData === false) {
        state.shownData = state.data;
      }
    },

    removeFilters(state, action) {
      state.shownData = state.data;
      state.pageNumber = 1;
    },
  },
});

export const sliceActions = countrySlice.actions;
export default countrySlice;
