import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      borderWidth:{
        '1': "1.2px"
      },
      colors:{
        black:{
          100: "#1A1919",
          200: "#060E1E"
        },
        blue:{
          100: "#316FEA"
        },
        grey:{
          100: "#A1ABB5",
          200: "#BEC5CC",
          300: "#D3D8DC",
          400: "#E3E6E9"
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
