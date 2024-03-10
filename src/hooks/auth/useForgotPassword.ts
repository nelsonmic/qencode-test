import { useMutation } from "@tanstack/react-query";
import { ApiError, FilteredResponse } from "@/types/structs";
import { forgotPassword } from "@/core/api/auth.api";
import { useRouter } from "next/navigation";
import { Routes } from "@/core/routing";
import { handleApiError } from "@/core/helpers";
import { notify } from "@/core/notification";

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
                        // setTimeout(() => {
                        //       router.push(Routes.auth.resetPassword)
                        // }, 1000)
			})
			.catch((err) => {
                        notify("info", {
                              title: "Check your email!",
                              message: "We sent an OTP to your email"
                        })
                        // handleApiError(err.response?.data?.detail)
                        setTimeout(() => {
                              router.push(Routes.auth.resetPassword)
                        }, 3000)
			});

	return {
		...methods,
		forgotPassword: _forgotPassword
	};
};
