import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "var(--color-primary)",
          light: "var(--color-primary-light)",
          dark: "var(--color-primary-dark)",
          50: "var(--color-primary-50)",
          100: "var(--color-primary-100)",
          500: "var(--color-primary-500)",
          600: "var(--color-primary-600)",
          700: "var(--color-primary-700)",
        },
        accent: {
          DEFAULT: "var(--color-accent)",
          light: "var(--color-accent-light)",
        },
        surface: {
          DEFAULT: "var(--color-surface)",
          secondary: "var(--color-surface-secondary)",
          tertiary: "var(--color-surface-tertiary)",
        },
        text: {
          primary: "var(--color-text-primary)",
          secondary: "var(--color-text-secondary)",
          tertiary: "var(--color-text-tertiary)",
          inverse: "var(--color-text-inverse)",
        },
        border: {
          DEFAULT: "var(--color-border)",
          light: "var(--color-border-light)",
        },
        success: "var(--color-success)",
        warning: "var(--color-warning)",
        error: "var(--color-error)",
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      fontSize: {
        "heading-1": ["32px", { lineHeight: "40px", fontWeight: "700" }],
        "heading-2": ["24px", { lineHeight: "32px", fontWeight: "700" }],
        "heading-3": ["20px", { lineHeight: "28px", fontWeight: "600" }],
        "heading-4": ["18px", { lineHeight: "24px", fontWeight: "600" }],
        "body-lg": ["16px", { lineHeight: "24px", fontWeight: "400" }],
        "body-md": ["14px", { lineHeight: "20px", fontWeight: "400" }],
        "body-sm": ["12px", { lineHeight: "16px", fontWeight: "400" }],
        caption: ["11px", { lineHeight: "14px", fontWeight: "400" }],
      },
      borderRadius: {
        sm: "var(--radius-sm)",
        md: "var(--radius-md)",
        lg: "var(--radius-lg)",
        xl: "var(--radius-xl)",
        "2xl": "var(--radius-2xl)",
        full: "9999px",
      },
      boxShadow: {
        card: "var(--shadow-card)",
        dropdown: "var(--shadow-dropdown)",
        modal: "var(--shadow-modal)",
      },
      spacing: {
        18: "4.5rem",
        88: "22rem",
        100: "25rem",
        120: "30rem",
      },
      screens: {
        xs: "375px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1440px",
      },
      animation: {
        "slide-in": "slideIn 0.3s ease-out",
        "slide-out": "slideOut 0.3s ease-in",
        "fade-in": "fadeIn 0.2s ease-out",
        "drawer-in": "drawerIn 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
        "drawer-out": "drawerOut 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
      },
      keyframes: {
        slideIn: {
          "0%": { transform: "translateY(10px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        slideOut: {
          "0%": { transform: "translateY(0)", opacity: "1" },
          "100%": { transform: "translateY(10px)", opacity: "0" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        drawerIn: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(0)" },
        },
        drawerOut: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
