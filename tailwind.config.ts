import type { Config } from "tailwindcss"

const config = {
  content: ["./src/**/*.{js,ts,jsx,tsx}", "./src/content/**/*.{md,mdx}"],
  darkMode: ["class"],
  future: {
    hoverOnlyWhenSupported: true,
  },
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    borderWidth: {
      DEFAULT: "1px",
      "0": "0",
      "0.5": "0.5px",
      "2": "2px",
      "3": "3px",
      "4": "4px",
      "6": "6px",
      "8": "8px",
    },
    extend: {
      fontFamily: {
        heading: ["var(--font-heading)"],
      },
      colors: {
        okaogreen: {
          50: "#EBFFFA",
          100: "#D6FFF5",
          200: "#AEFFEC",
          300: "#8AFEE3",
          400: "#62FEDA",
          500: "#3AFED0",
          600: "#01F9BF",
          700: "#01BC90",
          800: "#017A5E",
          900: "#003D2F",
          950: "#001E17",
        },
        okaogray: {
          50: "#FCFCFC",
          100: "#FCFCFC",
          200: "#FAFAFA",
          300: "#F5F5F5",
          400: "#F2F2F2",
          500: "#EFEFEF",
          600: "#D9D9D9",
          700: "#BFBFBF",
          800: "#A1A1A1",
          900: "#737373",
          950: "#545454",
        },
        okaoblue: {
          50: "#F1FBFD",
          100: "#DFF5FB",
          200: "#BBEAF7",
          300: "#92DDF2",
          400: "#60CDEB",
          500: "#1CB9E3",
          600: "#19A5CC",
          700: "#1693B6",
          800: "#137996",
          900: "#0D586D",
          950: "#0A3F4D",
        },
        micream: {
          50: "rgb(255 255 255)",
          100: "rgb(255 255 255)",
          200: "rgb(255 248 240)",
          300: "rgb(255 243 226)",
          400: "rgb(252 233 216)",
          500: "rgb(242 223 206)",
          600: "rgb(234 212 196)",
          700: "rgb(224 200 185)",
          800: "rgb(212 193 176)",
          900: "rgb(191 183 169)",
        },
        miblue: {
          50: "rgb(243 248 255)",
          100: "rgb(236 243 255)",
          200: "rgb(215 227 255)",
          300: "rgb(184 210 255)",
          400: "rgb(140 191 255)",
          500: "rgb(96 165 250)",
          600: "rgb(64 137 219)",
          700: "rgb(48 116 186)",
          800: "rgb(40 94 157)",
          900: "rgb(40 74 130)",
        },
        mired: {
          100: "rgb(193 55 101)",
          200: "rgb(183 45 91)",
          300: "rgb(173 35 81)",
          400: "rgb(163 25 71)",
          500: "rgb(153 15 61)",
          600: "rgb(143 5 51)",
          700: "rgb(133 0 41)",
          800: "rgb(123 0 31)",
          900: "rgb(113 0 21)",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: `var(--radius)`,
        md: `calc(var(--radius) - 2px)`,
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "fade-up": {
          "0%": {
            opacity: "0",
            transform: "translateY(10px)",
          },
          "80%": {
            opacity: "0.7",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0px)",
          },
        },
        "fade-down": {
          "0%": {
            opacity: "0",
            transform: "translateY(-10px)",
          },
          "80%": {
            opacity: "0.6",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0px)",
          },
        },
        "fade-in": {
          "0%": {
            opacity: "0",
          },
          "50%": {
            opacity: "0.6",
          },
          "100%": {
            opacity: "1",
          },
        },
        "fade-out": {
          "0%": {
            opacity: "0",
          },
          "50%": {
            opacity: "0.6",
          },
          "100%": {
            opacity: "1",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-up": "fade-up 0.5s",
        "fade-down": "fade-down 0.5s",
        "fade-in": "fade-in 0.4s",
        "fade-out": "fade-out 0.4s",
      },
    },
  },
  plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography")],
} satisfies Config

export default config