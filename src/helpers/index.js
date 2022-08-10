import { defaultReject } from "../settings/commonSchema";
import {
  __baseUrl__
} from "../settings";

const validateNetworError = ({ res, rejectWithValue }) => {
  return new Promise((resolve, reject) => {
    if (!res.ok)
      return rejectWithValue({
        ...defaultReject,
        message: `${res?.statusText}`,
      });

    resolve();
  });
};

const returnException = ({ error, rejectWithValue }) => {
  return rejectWithValue({
    ...defaultReject,
    message: error.message,
  });
};


const fetchData = async (input, url = __baseUrl__) => {
  const __options = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: {},
  };
  const res = await fetch(url, {
    ...__options,
    ...input,
  });
  const data = await res.json();
  return data;
};

export { validateNetworError, returnException, fetchData };
