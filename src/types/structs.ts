import { AxiosError } from "axios";

export interface AbstractApiResponse<T> {
      error?: number;
      detail?: (T | null)[];
      timestamp?: number;
      access_token?: string;
      refresh_token?: string;
      token_expire?: number;
      refresh_token_expire?: number;
}

export type ApiError = AxiosError<AbstractApiResponse<void>>;

export type FilteredResponse<T> = Pick<
	AbstractApiResponse<T>,
	"detail" | "access_token" | "refresh_token"
>;