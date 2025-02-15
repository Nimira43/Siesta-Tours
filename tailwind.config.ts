import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        '--main': '#ff4500',
        '--sky': '#87ceeb',
        '--dark': '#111',
        '--light': '#fffcfa',
        '--grey-dark': '#333',
        '--grey-medium': '#999',
        '--grey-light': '#ccc',
        '--grey-light-extra': '#eee'
      },
    },
  },
  plugins: [],
}
export default config
