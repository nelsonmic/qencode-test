import { StorageKeys } from "@/constants/enums";
import { login } from "@/core/api/auth.api";
import { handleApiError } from "@/core/helpers";
import { notify } from "@/core/notification";
import { LoginDto } from "@/types/dtos";
import { ApiError, FilteredResponse } from "@/types/structs";
import { useMutation } from "@tanstack/react-query";
import { setCookie } from "cookies-next";


export const useLogin = () => {
	const methods = useMutation<FilteredResponse<Array<any> | string | number>, any,LoginDto>({
		mutationFn: (props) => login(props)
	});

	const _login = (payload: LoginDto) =>
		methods
			.mutateAsync(payload)
			.then((val) => {
                        setCookie(StorageKeys.TOKEN, val.access_token || "");
				notify("success", {
					title: "Success!",
					message: "Log in successful"
				})
			})
			.catch((err) => {
				handleApiError(err.response?.data?.detail)
			});

	return {
		...methods,
		loginWithEmail: _login
	};
};
