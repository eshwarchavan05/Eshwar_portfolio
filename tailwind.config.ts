import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          950: "#0A0A0C",
          900: "#111113",
          800: "#1A1A1D",
          700: "#232327",
          600: "#2E2E33",
          500: "#48484F",
          400: "#6F6F78",
          300: "#9C9CA3",
          200: "#C6C6CB",
          100: "#E7E7E9",
          50: "#F7F7F8",
        },
        accent: {
          DEFAULT: "#E8744A",
          dim: "#B85E3C",
          subtle: "#3A2A22",
        },
      },
      fontFamily: {
        display: ["var(--font-display)"],
        body: ["var(--font-body)"],
        mono: ["var(--font-mono)"],
      },
      fontSize: {
        "display-xl": ["4.5rem", { lineHeight: "1.02", letterSpacing: "-0.03em" }],
        "display-lg": ["3.25rem", { lineHeight: "1.05", letterSpacing: "-0.03em" }],
        "display-md": ["2.25rem", { lineHeight: "1.1", letterSpacing: "-0.02em" }],
      },
      maxWidth: {
        content: "72rem",
      },
      borderRadius: {
        sm: "6px",
        DEFAULT: "10px",
        md: "12px",
        lg: "14px",
      },
      boxShadow: {
        subtle: "0 1px 2px rgba(0,0,0,0.4), 0 0 0 1px rgba(255,255,255,0.04)",
        card: "0 4px 16px rgba(0,0,0,0.35)",
      },
      transitionTimingFunction: {
        out: "cubic-bezier(0.16, 1, 0.3, 1)",
      },
    },
  },
  plugins: [],
};
export default config;
