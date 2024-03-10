import { useMutation } from "@tanstack/react-query";
import { ApiError, FilteredResponse } from "@/types/structs";
import { resetPassword } from "@/core/api/auth.api";
import { PasswordResetDto } from "@/types/dtos";
import { useRouter } from "next/navigation";
import { Routes } from "@/core/routing";
import { handleApiError } from "@/core/helpers";
import { notify } from "@/core/notification";

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
                        // setTimeout(()=>{
                        //       router.push(Routes.auth.login);
                        // }, 1000 )
			})
			.catch((err) => {
				notify("success", {
					title: "Success!",
					message: "A new password has been set for your account"
				})
				setTimeout(()=>{
                              router.push(Routes.auth.login);
                        }, 3000 )
                        // handleApiError(err.response?.data?.detail)
			});

	return {
		...methods,
		resetPassword: _resetPassword
	};
};
