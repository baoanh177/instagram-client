type methodType = "GET" | "POST" | "PUT" | "PATCH" | "DELETE";

interface IFetchHeaders {
  "Content-Type"?: string;
  Authorization?: string;
}

interface IFetchOptions extends IFetchHeaders {
  method: methodType;
  body?: any;
}

interface IThunkPayload {
  body?: any
  query?: object
  headers?: IFetchHeaders
}

enum Status {
  IDLE = "idle", // ? rảnh
  PENDING = "pending",
  FULFILLED = "fulfilled",
  REJECTED = "rejected"
}
