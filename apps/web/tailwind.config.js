/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      screens: {
        'custom-md': '580px',
        'custom-lg': '1250px',
      },
      colors: {
        'jet': 'hsl(210, 35%, 18%)',
        'onyx': 'hsl(210, 40%, 12%)',
        'eerie-black-1': 'hsl(210, 45%, 10%)',
        'eerie-black-2': 'hsl(210, 40%, 9%)',
        'smoky-black': 'hsl(210, 50%, 5%)',
        'white-1': 'hsl(0, 0%, 100%)',
        'white-2': 'hsl(0, 0%, 98%)',
        'orange-yellow-crayola': 'hsl(180, 100%, 50%)',
        'orange-yellow-crayola-dark': 'hsl(180, 100%, 10%)',
        'vegas-gold': 'hsl(180, 80%, 55%)',
        'light-gray': 'hsl(0, 0%, 84%)',
        'light-gray-70': 'hsla(0, 0%, 84%, 0.7)',
        'bittersweet-shimmer': 'hsl(0, 43%, 51%)',
      },
      backgroundImage: {
        'gradient-onyx': 'linear-gradient(to bottom right, hsl(210, 40%, 15%) 3%, hsl(210, 35%, 10%) 97%)',
        'gradient-jet': 'linear-gradient(to bottom right, hsla(210, 45%, 12%, 0.251) 0%, hsla(210, 40%, 8%, 0) 100%), hsl(210, 40%, 10%)',
        'gradient-yellow-1': 'linear-gradient(to bottom right, hsl(180, 100%, 50%) 0%, hsla(180, 100%, 40%, 0) 50%)',
        'gradient-yellow-2': 'linear-gradient(135deg, hsla(180, 100%, 50%, 0.251) 0%, hsla(180, 100%, 45%, 0) 59.86%), hsl(210, 40%, 10%)',
        'border-gradient-onyx': 'linear-gradient(to bottom right, hsl(210, 30%, 20%) 0%, hsla(210, 30%, 20%, 0) 50%)',
        'text-gradient-yellow': 'linear-gradient(to right, hsl(180, 100%, 50%), hsl(180, 100%, 65%))',
      },
      borderRadius: {
        lg: `var(--radius)`,
        md: `calc(var(--radius) - 2px)`,
        sm: "calc(var(--radius) - 4px)",
      },
      boxShadow: {
        'shadow-1': '-4px 8px 24px hsla(0, 0%, 0%, 0.25)',
        'shadow-2': '0 16px 30px hsla(0, 0%, 0%, 0.25)',
        'shadow-3': '0 16px 40px hsla(0, 0%, 0%, 0.25)',
        'shadow-4': '0 25px 50px hsla(0, 0%, 0%, 0.15)',
        'shadow-5': '0 24px 80px hsla(0, 0%, 0%, 0.25)',
      },
      animation: {
        "shiny-text": "shiny-text 8s infinite",
        gradient: "gradient 8s linear infinite",
        marquee: "marquee var(--duration) linear infinite",
        "marquee-vertical": "marquee-vertical var(--duration) linear infinite",
        'marquee-left': 'marquee-left var(--duration, 30s) linear infinite',
        'marquee-up': 'marquee-up var(--duration, 30s) linear infinite'
      },
      keyframes: {
        "shiny-text": {
          "0%, 90%, 100%": {
            "background-position": "calc(-100% - var(--shiny-width)) 0",
          },
          "30%, 60%": {
            "background-position": "calc(100% + var(--shiny-width)) 0",
          },
        },
        gradient: {
          to: {
            backgroundPosition: "var(--bg-size) 0",
          },
        },
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(calc(-100% - var(--gap)))" },
        },
        "marquee-vertical": {
          from: { transform: "translateY(0)" },
          to: { transform: "translateY(calc(-100% - var(--gap)))" },
        },
        'marquee-left': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(calc(-100% - var(--gap)))' }
        },
        'marquee-up': {
          from: { transform: 'translateY(0)' },
          to: { transform: 'translateY(calc(-100% - var(--gap)))' }
        }
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
// https://ui.shadcn.com/docs/installation/manual