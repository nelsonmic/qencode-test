import localFont from "next/font/local";

export const basisgrotesque = localFont({
	src: [
		{
			path: "../../public/fonts/BasisGrotesquePro-Light.ttf",
			weight: "300"
		},
		{
			path: "../../public/fonts/BasisGrotesquePro-Regular.ttf",
			weight: "400"
		},
		{
			path: "../../public/fonts/BasisGrotesquePro-Medium.ttf",
			weight: "500"
		},
		{
			path: "../../public/fonts/BasisGrotesquePro-Bold.ttf",
			weight: "700"
		},
            {
			path: "../../public/fonts/BasisGrotesquePro-Black.ttf",
			weight: "900"
		}
	],
	variable: "--font-basisgrotesque"
});
