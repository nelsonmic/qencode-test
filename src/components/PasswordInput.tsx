"use client";
import React, { forwardRef, useState } from "react";
import { FormInput, FormInputProps } from "./FormInput";
import { Eye } from "./Icons";

type PasswordInputProps = FormInputProps & {
	hideToggle?: boolean;
};

export const PasswordInput = forwardRef<HTMLInputElement, PasswordInputProps>(
	function PasswordInput_({ hideToggle = false, ...props }, ref) {
		const [showPassword, setShowPassword] = useState<boolean>(false);

		return (
			<FormInput
				{...props}
				ref={ref}
				rightIcon={
					hideToggle ? null : (
						<button
							aria-label={
								showPassword ? "Hide password" : "Show password"
							}
							className="mr-2 p-1 rounded-lg inline-flex items-center justify-center outline-none focus:bg-blue-100/[0.4] hover:bg-blue-100/[0.4] aspect-square w-[30px]"
							data-state={showPassword ? "visible" : "hidden"}
							onClick={() => setShowPassword(!showPassword)}
							type="button"
						>
							<Eye height={20} width={20} />
						</button>
					)
				}
				type={showPassword ? "text" : "password"}
			/>
		);
	}
);
