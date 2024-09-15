import { createSlice } from "@reduxjs/toolkit";

// Створення слайсу фільтрів
const filtersSlice = createSlice({
  name: "filters",
  initialState: {
    name: "",
  },
  reducers: {
    changeFilter: (state, action) => {
      state.name = action.payload;
    },
  },
});

// Вибірка фільтра
export const selectNameFilter = (state) => state.filters.name;

export const { changeFilter } = filtersSlice.actions;
export default filtersSlice.reducer;
