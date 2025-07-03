import type { Config } from "tailwindcss"

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--fontFamily-dm_sans)", "sans-serif"],
        forum: ["var(--fontFamily-forum)", "serif"],
      },
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
          dark: "#090040",
          purple: "#471396",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
          purple: "#B13BFF",
          yellow: "#FFCC00",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
        // Brand Color System - Aligned with Hobby Kitchen Logo
        "primary-dark": "#090040",
        "primary-purple": "#471396",
        "accent-purple": "#B13BFF",
        "accent-yellow": "#FFCC00",
        "gold-crayola": "#FFCC00",
        "quick-silver": "var(--quick-silver)",
        "davys-grey": "var(--davys-grey)",
        "smoky-black-1": "#090040",
        "smoky-black-2": "#471396",
        "smoky-black-3": "#090040",
        "eerie-black-1": "#090040",
        "eerie-black-2": "#471396",
        "eerie-black-3": "#090040",
        "eerie-black-4": "#471396",
        "white-alpha-20": "var(--white-alpha-20)",
        "white-alpha-10": "var(--white-alpha-10)",
        "black-alpha-80": "var(--black-alpha-80)",
        "black-alpha-15": "var(--black-alpha-15)",
        gold: "#FFCC00",
        purple: "#B13BFF",
      },
      fontSize: {
        "display-1": "var(--fontSize-display-1)",
        "headline-1": "var(--fontSize-headline-1)",
        "headline-2": "var(--fontSize-headline-2)",
        "title-1": "var(--fontSize-title-1)",
        "title-2": "var(--fontSize-title-2)",
        "title-3": "var(--fontSize-title-3)",
        "title-4": "var(--fontSize-title-4)",
        "body-1": "var(--fontSize-body-1)",
        "body-2": "var(--fontSize-body-2)",
        "body-3": "var(--fontSize-body-3)",
        "body-4": "var(--fontSize-body-4)",
        "label-1": "var(--fontSize-label-1)",
        "label-2": "var(--fontSize-label-2)",
      },
      fontWeight: {
        regular: "var(--weight-regular)",
        bold: "var(--weight-bold)",
      },
      lineHeight: {
        "1": "var(--lineHeight-1)",
        "2": "var(--lineHeight-2)",
        "3": "var(--lineHeight-3)",
        "4": "var(--lineHeight-4)",
        "5": "var(--lineHeight-5)",
        "6": "var(--lineHeight-6)",
      },
      letterSpacing: {
        "1": "var(--letterSpacing-1)",
        "2": "var(--letterSpacing-2)",
        "3": "var(--letterSpacing-3)",
        "4": "var(--letterSpacing-4)",
        "5": "var(--letterSpacing-5)",
      },
      spacing: {
        section: "var(--section-space)",
      },
      boxShadow: {
        "1": "var(--shadow-1)",
        brand: "var(--shadow-brand)",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
        "24": "var(--radius-24)",
        circle: "var(--radius-circle)",
      },
      transitionDuration: {
        "1": "var(--transition-1)",
        "2": "var(--transition-2)",
        "3": "var(--transition-3)",
      },
      backgroundImage: {
        "gradient-brand": "var(--gradient-brand)",
        "gradient-accent": "var(--gradient-accent)",
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
        brandGlow: {
          "0%, 100%": {
            boxShadow: "0 0 20px rgba(177, 59, 255, 0.3)",
          },
          "50%": {
            boxShadow: "0 0 40px rgba(177, 59, 255, 0.6), 0 0 60px rgba(255, 204, 0, 0.3)",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "spin-slow": "spin 15s linear infinite",
        "brand-glow": "brandGlow 3s ease-in-out infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
export default config
