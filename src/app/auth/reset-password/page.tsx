"use client"
import { yupResolver } from "@hookform/resolvers/yup";
import { Button } from "@/components/Button";
import { RHFInputGroup } from "@/components/InputGroup";
import { FormProvider, useForm } from "react-hook-form";
import { resetPasswordSchema } from "@/core/validators";
import { PasswordInput } from "@/components/PasswordInput";
import { useResetPassword } from "@/hooks/auth/useResetPassword";

const ResetPassword = () => {
	const methods = useForm({ resolver: yupResolver(resetPasswordSchema) });
	const { isPending, resetPassword } = useResetPassword();
	const onSubmit = methods.handleSubmit((data: { password: string }) =>
		resetPassword({ password: data.password, token: "", secret: "" })
	);

      return (
            <div className="flex items-center flex-col gap-10 w-full">
            <h1 className="font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl">Create new Password?</h1>
            <div className="w-full">
                  <FormProvider {...methods} >
                        <form
                              className="flex flex-col gap-6"
                              onSubmit={onSubmit}
                        >
                              <RHFInputGroup name="password">
						<PasswordInput
							id="password"
							label="New Password"
							placeholder="Password"
							{...methods.register("password")}
						/>
					</RHFInputGroup>
					<RHFInputGroup name="confirmPassword">
						<PasswordInput
							id="confirmPassword"
							label="Confirm Password"
							placeholder="Password"
							{...methods.register("confirmPassword")}
						/>
					</RHFInputGroup>

                              <Button
                                    color="blue"
                                    loading={isPending}
                                    size="lg"
                                    type="submit"
                                    variant="filled"
                              >
                                          Reset Password
                              </Button>

                        </form>
                  </FormProvider>
            </div>
      </div>
      )
}

export default ResetPassword;