import { useMutation } from "@tanstack/react-query";
import { ApiError, FilteredResponse } from "@/types/structs";
import { resetPassword } from "@/core/api/auth.api";
import { PasswordResetDto } from "@/types/dtos";
import { useRouter } from "next/navigation";
import { Routes } from "@/core/routing";

export const useResetPassword = () => {
      const router = useRouter();
	const methods = useMutation<
		FilteredResponse<void>,
		any,
		PasswordResetDto
	>({
		mutationFn: (props) => resetPassword(props)
	});

	const _resetPassword = (payload: PasswordResetDto) =>
		methods
			.mutateAsync(payload)
			.then((val) => {
                        setTimeout(()=>{
                              router.push(Routes.auth.login);
                        }, 1000 )
			})
			.catch((err) => {
				const e = err as ApiError;
                        setTimeout(()=>{
                              router.push(Routes.auth.login);
                        }, 1000 )
			});

	return {
		...methods,
		resetPassword: _resetPassword
	};
};
