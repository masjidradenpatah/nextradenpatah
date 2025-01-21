export interface ActionResponse<T> {
  status: "SUCCESS" | "ERROR";
  success?: string;
  error?: string;
  data?: T;
}
