import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: ["class"],
    content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		colors: {
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			},
  			sidebar: {
  				DEFAULT: 'hsl(var(--sidebar-background))',
  				foreground: 'hsl(var(--sidebar-foreground))',
  				primary: 'hsl(var(--sidebar-primary))',
  				'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
  				accent: 'hsl(var(--sidebar-accent))',
  				'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
  				border: 'hsl(var(--sidebar-border))',
  				ring: 'hsl(var(--sidebar-ring))'
  			}
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		keyframes: {
  			'accordion-down': {
  				from: {
  					height: '0'
  				},
  				to: {
  					height: 'var(--radix-accordion-content-height)'
  				}
  			},
  			'accordion-up': {
  				from: {
  					height: 'var(--radix-accordion-content-height)'
  				},
  				to: {
  					height: '0'
  				}
  			}
  		},
  		animation: {
  			'accordion-down': 'accordion-down 0.2s ease-out',
  			'accordion-up': 'accordion-up 0.2s ease-out'
  		}
  	},
  	keyframes: {
  		backgroundanimation: {
  			'0%, 60%': {
  				opacity: '1',
  				zIndex: '999999'
  			},
  			'70%, 100%': {
  				opacity: '0',
  				zIndex: '-1'
  			}
  		},
  		animationX: {
  			'0%': {
  				transform: 'rotateZ(0deg)'
  			},
  			'10%, 20%': {
  				transform: 'rotateZ(90deg)'
  			},
  			'50%, 80%': {
  				transform: 'rotateZ(450deg)'
  			},
  			'100%': {
  				transform: 'rotateZ(450deg)'
  			}
  		},
  		animation1: {
  			'0%': {
  				opacity: '0'
  			},
  			'10%, 80%': {
  				opacity: '1'
  			},
  			'100%': {
  				opacity: '0'
  			}
  		},
  		animation2: {
  			'0%, 10%, 40%, 100%': {
  				opacity: '0'
  			},
  			'20%, 30%': {
  				opacity: '1'
  			}
  		},
  		animation3: {
  			'0%, 20%, 50%, 100%': {
  				opacity: '0'
  			},
  			'30%, 40%': {
  				opacity: '1'
  			}
  		},
  		animation4: {
  			'0%, 30%, 60%, 100%': {
  				opacity: '0'
  			},
  			'40%, 50%': {
  				opacity: '1'
  			}
  		},
  		animation8: {
  			'0%, 60%': {
  				opacity: '0'
  			},
  			'70%, 85%': {
  				opacity: '1'
  			},
  			'95%, 100%': {
  				opacity: '0'
  			}
  		}
  	},
  	animation: {
  		backgroundanimation: 'backgroundanimation 9.5s ease-in-out forwards',
  		'animation-x': 'animationX 9.5s cubic-bezier(0.5, 0, 0, 1) forwards',
  		'animation-1': 'animation1 9.5s cubic-bezier(0.5, 0, 0, 1) forwards',
  		'animation-2': 'animation2 9.5s cubic-bezier(0.5, 0, 0, 1) forwards',
  		'animation-3': 'animation3 9.5s cubic-bezier(0.5, 0, 0, 1) forwards',
  		'animation-4': 'animation4 9.5s cubic-bezier(0.5, 0, 0, 1) forwards',
  		'animation-8': 'animation8 9.5s ease-in-out forwards'
  	}
  },    
  plugins: [require("tailwindcss-animate")],
};
export default config;
