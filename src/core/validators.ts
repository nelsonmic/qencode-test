import * as yup from "yup";

const emailFormatRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}$/;

export const emailSchema = yup
  .string()
  .matches(emailFormatRegex, "Enter a valid email address")
  .required("Email is required");

export const signInSchema = yup.object().shape({
  email: emailSchema,
  password: yup.string().min(8).required("Password is required"),
});


export const resetPasswordSchema = yup.object().shape({
	confirmPassword: yup
		.string()
		.required("Confirm password is required")
		.min(8)
		.test("passwords-match", "Passwords must match", function (value) {
			return this.parent.password === value;
		}),
	password: yup
		.string()
		.required("Password is required")
		.min(8, "Password should be at least 8 characters long")
		.test(
			"has-lowercase",
			"Password should contain at least one lowercase letter",
			function (value) {
				return /[a-z]/.test(value);
			}
		)
		.test(
			"has-uppercase",
			"Password should contain at least one uppercase letter",
			function (value) {
				return /[A-Z]/.test(value);
			}
		)
		.test(
			"has-numeric",
			"Password should contain at least one numeric digit",
			function (value) {
				return /\d/.test(value);
			}),
});
