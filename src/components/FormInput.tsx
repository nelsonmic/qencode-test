import clsx from "clsx";
import React, { ComponentProps, forwardRef } from "react";

type RightIconProps =
	| { handleClick?: undefined; rightIcon?: undefined }
	| {
			handleClick?: () => void;
			rightIcon: React.ReactNode;
	  };

interface InputLabelProps extends ComponentProps<"label"> {
	label?: React.ReactNode;
}

export const InputLabel = (props_: InputLabelProps) => {
	const { children, label, ...props } = props_;

	const className = "text-black-200 font-medium text-sm ml-0 mb-1";

	if (!label)
		return (
			<label {...props} className={className}>
				{children}
			</label>
		);

	return (
		<label {...props} className="flex flex-col gap-[2px]">
			<span className={className}>{label}</span>

			{children}
		</label>
	);
};

interface InputProps extends ComponentProps<"input"> {
	initialValue?: string;
	label?: string;
	leftIcon?: React.ReactNode;
	placeholder?: string;
	readOnly?: boolean;
}

export type FormInputProps = InputProps;

export const FormInput = forwardRef<
	HTMLInputElement,
	InputProps & RightIconProps
>(function FormInput_(props, ref) {
	const {
		initialValue,
		label,
		leftIcon,
		name,
		readOnly,
		rightIcon,
		...inputProps
	} = props;

	return (
		<div className={clsx(props.className, "flex flex-col gap-[2px]")}>
			{label ? <InputLabel htmlFor={name}>{label}</InputLabel> : null}

			<div
				className={clsx(
					"flex items-center relative h-[45px] border border-grey-300 gap-x-2 rounded-md overflow-hidden focus-within:ring ring-blue-100/[0.4]",
					{
						"bg-gray-100 cursor-not-allowed": props?.disabled
					}
				)}
			>
				{!leftIcon ? null : (
					<span className="not-sr-only pl-3 relative text-[20px] mb-[3.5px] text-gray-720/[0.5]">
						{leftIcon}
					</span>
				)}

				<input
					{...inputProps}
					ref={ref}
					className={clsx(
						"h-full w-full text-[#181A20] text-base bg-transparent outline-none placeholder:text-[#B5B5B5] pt-[2px] pl-4",
						readOnly && "cursor-not-allowed",
						{
							"pl-4": !leftIcon,
							"pr-4": !rightIcon
						}
					)}
					defaultValue={initialValue}
					name={name}
					onChange={props.onChange}
					readOnly={readOnly}
					style={{
						fontSize: 16
					}}
				/>

				{rightIcon}
			</div>
		</div>
	);
});

interface FormTextAreaProps extends ComponentProps<"textarea"> {
	classes?: { textarea?: string };
	label?: string;
}

export const FormTextArea = forwardRef<HTMLTextAreaElement, FormTextAreaProps>(
	function FormTextArea_(props, ref) {
		const { classes, label, name, readOnly, ...textareaProps } = props;

		return (
			<div className={clsx(props.className, "flex flex-col gap-[2px]")}>
				{label ? <InputLabel htmlFor={name}>{label}</InputLabel> : null}

				<div className="flex items-center relative">
					<textarea
						ref={ref}
						{...textareaProps}
						className={clsx(
							"w-full rounded-[12px] border border-[#CFCFCF] text-[#181A20] outline-none p-[1rem]",
							readOnly && "cursor-not-allowed",
							classes?.textarea
						)}
						name={name}
						readOnly={readOnly}
					/>
				</div>
			</div>
		);
	}
);
