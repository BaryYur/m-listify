import type { AxiosError } from "axios";

type ApiErrorResponse = {
  message?: string;
};

export const handleApiError = (error: AxiosError<ApiErrorResponse>): never => {
  if (error.response?.data) {
    throw new Error(error.response.data.message || "Something went wrong.");
  }

  throw new Error("Server connection error");
};
