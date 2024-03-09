import clsx from "clsx";
import React, { ComponentProps } from "react";

const Sizes = {
	lg: "py-3 px-6 font-medium text-base",
	md: "py-2 px-4 font-medium text-base",
	sm: "py-2 px-4 font-medium text-sm",
	xs: "py-0.5 px-2 font-medium text-xs leading-[1.6]"
};

const Colors = {
	plain: {
		filled: "bg-grey-300 text-black-100",
		outline: "border-grey-300 text-black-200 font-medium hover:bg-grey-300/[.16]"
	},

	blue: {
		filled: "bg-blue-100 text-white",
		outline: "border-blue-100 text-blue-500 hover:bg-blue-500/[.16]"
	}
};

export interface ButtonProps extends ComponentProps<"button"> {
	children?: React.ReactNode;
	color: "plain" | "blue";
	loading?: boolean;
	size: "xs" | "sm" | "md" | "lg";
	variant: "filled" | "outline";
}

export const Button = (props: ButtonProps) => {
	const {
		children,
		className,
		color,
		loading = false,
		size = "lg",
		variant,
		...props_
	} = props;

	return (
		<button
			{...props_}
			className={clsx(
				"rounded-md outline-none inline-flex items-center justify-center disabled:opacity-75 disabled:cursor-not-allowed transition-all duration-300 ease-linear",
				className,
				Sizes[size],
				(Colors[color] as any)?.[variant],
				{ "border bg-transparent": variant === "outline" }
			)}
			disabled={props_.disabled || loading}
		>
			{loading ? <p>Loading...</p> : children}
		</button>
	);
};
