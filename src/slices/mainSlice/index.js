import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  defaultReject,
  defaultState,
  __deleteUrl__,
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

// TASK - Employee level
const UPSERT_TASK = createAsyncThunk(
  `mainSlice/upsertTask`,
  async (payload = {}, { rejectWithValue }) => {
    try {
      const Body = mainSliceQuery.upsertTask(payload);
      const data = await fetchData(
        { body: JSON.stringify(Body) },
        __uspsertUrl__
      );
      return {
        ...defaultState.Info,
        data,
      };
    } catch (error) {
      return rejectWithValue({
        ...defaultReject,
        message: error.message,
      });
    }
  }
);

const DELETE_TASK = createAsyncThunk(
  `mainSlice/deleteTask`,
  async (payload = {}, { rejectWithValue }) => {
    try {
      const Body = mainSliceQuery.deleteTask(payload);
      const data = await fetchData(
        { body: JSON.stringify(Body) },
        __deleteUrl__
      );
      return {
        ...defaultState.Info,
        data,
      };
    } catch (error) {
      return rejectWithValue({
        ...defaultReject,
        message: error.message,
      });
    }
  }
);

const GET_TASK_BY_ID = createAsyncThunk(
  `mainSlice/getTaskById`,
  async (payload = {}, { rejectWithValue }) => {
    try {
      const Body = mainSliceQuery.getTaskByTaskId(payload);
      const data = await fetchData(
        { body: JSON.stringify(Body) },
        __readDocumentUrl__
      );
      return {
        ...defaultState.List,
        data,
      };
    } catch (error) {
      return rejectWithValue({
        ...defaultReject,
        message: error.message,
      });
    }
  }
);

const GET_TASKS_BY_EMPLOYEE_ID = createAsyncThunk(
  `mainSlice/getTasksByEmployeeId`,
  async (payload = {}, { rejectWithValue }) => {
    try {
      const data = await fetchData(
        {
          body: JSON.stringify(mainSliceQuery.getTaskByEmployeeId(payload)),
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

const GET_ALL_TASKS = createAsyncThunk(
  `mainSlice/getAllTasks`,
  async (payload = {}, { rejectWithValue }) => {
    try {
      const data = await fetchData(
        {
          body: JSON.stringify(mainSliceQuery.getAllTasks()),
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

const UPDATE_TASK_STATUS = createAsyncThunk(
  `mainSlice/updateTaskStatus`,
  async (payload = {}, { rejectWithValue }) => {
    try {
      const Body = mainSliceQuery.updateTaskStatus(payload);
      const data = await fetchData(
        { body: JSON.stringify(Body) },
        __uspsertUrl__
      );
      return {
        ...defaultState.Info,
        data,
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
    upsertTask: {
      ...defaultState.Info,
    },
    deleteTask: {
      ...defaultState.Info,
    },
    getTaskById: {
      ...defaultState.Info,
    },
    getTasksByEmployeeId: {
      ...defaultState.List,
    },
    getAllTasks: {
      ...defaultState.List,
    },
    updateTaskStatus: {
      ...defaultState.Info,
    },
  },
  extraReducers: {
    // GET_USER_BY_USERNAME_PASSWORD
    [GET_USER_BY_USERNAME_PASSWORD.fulfilled]: (state, action) => {
      state.getUserByUsernamePassword = action?.payload ?? {};
    },
    [GET_USER_BY_USERNAME_PASSWORD.pending]: (state, action) => {
      state.getUserByUsernamePassword.loading = true;
    },
    [GET_USER_BY_USERNAME_PASSWORD.rejected]: (state, action) => {
      state.getUserByUsernamePassword = action?.payload ?? {};
    },

    // UPSERT_TASK
    [UPSERT_TASK.fulfilled]: (state, action) => {
      state.upsertTask = action?.payload ?? {};
    },
    [UPSERT_TASK.pending]: (state, action) => {
      state.upsertTask.loading = true;
    },
    [UPSERT_TASK.rejected]: (state, action) => {
      state.upsertTask = action?.payload ?? {};
    },

    // DELETE_TASK
    [DELETE_TASK.fulfilled]: (state, action) => {
      state.deleteTask = action?.payload ?? {};
    },
    [DELETE_TASK.pending]: (state, action) => {
      state.deleteTask.loading = true;
    },
    [DELETE_TASK.rejected]: (state, action) => {
      state.deleteTask = action?.payload ?? {};
    },

    // GET_TASK_BY_ID
    [GET_TASK_BY_ID.fulfilled]: (state, action) => {
      state.getTaskById = action?.payload ?? {};
    },
    [GET_TASK_BY_ID.pending]: (state, action) => {
      state.getTaskById.loading = true;
    },
    [GET_TASK_BY_ID.rejected]: (state, action) => {
      state.getTaskById = action?.payload ?? {};
    },

    // GET_TASKS_BY_EMPLOYEE_ID
    [GET_TASKS_BY_EMPLOYEE_ID.fulfilled]: (state, action) => {
      state.getTasksByEmployeeId = action?.payload ?? {};
    },
    [GET_TASKS_BY_EMPLOYEE_ID.pending]: (state, action) => {
      state.getTasksByEmployeeId.loading = true;
    },
    [GET_TASKS_BY_EMPLOYEE_ID.rejected]: (state, action) => {
      state.getTasksByEmployeeId = action?.payload ?? {};
    },

    // GET_ALL_TASKS
    [GET_ALL_TASKS.fulfilled]: (state, action) => {
      state.getAllTasks = action?.payload ?? {};
    },
    [GET_ALL_TASKS.pending]: (state, action) => {
      state.getAllTasks.loading = true;
    },
    [GET_ALL_TASKS.rejected]: (state, action) => {
      state.getAllTasks = action?.payload ?? {};
    },

    // UPDATE_TASK_STATUS
    [UPDATE_TASK_STATUS.fulfilled]: (state, action) => {
      state.updateTaskStatus = action?.payload ?? {};
    },
    [UPDATE_TASK_STATUS.pending]: (state, action) => {
      state.updateTaskStatus.loading = true;
    },
    [UPDATE_TASK_STATUS.rejected]: (state, action) => {
      state.updateTaskStatus = action?.payload ?? {};
    },
  },
});

// ORDER_SET ACTION LISTS
const mainSliceActions = {
  GET_USER_BY_USERNAME_PASSWORD,
  UPSERT_TASK,
  DELETE_TASK,
  GET_TASK_BY_ID,
  GET_TASKS_BY_EMPLOYEE_ID,
  GET_ALL_TASKS,
  UPDATE_TASK_STATUS,
};

export { mainSliceActions };

export default mainSlice.reducer;
