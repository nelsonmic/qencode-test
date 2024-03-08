import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors:{
        blue:{
          100: "#316FEA"
        },
        grey:{
          100: "#A1ABB5",
          200: "#BEC5CC",
          300: "#D3D8DC"
        }
      },
      fontFamily: {
				montserrat: ["var(--font-basisgrotesque)"]
			},
    },
  },
  plugins: [],
};
export default config;
