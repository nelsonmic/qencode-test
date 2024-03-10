"use client"
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button } from "@/components/Button";
import { FormInput } from "@/components/FormInput";
import { RHFInputGroup } from "@/components/InputGroup";
import { FormProvider, useForm } from "react-hook-form";
import { emailSchema } from "@/core/validators";
import { useRouter } from "next/navigation";
import { Routes } from "@/core/routing";
import { useForgotPassword } from "@/hooks/auth/useForgotPassword";

const ForgotPassword = () => {
      const router = useRouter();
	const methods = useForm({
		resolver: yupResolver(
			yup.object().shape({
				email: emailSchema.required("Email is required")
			})
		)
	});

	const { isPending, forgotPassword } = useForgotPassword();
	const onSubmit = methods.handleSubmit((data: { email: string }) =>
		forgotPassword({ email: data.email })
	);

      return (
            <div className="flex items-center flex-col gap-10 w-full">
            <h1 className="font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl">Forgot Password?</h1>
            <div className="w-full">
                  <FormProvider {...methods} >
                        <form
                              className="flex flex-col gap-6"
                              onSubmit={onSubmit}
                        >
                              <RHFInputGroup name="email">
                                    <FormInput
                                          id="email"
                                          placeholder="Enter your email"
                                          type="text"
                                          {...methods.register("email")}
                                    />
                              </RHFInputGroup>

                              <Button
                                    color="blue"
                                    loading={isPending}
                                    size="lg"
                                    type="submit"
                                    variant="filled"
                              >
                                          Send
                              </Button>
                              <Button
                                    color="plain"
                                    size="lg"
                                    type="button"
                                    variant="outline"
                                    onClick={() => router.push(Routes.auth.login)}
                              >
                                          Cancel
                              </Button>

                        </form>
                  </FormProvider>
            </div>
      </div>
      )
}

export default ForgotPassword;