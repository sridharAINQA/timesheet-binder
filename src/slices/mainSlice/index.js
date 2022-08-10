import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  defaultReject,
  defaultState,
  __readDocumentUrl__,
  __uspsertUrl__,
} from "../../settings";
import { fetchData } from "../../helpers";
import { mainSliceQuery } from "./query";

const GET_USER_BY_USERNAME_PASSWORD = createAsyncThunk(
  `mainSlice/getUserByUsernamePassword`,
  async (payload = {}, { rejectWithValue }) => {
    try {
      const data = await fetchData(
        {
          body: JSON.stringify(mainSliceQuery.getUserByEmailPassword(payload)),
        },
        __readDocumentUrl__
      );

      return {
        ...defaultState.List,
        data: data,
      };
    } catch (error) {
      return rejectWithValue({
        ...defaultReject,
        message: error.message,
      });
    }
  }
);

const mainSlice = createSlice({
  name: "mainSlice",
  initialState: {
    getUserByUsernamePassword: {
      ...defaultState.List,
    },
  },
  extraReducers: {
    [GET_USER_BY_USERNAME_PASSWORD.fulfilled]: (state, action) => {
      state.getUserByUsernamePassword = action?.payload ?? {};
    },
    [GET_USER_BY_USERNAME_PASSWORD.pending]: (state, action) => {
      state.getUserByUsernamePassword.loading = true;
    },
    [GET_USER_BY_USERNAME_PASSWORD.rejected]: (state, action) => {
      state.getUserByUsernamePassword = action?.payload ?? {};
    },
  },
});

// ORDER_SET ACTION LISTS
const mainSliceActions = {
  GET_USER_BY_USERNAME_PASSWORD,
};

export { mainSliceActions };

export default mainSlice.reducer;
