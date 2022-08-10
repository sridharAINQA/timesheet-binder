export const dbName = process.env.REACT_APP_DB;
export const __uspsertUrl__ = `${process.env.REACT_APP_BASE_URL_PROTOCAL}://${process.env.REACT_APP_BASE_URL_HOST}:${process.env.REACT_APP_BASE_URL_PORT}/api/upsert_document`;
export const __readDocumentUrl__ = `${process.env.REACT_APP_BASE_URL_PROTOCAL}://${process.env.REACT_APP_BASE_URL_HOST}:${process.env.REACT_APP_BASE_URL_PORT}/api/read_documents`;
export const __deleteUrl__ = `${process.env.REACT_APP_BASE_URL_PROTOCAL}://${process.env.REACT_APP_BASE_URL_HOST}:${process.env.REACT_APP_BASE_URL_PORT}/api/delete_document`;


// Not used
export const __baseUrl__ = `${process.env.REACT_APP_BASE_URL_PROTOCAL}://${process.env.REACT_APP_BASE_URL_HOST}:${process.env.REACT_APP_BASE_URL_PORT}/api/read_qdmqueries`;
export const __update__ = `${process.env.REACT_APP_BASE_URL_PROTOCAL}://${process.env.REACT_APP_BASE_URL_HOST}:${process.env.REACT_APP_BASE_URL_PORT}/api/updatedocument`;