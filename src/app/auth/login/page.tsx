"use client"
import { Button } from "@/components/Button";
import { FormInput } from "@/components/FormInput";
import { Github, Google } from "@/components/Icons";
import { RHFInputGroup } from "@/components/InputGroup";
import { FormProvider, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { PasswordInput } from "@/components/PasswordInput";
import { signInSchema } from "@/core/validators";
import Link from "next/link";
import { Routes } from "@/core/routing";
import { LoginDto } from "@/types/dtos";
import { useLogin } from "@/hooks/auth/useLogin";
import appConfig from "../../../../env.config"

const Login = () => {
      const methods = useForm({ resolver: yupResolver(signInSchema), mode:"all" });
	const { isPending, loginWithEmail } = useLogin();
      const onSubmit = methods.handleSubmit((data: LoginDto) => {
            loginWithEmail({
                  email: data.email,
                  password: data.password
            })
      }
);
console.log(appConfig.BASE_URL);
      return (
            <div className="flex items-center flex-col gap-10 w-full">
                  <h1 className="font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl text-center">Log in to your account</h1>
                  <div className="flex items-center flex-wrap gap-4 w-full">
                        <Button
					className="flex-1"
					color="plain"
					loading={false}
					size="lg"
					type="button"
					variant="outline"
				>
					<span className="flex flex-row items-center gap-2">
						<Google height={18} width={18} />
						<p>Google</p>
					</span>
				</Button>
                        <Button
					className="flex-1"
					color="plain"
					loading={false}
					size="lg"
					type="button"
					variant="outline"
				>
					<span className="flex flex-row items-center gap-2">
						<Github height={18} width={19} />
						<p>Github</p>
					</span>
				</Button>
                  </div>
                  <div className="w-full relative flex flex-col items-center">
                        <div className="border-b border-grey-400 w-full"></div>
                        <p className="bg-white p-2 text-xs text-grey-200 absolute -bottom-3">OR</p>
                  </div>
                  <div className="w-full">
                        <FormProvider {...methods} >
                              <form
                                    className="flex flex-col gap-6"
                                    onSubmit={onSubmit}
                              >
                                    <RHFInputGroup name="email">
                                          <FormInput
                                                id="email"
                                                placeholder="Work email"
                                                type="text"
                                                {...methods.register("email")}
                                          />
                                    </RHFInputGroup>
                                    {
                                          methods.watch("email") && !methods.formState.errors.email ? (
                                          <div>
                                                <RHFInputGroup name="password">
                                                      <PasswordInput
                                                            id="password"
                                                            placeholder="Password"
                                                            {...methods.register("password")}
                                                      />
                                                </RHFInputGroup>
                                                <div className="flex justify-end mt-2">
                                                      <Link
                                                      className="text-blue-100 text-sm font-medium"
                                                      href={Routes.auth.forgotPassword}
                                                      >
                                                      Forgot password?
                                                      </Link>
                                                </div>
                                          </div>
                                          ) : null
                                    }

                                    <Button
                                          color="blue"
                                          loading={isPending}
                                          size="lg"
                                          type="submit"
                                          variant="filled"
                                    >
                                                Log in to Qencode
                                    </Button>
                                    <Link href={Routes.auth.login}>
                                          <p className="text-sm text-center">
                                                Is your company new to Qencode?{" "}
                                                <span className="text-blue-100">Sign up</span>
                                          </p>
					      </Link>
                              </form>
                        </FormProvider>
                  </div>
            </div>
      )
}

export default Login;