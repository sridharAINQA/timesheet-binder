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
};
