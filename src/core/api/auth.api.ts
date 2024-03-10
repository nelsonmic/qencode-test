import { LoginDto, PasswordResetDto } from "@/types/dtos";
import { AbstractApiResponse, FilteredResponse } from "@/types/structs";
import axiosInstance from "../axios";
import { Endpoints } from "../endpoints";


export const login = async (
	payload: LoginDto
): Promise<FilteredResponse<Array<any> | string | number>> => {
	const { data } = await axiosInstance.post<
		AbstractApiResponse<Array<any> | string | number>
	>(Endpoints.LOGIN, payload);

	return {
		detail: data.detail,
            access_token: data.access_token,
            refresh_token: data.refresh_token
	};
};

export const forgotPassword = async ( payload: { email: string}): 
      Promise<FilteredResponse<void>> => {
      const { data } = await axiosInstance.post<
		AbstractApiResponse<void>
	>(Endpoints.FORGOT_PASSWORD, payload);

      return data;
}

export const resetPassword = async ( payload:PasswordResetDto ): 
      Promise<FilteredResponse<void>> => {
	const { data } = await axiosInstance.post<
		AbstractApiResponse<void>
	>(Endpoints.RESET_PASSWORD, payload);

	return data;
};