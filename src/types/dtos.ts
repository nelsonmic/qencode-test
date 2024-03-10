export interface LoginDto {
	email: string;
	password: string;
}

export interface PasswordResetDto {
	password: string;
	secret: string;
	token: string
}