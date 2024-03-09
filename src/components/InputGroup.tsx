import { upperFirst } from "lodash";
import React, { ComponentProps } from "react";
import { useFormContext } from "react-hook-form";
import { path } from "ramda";
import clsx from "clsx";

interface InputGroupProps extends ComponentProps<"div"> {
	children: React.ReactNode;
	error?: Record<string, any> | any;
	guide?: React.ReactNode;
}

const Description = (props: ComponentProps<"div">) => (
	<p
		{...props}
		className={clsx("text-xs pt-1 text-gray-500", props.className)}
	>
		{props.children}
	</p>
);

const ErrorMsg = (props: ComponentProps<"div">) => (
	<p
		{...props}
		className={clsx("text-red-500 text-xs pt-1 pl-4", props.className)}
	>
		{props.children}
	</p>
);

/** @deprecated use RHFInputGroup instead **/
export const InputGroup = React.memo(function InputGroup(
	props: InputGroupProps
) {
	const { children, error = {}, guide, ...props_ } = props;

	return (
		<div {...props_}>
			{children}
			{!("message" in error) ? (
				guide ? (
					<Description>{guide}</Description>
				) : null
			) : (
				<ErrorMsg>{upperFirst(error.message)}</ErrorMsg>
			)}
		</div>
	);
});

interface RHFInputGroupProps extends InputGroupProps {
	name: string;
}

export const RHFInputGroup = React.memo(function RHFInputGroup_(
	props: RHFInputGroupProps
) {
	const { children, name, ...rest } = props;
	const errors = useFormContext().formState.errors;
	const errorPath = path(name.split("."), errors);

	return (
		<InputGroup {...rest} error={errorPath}>
			{children}
		</InputGroup>
	);
});

export { Description, ErrorMsg };
