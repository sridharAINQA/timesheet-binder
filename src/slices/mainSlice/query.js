import { dbName } from "../../settings";

export const mainSliceQuery = {
  getUserByEmailPassword: ({ mailID, password }) => {
    return {
      db_name: dbName,
      metadata_dbname: "ATP_Platform_DEV",
      filter: `user.mailID=='${mailID}' && user.password=='${password}'`,
      entity: "user",
      return_fields: "user",
    };
  },

  upsertTask: (data) => {
    let filter = {};
    if (data?._key) {
      filter = { filter: { _key: data?._key } };
    }
    return [
      {
        db_name: dbName,
        entity: "TaskDetails",
        metadata_dbname: "ATP_Platform_DEV",
        is_metadata: true,
        metadataId: "6aa05483-3a2f-4c1c-af4c-7abfc925a5dd",
        ...filter,
        doc: {
          title: data?.title,
          empID: data?.empID,
          duration: Number(data?.duration),
        },
      },
    ];
  },

  deleteTask: ({ _key }) => {
    return {
      db_name: dbName,
      entity: "TaskDetails",
      metadata_dbname: "ATP_Platform_DEV",
      filter: `TaskDetails._key=='${_key}'`,
    };
  },

  getTaskByTaskId: ({ taskKey }) => {
    return {
      db_name: dbName,
      metadata_dbname: "ATP_Platform_DEV",
      filter: `TaskDetails._key=='${taskKey}'`,
      entity: "TaskDetails",
      return_fields: "TaskDetails",
    };
  },

  getTaskByEmployeeId: ({ empID }) => {
    return {
      db_name: dbName,
      metadata_dbname: "ATP_Platform_DEV",
      entity: "TaskDetails",
      filter: `TaskDetails.empID=='${empID}'`,
      return_fields: "TaskDetails",
    };
  },

  getAllTasks: () => {
    return {
      db_name: dbName,
      metadata_dbname: "ATP_Platform_DEV",
      entity: "TaskDetails",
      return_fields: "merge(TaskDetails, {empID: document(TaskDetails.empID)})",
      sort: "TaskDetails.updatedate DESC",
    };
  },

  updateTaskStatus: ({ _key, status, verifiedby, reason = "" }) => {
    debugger;
    return [
      {
        db_name: dbName,
        entity: "TaskDetails",
        metadata_dbname: "ATP_Platform_DEV",
        is_metadata: true,
        metadataId: "6aa05483-3a2f-4c1c-af4c-7abfc925a5dd",
        filter: {
          _key: _key,
        },
        doc: {
          status: status,
          verifiedby: verifiedby,
          reason: reason,
        },
      },
    ];
  },
};
