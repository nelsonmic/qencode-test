import { useMutation } from "@tanstack/react-query";
import { ApiError, FilteredResponse } from "@/types/structs";
import { forgotPassword } from "@/core/api/auth.api";
import { useRouter } from "next/navigation";
import { Routes } from "@/core/routing";

export const useForgotPassword = () => {
      const router = useRouter();
	const methods = useMutation<
		FilteredResponse<void>,
		any,
		{ email: string }
	>({
		mutationFn: (props) => forgotPassword(props)
	});

	const _forgotPassword = (payload: { email: string }) =>
		methods
			.mutateAsync(payload)
			.then((val) => {
				console.log(val)
                        setTimeout(() => {
                              router.push(Routes.auth.resetPassword)
                        }, 1000)
			})
			.catch((err) => {
				const e = err as ApiError;
				console.log(e);
                        setTimeout(() => {
                              router.push(Routes.auth.resetPassword)
                        }, 1000)
			});

	return {
		...methods,
		forgotPassword: _forgotPassword
	};
};
