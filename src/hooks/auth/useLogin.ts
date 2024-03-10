import { StorageKeys } from "@/constants/enums";
import { login } from "@/core/api/auth.api";
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
			})
			.catch((err) => {
				const e = err as ApiError;
                        console.log(e)
			});

	return {
		...methods,
		loginWithEmail: _login
	};
};
